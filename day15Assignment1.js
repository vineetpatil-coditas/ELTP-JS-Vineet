let number = 0;
for(let index=0;index<=10;index++){
    console.log(index)
}
while (number <= 10) {
    console.log(number);
    number++;
}
// Iterate 10 to 0 using for loop, do the same using while and do while loop

do {
    console.log(number);
    number++;
} while (number <= 10);

// // Iterate 0 to n using for loop
// 4. Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
for (let iterator = 1; iterator <= 7; iterator++) {
console.log("#".repeat(iterator));
}

// 5. Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
for(let number=0;number<=10;number++){
    console.log(`${number}  ${number**2}  ${number**3}`)
 }
// 5. Use for loop to iterate from 0 to 100 and print only even numbers
for(let number=0;number<=100;number+=2){
    console.log(number)
}
// 6. Use for loop to iterate from 0 to 100 and print only odd numbers
for(let number=1;number<100;number+=2){
    console.log(number)
}
// 7. Use for loop to iterate from 0 to 100 and print only prime numbers

// 8. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum=0;
for(let number=0;number<=100;number++){
    
    sum=sum+number;
}
console.log(sum)

// 9. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumOfEven = 0;
let sumOfOdd = 0;
for (let number = 0; number <= 100; number++) {
    number % 2 ? sumOfOdd += number : sumOfEven += number;
}
console.log(sumOfEven);

// 10. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. //O/P:   [2550, 2500]
// 11. Develop a small script which generate array of 5 random numbers
const arrayOfRandomNumbers = [];
for (let number = 0; number < 5; number++) {
    arrayOfRandomNumbers.push(Math.floor(Math.random() * 100));
}
console.log(arrayOfRandomNumbers);

// 12. Develop a small script which generate array of 5 random numbers and the numbers must be unique
function generateUniqueRandomNumbers(count) {
    const numbers = [];
    while (numbers.length < count) {
        const randomNumber = Math.floor(Math.random() * 10); 
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

console.log(generateUniqueRandomNumbers(5));


// 13. Develop a small script which generate a six characters random id: //iuyt56


// 14. Develop a small script which generate any number of characters random id.
// 15. Write a script which generates a random hexadecimal number.
// 16. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
const countriesInUpperCase = [];
for (let index = 0; index < countries.length; index++) {
    countriesInUpperCase.push(countries[index].toUpperCase());
}
console.log(countriesInUpperCase);

// 17. Using the above countries array, create an array for countries length
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
const countriesLengths = [];
for (let index= 0; index < countries.length; index++) {
    countriesLengths.push(countries[index].length);
}
console.log(countriesLengths);

// 18. Use the countries array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
const countriesInformation = [];
for (let index = 0; index < countries.length; index++) {
    const country = countries[index];
    const abbreviation = country.slice(0, 3).toUpperCase();
    const length = country.length;
    countriesInformation.push([country, abbreviation, length]);
}
console.log(countriesInformation);

// 19. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land',
//  print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// ['Finland','Ireland', 'Iceland']
const countriesContainingLand = [];
for (let index = 0; index < countries.length; index++) {
    const country = countries[index];
    if (country.toLowerCase().includes('land')) {
        countriesContainingLand.push(country);
    }
}
if (countriesContainingLand.length > 0) {
    console.log(countriesContainingLand);
} else {
    console.log('All these countries are without land');
}

// 20. Using the above countries array, find the country containing the biggest number of characters.
let countryWithMostCharacters ="";
for (let index= 0; index < countries.length; index++) {
    if (countries[index].length > countryWithMostCharacters.length) {
        countryWithMostCharacters = countries[index];
    }
}
console.log(countryWithMostCharacters);

// 21. Using the above countries array, find the country containing only 5 characters.
const countriesWith5Characters = [];
for (let country = 0; country < countries.length; country++) {
    if (countries[country].length === 5) {
        countriesWith5Characters.push(countries[country]);
    }
}
console.log(countriesWith5Characters);

// 22. Find the longest word in the webTechs array.
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
let longestWord = '';
for (let tech = 0; tech < webTechs.length; tech++) {
    if (webTechs[tech].length > longestWord.length) {
        longestWord = webTechs[tech];
    }
}
console.log(longestWord);

// 23. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
const techsInfo = [];
for (let index = 0; index < webTechs.length; index++) {
    const tech = webTechs[index];
    const length = tech.length;
    techsInfo.push([tech, length]);
}
console.log(techsInfo);

// 24. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ["MongoDB", "Express", "React", "Node"];
let acronym = '';
for (let index= 0; index < mernStack.length; index++) {
    acronym += mernStack[index][0];
}
console.log(acronym);

// 25. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (let tech = 0; tech < techs.length; tech++) {
    console.log(techs[tech]);
}

// 26. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];

for (let index = fruits.length - 1; index>= 0; index--) {
    reversedFruits.push(fruits[index]);
}

console.log(reversedFruits);

// 27. Print all the elements of array as shown below.
//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]

// OUTPUT: 

//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
