import qrisk from "./lib";
import inputBuilder from "./inputs";

const Disclaimer = `  
    The initial version of this file, to be found at http://svn.clinrisk.co.uk/opensource/qrisk2, faithfully implements QRISK3-2017.
    ClinRisk Ltd. have released this code under the GNU Lesser General Public License to enable others to implement the algorithm faithfully.
    However, the nature of the GNU Lesser General Public License is such that we cannot prevent, for example, someone accidentally 
    altering the coefficients, getting the inputs wrong, or just poor programming.
    ClinRisk Ltd. stress, therefore, that it is the responsibility of the end user to check that the source that they receive produces the same 
    results as the original code found at https://qrisk.org.
    Inaccurate implementations of risk scores can lead to wrong patients being given the wrong treatment. 
`;

const calculateScore = qriskInput => {
    const sex = qriskInput.sex;
    let score = -1;
    switch (sex) {
        case "male":
            score = qrisk.maleScore(
                qriskInput.age,
                qriskInput.atrialFibrillation,
                qriskInput.onAtypicalAntipsychoticsMedication,
                qriskInput.onRegularSteroidTablets,
                qriskInput.diagnosisOrTreatmentOfErectileDisfunction,
                qriskInput.migraine,
                qriskInput.rheumatoidArthritis,
                qriskInput.chronicKidneyDiseaseStage345,
                qriskInput.severeMentalIllness,
                qriskInput.systemicLupusErythematosus,
                qriskInput.bloodPressureTreatment,
                qriskInput.diabetesType1,
                qriskInput.diabetesType2,
                qriskInput.bmi,
                qriskInput.ethnicity,
                qriskInput.familyAnginaOrHeartAttack,
                qriskInput.cholesterolHdlRatio,
                qriskInput.systolicBloodPressure,
                qriskInput.systolicStandardDeviation,
                qriskInput.smokerStatus,
                qriskInput.survivorSpan,
                qriskInput.townsendScore
            );
            break;

        case "female":
            score = qrisk.femaleScore(
                qriskInput.age,
                qriskInput.atrialFibrillation,
                qriskInput.onAtypicalAntipsychoticsMedication,
                qriskInput.onRegularSteroidTablets,
                qriskInput.migraine,
                qriskInput.rheumatoidArthritis,
                qriskInput.chronicKidneyDiseaseStage345,
                qriskInput.severeMentalIllness,
                qriskInput.systemicLupusErythematosus,
                qriskInput.bloodPressureTreatment,
                qriskInput.diabetesType1,
                qriskInput.diabetesType2,
                qriskInput.bmi,
                qriskInput.ethnicity,
                qriskInput.familyAnginaOrHeartAttack,
                qriskInput.cholesterolHdlRatio,
                qriskInput.systolicBloodPressure,
                qriskInput.systolicStandardDeviation,
                qriskInput.smokerStatus,
                qriskInput.survivorSpan,
                qriskInput.townsendScore
            );
            break;

        default:
            throw new Error("Invalid sex. It should be either 'male' or 'female'");
    }

    return score;
};

export { calculateScore, inputBuilder, Disclaimer };
