import qrisk3Female from "lib/qrisk3Female"

const calculateScore = (gender) => {
    switch(true) {
        case gender === "male":
            break;

        case gender === "female":
            qrisk3Female.calc();
            break;

        default:
            throw new Error("Invalid gender. It should be either 'male' or 'female'")

    }
    return 5;
};

export { calculateScore };
