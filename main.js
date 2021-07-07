//Variable that contains the text you want to translate into whale talk.
//array of vowels to be extracted from the input variable
let input = ' This variable will contain the text you want to translate into “whale talk”.';
const vowels =['a', 'e', 'i', 'u', 'o'];
//store the vowels from the input string
let resultArray = [];
//  loop that iterates through each letter in input
for(let i = 0; i < input.length; i++) {
     // iterate through the vowels array
     for(let j = 0; j < vowels.length; j++) {
          // if the input and vowel match, push to resultsArray
    if (input[i] === vowels[j]) {
        resultArray.push(input[i]);
      }
    }
  
    //  add another instance of e so you wil get 'e', 'e'
    if (input[i] === 'e') {
      resultArray.push(input[i]);
    }
    
    //add another instance of e so you wil get 'e', 'e'
    if (input[i] === 'u') {
      resultArray.push(input[i]);
    }
  }
  
  console.log(resultArray.join('').toUpperCase());