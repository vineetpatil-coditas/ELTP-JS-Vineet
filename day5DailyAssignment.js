// Declare a variable and assign a value 'Easy JavaScript Assignments'.
const jsAssignmentString="Easy JavaScript Assignments";
// Print the length of the string.

console.log(jsAssignmentString.length);
// Change all the string characters to capital letters using toUpperCase() method

console.log(jsAssignmentString.toUpperCase());
// Change all the string characters to lowercase letters using toLowerCase() method

console.log(jsAssignmentString.toLowerCase());
// Slice out the first word of the string using substr() and substring() method

console.log(jsAssignmentString.substr(0,4));
console.log(jsAssignmentString.substring(0,jsAssignmentString.indexOf(' ')));

// Slice out the phrase JavaScript Assignments from 'Easy JavaScript Assignments'.
console.log(jsAssignmentString.slice(5))

// Check if the string contains a word Script using includes() method.
console.log(jsAssignmentString.includes("Script"))

// Split the string into an array using split() method
console.log(jsAssignmentString.split(' '));

// 'ELTP, BATCH, THREE' split the string at the comma and change it to an array.
console.log('ELTP, BATCH, THREE'.split(','))

// Change 'Easy JavaScript Assignments' to 'Easy Python Assignments' using replace() method.
console.log(jsAssignmentString.replace('JavaScript','Python'))


// What is character at index 20 in 'Easy JavaScript Assignments' string? Use charAt() method.
console.log(jsAssignmentString.charAt(20));
// What is the character code of J in 'Easy JavaScript Assignments' string using charCodeAt()
console.log(jsAssignmentString.charCodeAt(jsAssignmentString.indexOf('J')));
// Use indexOf to determine the position of the first occurrence of 'a' in 'Easy JavaScript Assignments'
console.log(jsAssignmentString.indexOf('a'))
// Use lastIndexOf to determine the position of the last occurrence of 'a' in 'Easy JavaScript Assignments'.
console.log(jsAssignmentString.lastIndexOf('a'))
// Use indexOf to find the position of the first occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log('Easy JavaScript Assignments, Easy Easy'.indexOf('Easy'))
// Use lastIndexOf to find the position of the last occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log('Easy JavaScript Assignments, Easy Easy'.lastIndexOf('Easy'))
// Use search to find the position of the first occurrence of the word 'Easy' in the following sentence: 'Easy JavaScript Assignments, Easy Easy'
console.log('Easy JavaScript Assignments, Easy Easy'.search("Easy"))
// Use trim() to remove any trailing whitespace at the beginning and the end of a string. '       Easy JavaScript Assignments, Easy Easy  
console.log('       Easy JavaScript Assignments, Easy Easy '.trim())
// Use startsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log('Easy JavaScript Assignments'.startsWith("E"))
// Use endsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log('Easy JavaScript Assignments'.endsWith('s'))
// Use match() method to find all the a’s in 'Easy JavaScript Assignments'
console.log(jsAssignmentString.match(/a/g))
// Use concat() and merge 'Easy' and 'JavaScript' to a single string.
console.log('Easy'.concat(' ','JavaScript'));
// Use repeat() method to print 'Easy JavaScript' 3 times.
console.log('Easy JavaScript '.repeat(3));
// 'Javascript is Easy, too Easy, too Easy, Easy to learn' Count the number of word 'Easy' in this sentence.
console.log('Easy Javascript is Easy, too Easy, too Easy, Easy  to learn'.split('Easy').length-1)

// Use match() to count the number of all 'Easy' in the following sentence:'Javascript is Easy, too Easy, too Easy, Easy to learn'
console.log(('Javascript is Easy, too Easy, too Easy, Easy to learn'.match(/Easy/g)).length)
// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//     const sentence = '%I $am@% a %softwa@r%e %e@ngineer, &and& %java@sc@ript% is Ea%s#y;
const sentence = '%I $am@% a %softwa@r%e %e@ngineer, &and& %java@sc@ript% is Ea%s#y';
const cleanedSentence=sentence.replace(/[^a-zA-Z0-9\s]/g,'')
const words=cleanedSentence.split(' ');
// console.log(typeof(words));
const wordCount={};
words.forEach((word)=>{
     if(wordCount[word])
     {
        wordCount[word]++;
     }
     else
     {
        wordCount[word]=1;
     }
});
let maxFrequency =-1,mostFrequentWord = ''
for(let word in wordCount)
{
   if(wordCount[word]>maxFrequency)
   {
    maxFrequency=wordCount[word];
    mostFrequentWord=word;
   }
}
console.log(mostFrequentWord);//I
// Calculate the total annual income of the person by extracting the numbers from the following text. 
// 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading'

const text='I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading';

const numbers = text.match(/\b[0-9]+\b/g);

const total_income = parseInt(numbers[0])*12+parseInt(numbers[1])+parseInt(numbers[2])+parseInt(numbers[3]);
console.log(total_income)

//Output
// 27
// EASY JAVASCRIPT ASSIGNMENTS
// easy javascript assignments
// Easy
// Easy
// JavaScript Assignments
// true
// [ 'Easy', 'JavaScript', 'Assignments' ]
// [ 'ELTP', ' BATCH', ' THREE' ]
// Easy Python Assignments
// g
// 74
// 1
// 8
// 0
// 34
// 0
// Easy JavaScript Assignments, Easy Easy
// true
// true
// [ 'a', 'a', 'a' ]
// Easy JavaScript
// Easy JavaScript Easy JavaScript Easy JavaScript
// 5
// 4
// I
// 135000