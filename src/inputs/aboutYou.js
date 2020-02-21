const Ethnicity = {
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
};

const Sex = {
    male: "male",
    female: "female"
};
const buildAboutYou = (age, sex, ethnicity) => {
    return {
        age,
        sex,
        ethnicity: ethnicity.value
    };
};

export { Ethnicity, Sex, buildAboutYou };
