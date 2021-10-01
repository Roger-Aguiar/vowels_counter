import { VowelsCounter } from "./vowel.count";

let vowelCounterClass = new VowelsCounter("Roger Silva Santos Aguiar")

describe('Tests for vowel counter functions', () => 
{
    test('It should return 10.', () => 
    {
        expect(vowelCounterClass.getCount()).toBe(10);
    })

    test('It should return true if the vowel is found.', () => 
    {
        expect(vowelCounterClass.checkIfContainsVowel('a', ['a', 'e', 'i', 'o', 'u'])).toBeTruthy();
    })    

    test('It should return false if the vowel is not found.', () => 
    {
        expect(vowelCounterClass.checkIfContainsVowel('b', ['a', 'e', 'i', 'o', 'u'])).toBeFalsy();
    })   
});