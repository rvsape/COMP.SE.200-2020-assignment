import chai from "chai"
import reduce from "../reduce.js"
const expect = chai.expect

describe("Test case #2", () => {
    describe("reduce.js", () => {
        it("reduces the values in array to equal the sum of the values", () => {
            let result = reduce([1,2], (sum, n) => sum + n, 0)
            expect(result).to.equal(3)
        });

        it("reduces the values of an object into object containing arrays based on object data", () => {
            const testData = {'a': 1, 'b': 2, 'c': 1}
            let result = reduce(testData, (res, value, key) => {
                (res[value] || (res[value] = [])).push(key) 
                return res 
            }, {})
            let passData = { 
                '1' : ['a', 'c'],
                '2' : ['b']
            }
            expect(result).to.eql(passData)
        });

    })
})
   