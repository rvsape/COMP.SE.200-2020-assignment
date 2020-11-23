// Temp file to test mocha and chai packages
import { assert } from 'chai';

describe("Top level test block", () => {

	before(()=> {
	})

	after(()=> {	
	})

	beforeEach(()=> {
	})

	afterEach(()=> {
	})

    //Example from mocjajs.org
    describe('Array', function() {
        describe('#indexOf()', function() {
            it('should return -1 when the value is not present', function() {
                assert.strictEqual([1, 2, 3].indexOf(4), -1);
            });
        });
    });
    
    it("should return true", ()=>   {

	})

})