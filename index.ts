import { VowelsCounter } from "./vowel.count";
import readline from "readline";

let userInput = readline.createInterface({input: process.stdin, output: process.stdout});

userInput.question("Please, enter either a word or a sentence: ", 
function(answer)
{
    let vowelCounter = new VowelsCounter(answer);
    let vowels = vowelCounter.getCount();
    console.log(`Number of vowels: ${vowels}`);
});