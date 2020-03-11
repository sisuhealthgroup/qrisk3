import { Ethnicity, Sex, buildAboutYou } from "./aboutYou";
import { buildBiometrics } from "./biometric";
import { SmokingStatus, DiabetesStatus, buildClinical } from "./clinical";

const buildQriskInput = (aboutYou, clinical, biometric, townsendScore = 0) => {
    // Order here matches the original method
    const qriskInput = {
        sex: aboutYou.sex,
        age: aboutYou.age,
        atrialFibrillation: boolToInt(clinical.atrialFibrillation),
        onAtypicalAntipsychoticsMedication: boolToInt(clinical.onAtypicalAntipsychoticsMedication),
        onRegularSteroidTablets: boolToInt(clinical.onRegularSteroidTablets),
        diagnosisOrTreatmentOfErectileDisfunction: boolToInt(clinical.diagnosisOrTreatmentOfErectileDisfunction),
        migraine: boolToInt(clinical.migraine),
        rheumatoidArthritis: boolToInt(clinical.rheumatoidArthritis),
        chronicKidneyDiseaseStage345: boolToInt(clinical.chronicKidneyDiseaseStage345),
        severeMentalIllness: boolToInt(clinical.severeMentalIllness),
        systemicLupusErythematosus: boolToInt(clinical.systemicLupusErythematosus),
        bloodPressureTreatment: boolToInt(clinical.bloodPressureTreatment),
        diabetesType1: clinical.diabetesStatus === DiabetesStatus.type1,
        diabetesType2: clinical.diabetesStatus === DiabetesStatus.type2,
        bmi: biometric.bmi,
        ethnicity: aboutYou.ethnicity,
        familyAnginaOrHeartAttack: boolToInt(clinical.familyAnginaOrHeartAttack),
        cholesterolHdlRatio: biometric.cholesterolHdlRatio,
        systolicBloodPressure: biometric.systolicBloodPressure,
        systolicStandardDeviation: biometric.systolicStandardDeviation,
        smokerStatus: clinical.smokingStatus,
        survivorSpan: 10, // Only works with 10!
        townsendScore
    };

    return qriskInput;
};

const boolToInt = boolValue => Number(boolValue);

export default {
    Ethnicity,
    Sex,
    buildAboutYou,
    buildBiometrics,
    SmokingStatus,
    DiabetesStatus,
    buildClinical,
    buildQriskInput
};
