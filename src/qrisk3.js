import qrisk from "./lib";
import inputBuilder from "./inputs";

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

export { calculateScore, inputBuilder };
