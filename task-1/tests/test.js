const { expect } = require('chai');
const AdvancedOperations = require('../src/AdvancedOperations');

describe('AdvancedOperations', function() {
    let advOps;

    beforeEach(function() {
        advOps = new AdvancedOperations();
    });

    // Test for findMax method
    it('should return the maximum value in an array', function() {
        const result = advOps.findMax([1, 2, 3, 4, 5]);
        expect(result).to.equal(5);
    });

    // Test for reverseString method
    it('should return the reversed string', function() {
        const result = advOps.reverseString('hello');
        expect(result).to.equal('olleh');
    });

    // Test for formatDate method
    it('should return the formatted date as YYYY-MM-DD', function() {
        const date = new Date(2023, 0, 1); // January 1, 2023
        const result = advOps.formatDate(date);
        expect(result).to.equal('2023-01-01');
    });

    // Test for factorial method
    it('should return the factorial of a number', function() {
        const result = advOps.factorial(5);
        expect(result).to.equal(120);
    });

    // Test for fibonacci method
    it('should return the nth Fibonacci number', function() {
        const result = advOps.fibonacci(6);
        expect(result).to.equal(8); // 0, 1, 1, 2, 3, 5, 8
    });

    // Test for isPalindrome method
    it('should return true if the string is a palindrome', function() {
        const result = advOps.isPalindrome('racecar');
        expect(result).to.be.true;
    });

    it('should return false if the string is not a palindrome', function() {
        const result = advOps.isPalindrome('hello');
        expect(result).to.be.false;
    });

    // Test for mergeAndSort method
    it('should return the merged and sorted array', function() {
        const result = advOps.mergeAndSort([3, 1, 4], [2, 5]);
        expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    });
});