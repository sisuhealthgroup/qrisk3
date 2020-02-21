// smoking status
// 0: non-smoker,
// 1: former smoker,
// 2: light smoker (1-9/day),
// 3: moderate smoker (10-19/day),
// or 4: heavy smoker (≥20/day))

const SmokingStatus = {
    nonSmoker: 0,
    formerSmoker: 1,
    lightSmoker: 2,
    moderateSmoker: 3,
    heavySmoker: 4
};

const DiabetesStatus = {
    none: 0,
    type1: 1,
    type2: 2
};

// Order here matches the order at qrisk.org online calculator
const buildClinical = (
    smokingStatus,
    diabetesStatus,
    familyAnginaOrHeartAttack,
    chronicKidneyDiseaseStage345,
    atrialFibrillation,
    bloodPressureTreatment,
    migraine,
    rheumatoidArthritis,
    systemicLupusErythematosus,
    severeMentalIllness,
    onAtypicalAntipsychoticsMedication,
    onRegularSteroidTablets,
    diagnosisOrTreatmentOfErectileDisfunction = false
) => ({
    smokingStatus,
    diabetesStatus,
    familyAnginaOrHeartAttack,
    chronicKidneyDiseaseStage345,
    atrialFibrillation,
    bloodPressureTreatment,
    migraine,
    rheumatoidArthritis,
    systemicLupusErythematosus,
    severeMentalIllness,
    onAtypicalAntipsychoticsMedication,
    onRegularSteroidTablets,
    diagnosisOrTreatmentOfErectileDisfunction
});

export { SmokingStatus, DiabetesStatus, buildClinical };
