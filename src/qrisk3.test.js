import { calculateScore, inputBuilder } from "./qrisk3";

describe("QRISK-3 tests", () => {
    it("calculateScore() Should throw when qrisk input is not defined ", () => {
        expect(() => calculateScore()).toThrow();
    });

    it("calculateScore() Should correctly calculate the qrisk score for a typical female ", () => {
        const { Sex, Ethnicity, DiabetesStatus, SmokingStatus } = inputBuilder;
        const aboutYou = inputBuilder.buildAboutYou(75, Sex.female, Ethnicity.white);
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
        const bmi = 70 / (1.7 * 1.7);
        const biometric = inputBuilder.buildBiometrics(4, 120, 10, bmi);
        const townsendScore = 0;
        const qriskInput = inputBuilder.buildQriskInput(aboutYou, clinical, biometric, townsendScore);
        const score = calculateScore(qriskInput);

        expect(score).toBeCloseTo(18.11, 2);
    });

    it("calculateScore() Should correctly calculate the qrisk score for a typical male ", () => {
        const { Sex, Ethnicity, DiabetesStatus, SmokingStatus } = inputBuilder;
        const aboutYou = inputBuilder.buildAboutYou(75, Sex.male, Ethnicity.white);
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
        const bmi = 70 / (1.7 * 1.7);
        const biometric = inputBuilder.buildBiometrics(4, 120, 10, bmi);
        const townsendScore = 0;
        const qriskInput = inputBuilder.buildQriskInput(aboutYou, clinical, biometric, townsendScore);
        const score = calculateScore(qriskInput);

        expect(score).toBeCloseTo(24.59, 2);
    });
});
