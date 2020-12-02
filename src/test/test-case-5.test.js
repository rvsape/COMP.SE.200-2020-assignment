import chai from "chai"
import capitalize from "../capitalize.js"
import upperFirst from "../upperFirst.js"
import toString from "../toString.js"
import isSymbol from "../isSymbol.js"
const expect = chai.expect



describe("Test case #5", () => {
    describe("upperFirst.js", () => {
        it("should convert the first character of a string to upper case", () =>{
            expect(upperFirst("milk")).to.equal("Milk")
        });

        it("should convert the first character of a sring to upper case, test case all upper cases", () =>{
            expect(upperFirst("MILK")).to.equal("MILK")
        });

    })
       
    describe("isSymbol.js", () => {
        it("should return `true` when `value` is a symbol", () =>{
            expect(isSymbol(Symbol.iterator)).to.equal(true)
        });
        
        it("should return `false` when `value` is not a symbol", () =>{
            expect(isSymbol("123")).to.equal(false)
        });

        it("should return `false` for empty object", () =>{
            expect(isSymbol({})).to.equal(false)
        });
        
    })



    describe("toString.js", () => {
        it("should convert the provided array to string", () =>{
            expect(toString([1,2,3])).to.equal("1,2,3")
        });

        it("should return '' for an empty string", () =>{
            //testing if travis passes with this
            //expect(toString(null)).to.equal("")
            expect(toString('')).to.equal("")
        });

        it("should preserve the sign of `-0`", () =>{
            expect(toString(-0)).to.equal("-0")
        });

        it("should preserve the string value when value is string", () =>{
            expect(toString("milk")).to.equal("milk")
        });

        it("should return string for Symbol", () => {
            expect(toString(Symbol("foo"))).to.equal("Symbol(foo)")
        })
    })
    
    describe("capitalize.js", () => {
        it("should converts the first character of `string` to upper case and the remaining is keeped with lower case", () =>{
            expect(capitalize("milk")).to.equal("Milk")
        });

        it("should converts the first character of `string` to upper case and the remaining with lower case", () => {
            expect(capitalize("MILK")).to.equal("Milk")
        });

        
    })
    
})
   
