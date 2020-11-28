import chai from "chai"
import ceil from "../ceil.js"
const expect = chai.expect


describe("ceil.js", () => {
    it("rounds up the given value to one decimal accuracy", () => {
        let result = ceil(1.112232323, 1);
        expect(result).to.equal(1.2)
    });

    it("rounds up the given value to two decimal accuracy", () => {
        let result = ceil(3.231234, 2);
        expect(result).to.equal(3.24)
    });


})
   