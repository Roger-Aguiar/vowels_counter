export class VowelsCounter 
{
    sentence: string;

    constructor(sentence: string)
    {
        this.sentence = sentence;
    }

    getCount() 
    {
        const strVowels = this.sentence.toLowerCase().split('');
        const vowels = ['a', 'e', 'i', 'o', 'u'];    
        var vowelsCount = 0;    
        
        strVowels.forEach(element => 
        {
            vowelsCount += this.checkIfContainsVowel(element, vowels)        
        });  
        return vowelsCount;
    }

    checkIfContainsVowel(vowel: string, vowels: string[])
    {
        var vowelCounter = 0;
        vowels.forEach(element => 
        {
            if(vowel == element)
            {
                vowelCounter++;
                return;            
            }
        });

        return vowelCounter;
    }
}


