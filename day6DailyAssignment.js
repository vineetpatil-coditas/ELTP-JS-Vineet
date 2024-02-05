// Check if type of '70' is equal to 70
console.log('70'===70);//false
// Check if parseInt('8.8') is equal to 9

console.log(parseInt('8.8')===9);//false
// Boolean value is either true or false.
// Write five JavaScript statement which provide falsy value.
const numberOfOwnedHouse = 0;
if (!numberOfOwnedHouse) {
    console.log("The value in numberOfOwnedHouse is falsy.");
} else {
    console.log("The Value in numberOfOwnedHouse is truthy.");
}

const nameOfWife = "";
if (!nameOfWife) {
    console.log("The value in nameOfWife is falsy.");
} else {
    console.log("The value in nameOfWife is truthy.");
}

const numberOfKids = null;
if (!numberOfKids) {
    console.log("The Value in numberOfKids is falsy.");
} else {
    console.log("The Value in numberOfKids is truthy.");
}

const nameOfCar = undefined;
if (!nameOfCar) {
    console.log("The value  in nameOfCar is falsy.");
} else {
    console.log("The value in nameOfCar is truthy.");
}

const myName = NaN;
if (!myName) {
    console.log("The value in myName is falsy.");
} else {
    console.log("The  value in  myName is truthy.");
}

const vineetIsMarried = false;
if (!vineetIsMarried) {
    console.log("The value in vineetIsMarried is falsy.");
} else {
    console.log("The value in vineetIsMarried is truthy.");
}
// Write five JavaScript statement which provide truthy  value.
const rollNumber = 33;
if (rollNumber) {
    console.log("The value in rollNumber is truthy.");
} else {
    console.log("The rollNumber is falsy.");
}

const greet = "Hello";
if (greet) {
    console.log("The value in greet is truthy.");
} else {
    console.log("The value in greet is falsy.");
}

const myQualities = ['Hardworking','Punctual'];
if (myQualities) {
    console.log("The values in myQualities are truthy.");
} else {
    console.log("The values in myQualities are falsy.");
}



// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 >= 3)      // 4 >= 3 //true
console.log(4 < 3)      // 4 < 3 //false
console.log(4 <= 3)      // 4 <= 3 //false
console.log(5 == 5)      // 5 == 5 //true
console.log(5 > 4)      // 5 > 4 // true
console.log(9 === 9)      // 9 === 9 //true
console.log(9 == '9')      // 9 == '9' //true
console.log(8 === '8')      // 8 === '8' //false
console.log(4 != 4)      // 4 != 4  //false
console.log(4 !== 4 )      // 4 !== 4 //false
console.log(4 != '4')      // 4 != '4' //false
console.log(4 != '4')      // 4 != '4' //false
console.log(4 !== '4')      // 4 !== '4' //true
// Find the length of python and jargon and make a falsy comparison statement.
const firstTechnicalLanguage='python';
const secondTechnicalLanguage='jargon'
console.log(firstTechnicalLanguage.length!==secondTechnicalLanguage.length);
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12) //true
console.log(4 > 3 && 10 > 12)// false
console.log(4 > 3 || 10 < 12)//true
console.log(4 > 3 || 10 > 12)//true
console.log(!(4 > 3))//false
console.log(!(4 < 3))//true
console.log(!(false))//true
console.log(!(4 > 3 && 10 < 12))//false
console.log(!(4 > 3 && 10 > 12))//true
console.log(!(4 === '4'))//true
// There is no 'on' in both dragon and python
const animal='dragon';
console.log(!(firstTechnicalLanguage.includes('on') && animal.includes('on')))