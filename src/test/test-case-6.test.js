import chai from "chai"
import defaultTo from "../defaultTo.js"
const expect = chai.expect



describe("Test case #6", () => {
    describe("defaultTo.js", () => {
        it("should replace 'null' with default value (empty string) as a result", () =>{
            expect(defaultTo(null, "")).to.equal("")
        });

        it("should replace 'undefined' with default value (empty string) as a result", () =>{
            expect(defaultTo(undefined, "")).to.equal("")
        });

        it("should replace 'undefined' with default value 'not available' as a result", () =>{
            expect(defaultTo(null, "not available")).to.equal("not available")
        });

        it("should not replace given value 'milk' with given default value 'water' as a result", () =>{
            expect(defaultTo("milk", "water")).to.equal("milk")
        });

    })
    

})
   