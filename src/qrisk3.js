import qrisk from "./lib";

const calculateScore = gender => {
    switch (true) {
        case gender === "male":
            qrisk.maleScore();
            break;

        case gender === "female":
            qrisk.femaleScore();
            break;

        default:
            throw new Error("Invalid gender. It should be either 'male' or 'female'");
    }

    return 5;
};

export { calculateScore };
