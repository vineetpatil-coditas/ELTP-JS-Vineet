// Declare an empty array;
const emptyArray=[];

// Declare an array with more than 5 number of elements
const arrayMoreThan5Elements=[1,2,3,4,5,6]

// Find the length of your array
console.log(arrayMoreThan5Elements.length)

// Get the first item, the middle item and the last item of the array
console.log(arrayMoreThan5Elements.shift())
console.log(arrayMoreThan5Elements[Math.floor(arrayMoreThan5Elements.length/2)])
console.log(arrayMoreThan5Elements.pop());

// Declare an array called mixedDataTypes, put different data types in the array
//  and find the length of the array. The array size should be greater than 5
const mixedDataTypes=[1,"Vineet",true,null,undefined,[0,1]]
console.log(mixedDataTypes.length)


// Declare an array variable name itCompanies and assign initial values Coditas, Google,
// Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies=[ 'Coditas', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon']

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(itCompanies.shift())
console.log(itCompanies.pop())
// Print out each company

for(company in itCompanies){
    console.log(itCompanies[company])
}
// Change each company name to uppercase one by one and print them out
for(company in itCompanies){
    console.log((itCompanies[company]).toUpperCase())
}
// Print the array like as a sentence: Coditas, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join()+ ' and ' + itCompanies[6]+ ' are big It companies')

// Check if a certain company exists in the itCompanies array. If it exist return the company
const companyToCheck="Google";
const compnayExists= itCompanies.includes(companyToCheck);
console.log(compnayExists?companyToCheck:"company not found");

// Filter out companies which have more than one 'o' without the filter method


// Initialize an array to store filtered companies
const filteredCompanies = [];


for (let i = 0; i < itCompanies.length; i++) {
    let count = 0;

    for (let j = 0; j < itCompanies[i].length; j++) {
        if (itCompanies[i][j].toLowerCase() === 'o') {
            count++;
        }
    }
    // If the count is more than one, add the company to the filtered array
    if (count > 1) {
        filteredCompanies.push(itCompanies[i]);
    }
}

console.log(filteredCompanies);


// Sort the array using sort() method
console.log(itCompanies.sort());

// Sort the array by country name length without sort;
for(let currentIndex=0;currentIndex<itCompanies.length;currentIndex++){
    for(let nextIndex=0;nextIndex<itCompanies.length-currentIndex-1;nextIndex++){
        if(itCompanies[nextIndex].length>itCompanies[nextIndex+1].length){
            [itCompanies[nextIndex],itCompanies[nextIndex+1]]=[itCompanies[nextIndex+1],itCompanies[nextIndex]];
        }
    }
}
console.log(itCompanies)

// Reverse the array using reverse() method
console.log(itCompanies.reverse())

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3))

// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(Math.floor(itCompanies.length)/2,Math.floor(itCompanies.length)+1))

// Remove the first IT company from the array
console.log(itCompanies.shift())

// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(Math.floor(itCompanies.length)/2))

// Remove the last IT company from the array
console.log(itCompanies.pop())

// Remove all IT companies
itCompanies.splice(0)
console.log(itCompanies)
// First remove all the punctuations and change the string to array and count the number of words in the array,
//  dont use regex
// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango'
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango';
function removePunctuations(text) {
    const punctuations = ['.', ',', '!', '?', ';', ':'];
    for (let punctuation of punctuations) {
        text = text.split(punctuation).join('');
    }
    return text;
}

// Remove punctuations from the text
const textWithoutPunctuations = removePunctuations(text);
const wordsArray = textWithoutPunctuations.split(' ');
const wordCount = wordsArray.length;
console.log(wordCount); 

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add 'Rasmalai' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes('Rasmalai')) {
    shoppingCart.unshift('Rasmalai');
}

// add Gulabjamun at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes('Gulabjamun')) {
    shoppingCart.push('Gulabjamun');
}

// remove 'Honey' if you are allergic to honey
const allergicToHoney = true; 
if (allergicToHoney) {
    const index = shoppingCart.indexOf('Honey');
    if (index !== -1) {
        shoppingCart.splice(index, 1);
    }
}

// modify Tea to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
// If it does not exist add Sass to the array and print the array.
const sassIndex = webTechs.indexOf('Sass');
if (sassIndex !== -1) {
    console.log('Sass is a CSS preprocess');
} else {
   
    webTechs.push('Sass');
    console.log(webTechs);
}

// Concatenate the following two variables and store it in a fullStack variable.
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// console.log(fullStack)
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
// The following is an array of 10 students ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average),
//  use abs() method 1.Slice the first ten countries from the countries array
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Find the min and max age
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);

// Find the median age
const middleIndex = Math.floor(ages.length / 2);
let medianAge;
if (ages.length % 2) {
    medianAge = ages[middleIndex];
    
} else {
    medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
    
}

// Find the average age
const sumOfAges = 0;
for (let age of ages) {
    sumOfAges += age;
}
const averageAge = sumOfAges / ages.length;

// Find the range of ages
const range = maxAge - minAge;

// Compare the value of (min - average) and (max - average)
const diffMin = Math.abs(minAge - averageAge);
const diffMax = Math.abs(maxAge - averageAge);

// Slice the first ten countries from the countries array
const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan'];
const firstTenCountries = countries.slice(0, 10);

console.log("Sorted Ages:", ages);
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);
console.log("Median Age:", medianAge);
console.log("Average Age:", averageAge);
console.log("Range of Ages:", range);
console.log("Difference between Min and Average:", diffMin);
console.log("Difference between Max and Average:", diffMax);
console.log("First Ten Countries:", firstTenCountries);
const halfvalue=Math.ceil(countries.length/2);
const firstHalf=countries.slice(0,halfvalue);
console.log(firstHalf);
const secondHalf=countries.slice(halfvalue)
console.log(secondHalf)











