import {calculateScore} from "./qrisk3";

describe("QRISK-3 tests", () => {
    it("Should not throw", () => {
        expect(() => calculateScore()).not.toThrow();
    })
});