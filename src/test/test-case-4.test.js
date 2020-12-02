import chai from "chai"
import isBuffer from "../isBuffer.js"
import isObjectLike from "../isObjectLike.js"
import isArguments from "../isArguments.js"
import isLength from "../isLength.js"
import isArrayLike from "../isArrayLike.js"
import isTypedArray from "../isTypedArray.js"
import isEmpty from "../isEmpty.js"
const expect = chai.expect



describe("Test case #4", () => {
    describe("isBuffer.js", () => {
        it("should return false for empty array", () =>{
            let testData = []
            expect(isBuffer(testData)).to.equal(false)
        });
        it("should return false for a non-buffer data", () =>{
            let testData = new Uint8Array(3)
            expect(isBuffer(testData)).to.equal(false)
        });
        it("should return true for a buffer data", () =>{
            let testData = new Buffer.alloc(3)
            expect(isBuffer(testData)).to.equal(true)
        });
    })
    
    describe("isObjectLike.js", () => {
        it("should return false for non-object like value", () => {
            expect(isObjectLike(null)).to.equal(false)
        })
        it("should return true for object like value", () => {
            expect(isObjectLike({})).to.equal(true)
        })
    })

    describe("isArguments.js", () => {
        it("should return true for an arguments like object", () => {
            expect(isArguments(function() { return arguments }())).to.equal(true)
        })
        it("should return false for not an arguments like object", () => {
            expect(isArguments([1,2,3])).to.equal(false)
        })
    })

    describe("isLength.js", () => {
        it("should return false when the provided value is not valid array like length", () => {
            expect(isLength('3')).to.equal(false)
        })
        it("should return false when the provided value is not valid array like length", () => {
            expect(isLength(Number.MIN_VALUE)).to.equal(false)
        })
        it("should return true when the provided value is valid array like length", () => {
            expect(isLength(3)).to.equal(true)
        })
    })

    describe('isArrayLike.js', () => {
        it("shoudl return false for non-array-like value", () => {
            expect(isArrayLike(() => {})).to.equal(false)
        })
        it("should return true for array-like value", () => {
            expect(isArrayLike([1,2,3])).to.equal(true)
        })
    })

    describe('isTypedArray.js', () => {
        it("should return false for non-typed empty array", () => {
            expect(isTypedArray([])).to.equal(false)
        })
        it("should return false for non-typed array", () => {
            expect(isTypedArray([1,2,3])).to.equal(false)
        })
        it("should return true for typed array", () => {
            expect(isTypedArray(new Uint8Array([1,2,3]))).to.equal(true)
        })
        it("should return false for ArrayBuffer", () => {
            expect(isTypedArray(new ArrayBuffer(16))).to.equal(false)
        })
        it("should return false for object", () => {
            expect(isTypedArray({'test': '123'})).to.equal(false)
        })
        it("should return false for int", () => {
            expect(isTypedArray(123123)).to.equal(false)
        })
        it("should return false for string", () => {
            expect(isTypedArray('123123')).to.equal(false)
        })
        it("should return false for Array", () => {
            expect(isTypedArray(new Array())).to.equal(false)
        })
    })
    describe('isEmpty.js', () => {
        it('should return true for null', () => {
            expect(isEmpty(null)).to.equal(true)
        })
        it('should return true for true', () => {
            expect(isEmpty(true)).to.equal(true)
        })
        it('should return true for 1', () => {
            expect(isEmpty(1)).to.equal(true)
        })
        it("should return false for non-empty value (string)", () => {
            expect(isEmpty('abc')).to.equal(false)
        })
        it("should return false for non-empty value (object)", () => {
            expect(isEmpty({'a': 1})).to.equal(false)
        })
        it("should return true for empty value (Map)", () => {
            expect(isEmpty(new Map())).to.equal(true)
        })

    })
    

})
   