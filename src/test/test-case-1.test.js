import chai from "chai"
import add from "../add.js"
const expect = chai.expect


describe("Test case #1", () => {
    describe("add.js", () => {
        it("adds positive number to positive number", () =>{
            expect(add(3,6)).to.equal(9)
        });
    
    })  
})
   
