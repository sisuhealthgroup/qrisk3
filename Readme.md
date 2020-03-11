# QRISK®3-2017
A javascript port of [QRISK®3](https://qrisk.org/three/index.php). The QRISK®3 algorithm calculates a person's risk of developing a heart attack or stroke over the next 10 years. It presents the average risk of people with the same risk factors as those entered for that person.

![](https://github.com/sisuhealthgroup/qrisk3/workflows/build/badge.svg)

### Installation
```bash
npm install sisuwellness-qrisk3
```

### Usage
Two steps are involved:
 1. Build the input object using the helper method (although you can do it manually).
 2. Call `calculateScore` method with input object.
 
 **Example:**

```bash
const qrisk = require("sisuwellness-qrisk3");

// 1. build the qriskInput object
const age = 75;
const weightKg = 70;
const heightMeter = 1.7;
const bmi = weightKg / (heightMeter * heightMeter);

const { calculateScore, inputBuilder } = qrisk;
const { Sex, Ethnicity, DiabetesStatus, SmokingStatus } = inputBuilder;
const aboutYou = inputBuilder.buildAboutYou(age, Sex.female, Ethnicity.white);
const biometric = inputBuilder.buildBiometrics(4, 120, 10, bmi);
const clinical = inputBuilder.buildClinical(
    SmokingStatus.nonSmoker,
    DiabetesStatus.none,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
);
const townsendScore = 0;
const qriskInput = inputBuilder.buildQriskInput(aboutYou, clinical, biometric, townsendScore);

// 2. calculate the score
const score = calculateScore(qriskInput);

```
 
### API
#### Constants

#####  inputBuilder.Sex
```js
{
    male: "male",
    female: "female"
}
```

##### inputBuilder.Ethnicity
```js
{
    notStated: { title: "White or not stated", value: 0 },
    white: { title: "White or not stated", value: 1 },
    indian: { title: "Indian", value: 2 },
    pakistani: { title: "Pakistani", value: 3 },
    bangladeshi: { title: "Bangladeshi", value: 4 },
    otherAsian: { title: "Other Asian", value: 5 },
    blackCaribbean: { title: "Black Caribbean", value: 6 },
    blackAfrican: { title: "Black African", value: 7 },
    chinese: { title: "Chinese", value: 8 },
    others: { title: "Other ethnic group", value: 9 }
}
```

##### inputBuilder.DiabetesStatus
```js
{
    none: 0,
    type1: 1,
    type2: 2
}
```

##### inputBuilder.SmokingStatus
```js
{
    nonSmoker: 0,
    formerSmoker: 1,
    lightSmoker: 2,
    moderateSmoker: 3,
    heavySmoker: 4
}
```

#### Calculation

##### calculateScore(qriskInput)
* Returns QRISK score.

* The `qriskInput` definitions are based on [Development and validation of QRISK3 risk prediction algorithms to estimate future risk of cardiovascular disease: prospective cohort study](https://www.bmj.com/content/357/bmj.j2099) and the namings are based on the [QRISK®3-2018 Online Calculator](https://qrisk.org/three/): 

```js

    // Biological sex: "male" or "female"
    sex: string,
    
    // Age at study entry (baseline)
    age: number,
    
    // Atrial fibrillation (including atrial fibrillation, atrial flutter, and paroxysmal atrial fibrillation)
    atrialFibrillation: boolean,
     
    // Second generation “atypical” antipsychotic use (including amisulpride, aripiprazole, clozapine, lurasidone, olanzapine, paliperidone, quetiapine, risperidone, sertindole, or zotepine)
    onAtypicalAntipsychoticsMedication: boolean,
    
    // Corticosteroid use (British National Formulary (BNF) chapter 6.3.2 including oral or parenteral prednisolone, betamethasone, cortisone, depo-medrone, dexamethasone, deflazacort, efcortesol, hydrocortisone, methylprednisolone, or triamcinolone)
    onRegularSteroidTablets: boolean,
    
    // Diagnosis of erectile dysfunction or treatment for erectile dysfunction (BNF chapter 7.4.5 including alprostadil, phosphodiesterase type 5 inhibitors, papaverine, or phentolamine)
    diagnosisOrTreatmentOfErectileDisfunction: boolean,
    
    // Diagnosis of migraine (including classic migraine, atypical migraine, abdominal migraine, cluster headaches, basilar migraine, hemiplegic migraine, and migraine with or without aura)
    migraine: boolean,
    
    // Rheumatoid arthritis (diagnosis of rheumatoid arthritis, Felty’s syndrome, Caplan’s syndrome, adult onset Still’s disease, or inflammatory polyarthropathy not otherwise specified)
    rheumatoidArthritis: boolean,
    
    // Chronic kidney disease (stage 4 or 5) and major chronic renal disease (including nephrotic syndrome, chronic glomerulonephritis, chronic pyelonephritis, renal dialysis, and renal transplant)
    // Expanded definition of chronic kidney disease (to include general practitioner recorded diagnosis of chronic kidney disease stage 3 in addition to stages 4 and 5 as well as major chronic renal disease)
    chronicKidneyDiseaseStage345: boolean,
    
    // Diagnosis of severe mental illness (including psychosis, schizophrenia, or bipolar affective disease)
    severeMentalIllness: boolean,
    
    // Systemic lupus erythematosus (including diagnosis of SLE, disseminated lupus erythematosus, or Libman-Sacks disease)
    systemicLupusErythematosus: boolean,
    
    // Treated hypertension (diagnosis of hypertension and treatment with at least one antihypertensive drug)
    bloodPressureTreatment: boolean,
    
    // Diabetes type 1
    diabetesType1: boolean,
    
    // Diabetes type 2 
    diabetesType2: boolean,
    
    // Body mass index
    bmi: number,
    
    // Ethnic origin (nine categories)
    // 0: White or not stated
    // 1: White or not stated
    // 2: Indian
    // 3: Pakistani
    // 4: Bangladeshi
    // 5: Other Asian
    // 6: Black Caribbean
    // 7: Black African
    // 8: Chinese
    // 9: Other ethnic group
    ethnicity: number,
    
    // Family history of coronary heart disease in a first degree relative aged less than 60 years
    familyAnginaOrHeartAttack: boolean,
    
    // Total cholesterol: high density lipoprotein cholesterol ratio
    cholesterolHdlRatio: number,
    
    // Systolic blood pressure, mmHg
    systolicBloodPressure: number,
    
    // Measure of systolic blood pressure variability (standard deviation of repeated measures)
    systolicStandardDeviation: number,
    
    // Smoking status (0: non-smoker, 1: former smoker, 2: light smoker (1-9/day), 3: moderate smoker (10-19/day), or 4: heavy smoker (≥20/day))
    smokerStatus: number,
        
    // Deprivation (as measured by the Townsend score, where higher values indicate higher levels of material deprivation)
    townsendScore: number

```

### License
GNU Lesser General Public License Version 3.0. See LICENSE.


### Additional terms
The original algorithm requires to display the additional terms to be stated as the following:


   * The initial version of this file, to be found at http://svn.clinrisk.co.uk/opensource/qrisk2, faithfully implements QRISK3-2017.
   * ClinRisk Ltd. have released this code under the GNU Lesser General Public License to enable others to implement the algorithm faithfully.
   * However, the nature of the GNU Lesser General Public License is such that we cannot prevent, for example, someone accidentally
   altering the coefficients, getting the inputs wrong, or just poor programming.
   * ClinRisk Ltd. stress, therefore, that it is the responsibility of the end user to check that the source that they receive produces the same
   results as the original code found at https://qrisk.org.
   * Inaccurate implementations of risk scores can lead to wrong patients being given the wrong treatment.


### Similar works
* [QRisk](https://www.npmjs.com/package/qrisk3-2017)
* [CRAN](https://cran.r-project.org/web/packages/QRISK3/)
