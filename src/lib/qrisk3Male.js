const calc = (
    age,
    b_AF,
    b_atypicalantipsy,
    b_corticosteroids,
    b_impotence2,
    b_migraine,
    b_ra,
    b_renal,
    b_semi,
    b_sle,
    b_treatedhyp,
    b_type1,
    b_type2,
    bmi,
    ethrisk,
    fh_cvd,
    rati,
    sbp,
    sbps5,
    smoke_cat,
    surv,
    town
) => {
    // size 16
    const survivor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.977268040180206, 0, 0, 0, 0, 0];

    /* The conditional arrays */
    // size 10
    const Iethrisk = [
        0,
        0,
        0.27719248760308279,
        0.47446360714931268,
        0.52961729919689371,
        0.035100159186299017,
        -0.35807899669327919,
        -0.4005648523216514,
        -0.41522792889830173,
        -0.26321348134749967
    ];

    // size 5
    const Ismoke = [0, 0.19128222863388983, 0.55241588192645552, 0.63835053027506072, 0.78983819881858019];

    /* Applying the fractional polynomial transforms */
    /* (which includes scaling)                      */

    let dage = age;
    dage = dage / 10;
    let age_1 = Math.pow(dage, -1);
    let age_2 = Math.pow(dage, 3);
    let dbmi = bmi;
    dbmi = dbmi / 10;
    let bmi_2 = Math.pow(dbmi, -2) * Math.log(dbmi);
    let bmi_1 = Math.pow(dbmi, -2);

    /* Centring the continuous variables */

    age_1 = age_1 - 0.234766781330109;
    age_2 = age_2 - 77.284080505371094;
    bmi_1 = bmi_1 - 0.149176135659218;
    bmi_2 = bmi_2 - 0.141913309693336;
    rati = rati - 4.300998687744141;
    sbp = sbp - 128.57157897949219;
    sbps5 = sbps5 - 8.756621360778809;
    town = town - 0.52630490064621;

    /* Start of Sum */
    let a = 0;

    /* The conditional sums */

    a += Iethrisk[ethrisk];
    a += Ismoke[smoke_cat];

    /* Sum from continuous values */

    a += age_1 * -17.839781666005575;
    a += age_2 * 0.0022964880605765492;
    a += bmi_1 * 2.4562776660536358;
    a += bmi_2 * -8.3011122314711354;
    a += rati * 0.17340196856327111;
    a += sbp * 0.012910126542553305;
    a += sbps5 * 0.010251914291290456;
    a += town * 0.033268201277287295;

    /* Sum from boolean values */

    a += b_AF * 0.88209236928054657;
    a += b_atypicalantipsy * 0.13046879855173513;
    a += b_corticosteroids * 0.45485399750445543;
    a += b_impotence2 * 0.22251859086705383;
    a += b_migraine * 0.25584178074159913;
    a += b_ra * 0.20970658013956567;
    a += b_renal * 0.71853261288274384;
    a += b_semi * 0.12133039882047164;
    a += b_sle * 0.4401572174457522;
    a += b_treatedhyp * 0.51659871082695474;
    a += b_type1 * 1.2343425521675175;
    a += b_type2 * 0.85942071430932221;
    a += fh_cvd * 0.54055469009390156;

    /* Sum from interaction terms */

    a += age_1 * (smoke_cat === 1 ? 1 : 0) * -0.21011133933516346;
    a += age_1 * (smoke_cat === 2 ? 1 : 0) * 0.75268676447503191;
    a += age_1 * (smoke_cat === 3 ? 1 : 0) * 0.99315887556405791;
    a += age_1 * (smoke_cat === 4 ? 1 : 0) * 2.1331163414389076;
    a += age_1 * b_AF * 3.4896675530623207;
    a += age_1 * b_corticosteroids * 1.1708133653489108;
    a += age_1 * b_impotence2 * -1.506400985745431;
    a += age_1 * b_migraine * 2.3491159871402441;
    a += age_1 * b_renal * -0.50656716327223694;
    a += age_1 * b_treatedhyp * 6.5114581098532671;
    a += age_1 * b_type1 * 5.3379864878006531;
    a += age_1 * b_type2 * 3.6461817406221311;
    a += age_1 * bmi_1 * 31.004952956033886;
    a += age_1 * bmi_2 * -111.29157184391643;
    a += age_1 * fh_cvd * 2.7808628508531887;
    a += age_1 * sbp * 0.018858524469865853;
    a += age_1 * town * -0.1007554870063731;
    a += age_2 * (smoke_cat === 1 ? 1 : 0) * -0.00049854870275326121;
    a += age_2 * (smoke_cat === 2 ? 1 : 0) * -0.00079875633317385414;
    a += age_2 * (smoke_cat === 3 ? 1 : 0) * -0.00083706184266251296;
    a += age_2 * (smoke_cat === 4 ? 1 : 0) * -0.00078400319155637289;
    a += age_2 * b_AF * -0.00034995608340636049;
    a += age_2 * b_corticosteroids * -0.0002496045095297166;
    a += age_2 * b_impotence2 * -0.0011058218441227373;
    a += age_2 * b_migraine * 0.00019896446041478631;
    a += age_2 * b_renal * -0.0018325930166498813;
    a += age_2 * b_treatedhyp * 0.00063838053104165013;
    a += age_2 * b_type1 * 0.0006409780808752897;
    a += age_2 * b_type2 * -0.00024695695588868315;
    a += age_2 * bmi_1 * 0.0050380102356322029;
    a += age_2 * bmi_2 * -0.013074483002524319;
    a += age_2 * fh_cvd * -0.00024791809907396037;
    a += age_2 * sbp * -0.00001271874191588457;
    a += age_2 * town * -0.000093299642323272888;

    /* Calculate the score itself */
    return 100.0 * (1 - Math.pow(survivor[surv], Math.exp(a)));
};

export { calc };
