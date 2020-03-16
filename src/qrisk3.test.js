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
        "calculateScore()-white: [sys:120, sysVar:10, height:170, weight:70, townsendSCore:0]-" +
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
        "calculateScore()-non-whites: [sys:120, sysVar:10, height:170, weight:70, townsendSCore:0]-" +
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

    const delta = -0.9;
    const testCase3 = [
        [45, Sex.female, Ethnicity.white, "CR26XH", 1.297155 + delta, 1.3],
        [45, Sex.female, Ethnicity.white, "E28AA", 6.8937 + delta, 1.9],
        [45, Sex.female, Ethnicity.pakistani, "SW1A1AA", 2.2624 + delta, 2.3],
        [45, Sex.male, Ethnicity.indian, "E28AA", 6.8937 + delta, 3.5],
        [75, Sex.male, Ethnicity.indian, "E28AA", 6.8937 + delta, 30.2]
    ];
    it.each(testCase3)(
        "calculateScore()-townsend: [sys:120, sysVar:10, height:170, weight:70, chdl: 4]-" +
            "--[age:%p, sex:%p, ethnicity:%p, postcode:%p, townsendScore:%p:] ==> qriskScore:%p",
        (age, sex, ethnicity, postcode, townsendScore, expectedScore) => {
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
            const biometric = inputBuilder.buildBiometrics(4, 120, 0, bmi);
            const qriskInput = inputBuilder.buildQriskInput(aboutYou, clinical, biometric, townsendScore);
            const score = calculateScore(qriskInput);

            expect(parseFloat(score.toFixed(2))).toBeCloseTo(expectedScore, 0);
        }
    );

    const delta2 = 0;
    const q1Clinical = [false, false, false, true, false, false, false, false];
    const q1 = [
        "M1 6FQ",
        3.9159305 + delta2,
        Sex.male,
        70,
        179,
        74,
        114,
        Ethnicity.indian,
        DiabetesStatus.type1,
        SmokingStatus.nonSmoker,
        4.5,
        ...q1Clinical,
        64.8
    ];

    const q2Clinical = [false, true, false, true, false, false, false, false];
    const q2 = [
        "M12 6BF",
        9.2671455 + delta2,
        Sex.male,
        50,
        165,
        74,
        133,
        Ethnicity.white,
        DiabetesStatus.none,
        SmokingStatus.lightSmoker,
        6.7,
        ...q2Clinical,
        38.9
    ];

    const q4Clinical = [true, false, false, false, false, false, true, true];
    const q4 = [
        "M11 3NA",
        5.2524922 + delta2,
        Sex.female,
        30,
        172,
        63,
        108,
        Ethnicity.white,
        DiabetesStatus.type1,
        SmokingStatus.nonSmoker,
        9.9,
        ...q4Clinical,
        81.9
    ];
    const testCase4 = [q1, q2, q4];
    it.each(testCase4)(
        "Case: %p, %p, %p, %p, %p, %p, %p, %p, %p, %p, %p, %p",
        (
            postcode,
            townsendScore,
            sex,
            age,
            height,
            weight,
            systolic,
            ethnicity,
            diabetes,
            smokingStatus,
            chdl,
            bpMed,
            angina,
            kidney,
            afib,
            migraine,
            arthritis,
            lupus,
            steroid,
            expectedScore
        ) => {
            const aboutYou = inputBuilder.buildAboutYou(age, sex, ethnicity);
            const clinical = inputBuilder.buildClinical(
                smokingStatus,
                diabetes,
                angina,
                kidney,
                afib,
                bpMed,
                migraine,
                arthritis,
                lupus,
                false,
                false,
                steroid
            );

            const bmi = weight / (height * height * 0.01 * 0.01);
            const biometric = inputBuilder.buildBiometrics(chdl, systolic, 0, bmi);
            const qriskInput = inputBuilder.buildQriskInput(aboutYou, clinical, biometric, townsendScore);
            const score = calculateScore(qriskInput);
            expect(parseFloat(score.toFixed(2))).toBeCloseTo(expectedScore, 0);
        }
    );
});
