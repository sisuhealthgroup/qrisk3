const buildBiometrics = (cholesterolHdlRatio, systolicBloodPressure, systolicStandardDeviation, bmi) => {
    return {
        cholesterolHdlRatio,
        systolicBloodPressure,
        systolicStandardDeviation,
        bmi
    };
};

export { buildBiometrics };
