import { calculateScore, inputBuilder } from "./qrisk3";
const { Sex, Ethnicity, DiabetesStatus, SmokingStatus } = inputBuilder;

describe("QRISK-3 tests", () => {
    it("calculateScore() Should throw when qrisk input is not defined ", () => {
        expect(() => calculateScore()).toThrow();
    });

    it("calculateScore() Should correctly calculate the qrisk score for a typical female ", () => {
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

    const testCase1 = [
        [75, Sex.male, Ethnicity.white, 4, 24.6],
        [65, Sex.male, Ethnicity.white, 4, 12.7],
        [55, Sex.male, Ethnicity.white, 8, 11.7],
        [35, Sex.male, Ethnicity.white, 3.5, 0.6],
        [75, Sex.female, Ethnicity.white, 4, 18.1],
        [65, Sex.female, Ethnicity.white, 4, 8.0],
        [55, Sex.female, Ethnicity.white, 8, 6.1],
        [35, Sex.female, Ethnicity.white, 3.5, 0.4]
    ];
    it.each(testCase1)(
        "calculateScore()-white: [sys:120, sysVar:10, height:170, weight:70, ethnicity:white, townsendSCore:0]\-" +
        "--[age:%p, sex:%p, ethnicity:%p, chdl:%p] ==> qriskScore:%p",
        (age, sex, ethnicity, chdl, expectedScore) => {
            const aboutYou = inputBuilder.buildAboutYou(age, sex, ethnicity);
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
            const biometric = inputBuilder.buildBiometrics(chdl, 120, 10, bmi);
            const townsendScore = 0;
            const qriskInput = inputBuilder.buildQriskInput(aboutYou, clinical, biometric, townsendScore);
            const score = calculateScore(qriskInput);

            expect(parseFloat(score.toFixed(1))).toBeCloseTo(expectedScore, 1);
        }
    );

    const testCase2 = [
        [75, Sex.male, Ethnicity.indian, 4, 31.1],
        [65, Sex.male, Ethnicity.pakistani, 4, 19.5],
        [55, Sex.male, Ethnicity.bangladeshi, 8, 19.1],
        [35, Sex.male, Ethnicity.chinese, 3.5, 0.4],
        [75, Sex.female, Ethnicity.indian, 4, 23.2],
        [65, Sex.female, Ethnicity.pakistani, 4, 13.7],
        [55, Sex.female, Ethnicity.bangladeshi, 8, 8.1],
        [35, Sex.female, Ethnicity.chinese, 3.5, 0.3]
    ];
    it.each(testCase2)(
        "calculateScore()-non-whites: [sys:120, sysVar:10, height:170, weight:70, ethnicity:white, townsendSCore:0]\-" +
        "--[age:%p, sex:%p, ethnicity:%p, chdl:%p] ==> qriskScore:%p",
        (age, sex, ethnicity, chdl, expectedScore) => {
            const aboutYou = inputBuilder.buildAboutYou(age, sex, ethnicity);
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
            const biometric = inputBuilder.buildBiometrics(chdl, 120, 10, bmi);
            const townsendScore = 0;
            const qriskInput = inputBuilder.buildQriskInput(aboutYou, clinical, biometric, townsendScore);
            const score = calculateScore(qriskInput);

            expect(parseFloat(score.toFixed(1))).toBeCloseTo(expectedScore, 1);
        }
    );
});
