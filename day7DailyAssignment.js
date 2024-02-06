// If user is 18 or older , give feedback: 'You are allowed to Marry'
//  but if not 18 console feedback stating to wait for the number of years he needs to turn 18.
const userAge=18;
userAge>=18? console.log("You're allowed to marry")
:console.log(`You need to wait ${18-userAge} years to get married`);
// Compare the values of myAge and yourAge. Based on the comparison and log the result to console stating who is older.
// Enter your age: 30
// You are 5 years older than me.
const myAge=21;
const yourAge=30;
if(myAge<yourAge){
console.log(`You are ${yourAge-myAge} years older than me.`)
}
else if(myAge>yourAge){


console.log(`I am ${myAge-yourAge} years older than you`)}
else{
    console.log("We are of same age.")
}
// . If myAge is greater than yourAge return 'yourAge is greater than myAge ' 
// else 'myAge is less than yourAge'. Try to implement it in to ways.
//first way
myAge>yourAge?console.log("yourAge is greater than myAge"):console.log("myAge is less than yourAge")
//second way
if(myAge>yourAge){
    console.log("yourAge is greater than myAge");
}
else{
    console.log("myAge is less than yourAge");
}

// Check, if a number is even or not
const inputNumber=21;
(inputNumber%2===0)?console.log("Input number is even"):console.log("Input Number is odd");
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F
const score=75;
if(score>=80){
    console.log("A");

}
else if(score>=70){
    console.log("B");

}
else if(score>=60){
    console.log("C");
}
else if(score>=50){
    console.log("D");
}
else{
    console.log("F");
}

// Check if the season is Rainy, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Rainy.
// December, January or February, the season is Winter.
// March, the season is Spring
//  April, May, June, July or August, the season is Summer
const month="February";
switch(month.toLowerCase()){
    case "september":
    case "october":
    case "novemner":
    console.log("Its rainy season");
    break;
    case "december":
    case "january":
    case "february":
        console.log("Its winter season");
        break;
    case "march":
        console.log("Its spring");
        break;
    case "april":
    case "may":
    case "june":
    case "august":
        console.log("Its summer season");
        break;
    default:
        console.log("invalid input");

}

// Check if a day is weekend day or a working day. Your script will take day as an input.
const dayOfWeek="SUNDAY";
switch(dayOfWeek.toLowerCase()){
case "saturday":
case "sunday":
    console.log("Weekend Day");
    break;
case "monday":
case "tuesday":
case "wednesday":
case "thursday":
case "friday":
    console.log("Working day");
    break;
default:
    console.log("Invalid input")
}
// Write a program which tells the number of days in a month.

switch(month.toLowerCase()){
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${month} has 31 days`);
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${month} has 30 days`);
        break;
    case "february":
        console.log(`${month} has 28 or 29 days`);
        break;
    default :
        console.log("Invalid input")
}
// Write a program to check whether the year is leap year or not.
const year=1000;
((year%4==0 && year%100!=0)|| year%400==0)? console.log(`${year} is a leap year`)
:console.log(`${year} is not a leap year`)



// . Write a JavaScript ternary expression that checks the following conditions:
// If the first condition (condition1) is true, 
// it should check the second condition (condition2).
//  If condition2 is true, set the result to 'A', otherwise set it to 'B'.
// If the first condition (condition1) is false,
//  it should check another condition (condition3). 
//  If condition3 is true, set the result to 'C', otherwise set it to 'D'.

const vineetIsMarried=false;
const vineetHasCar=false;
const vineetHasInstaAccount=true;
let result=vineetIsMarried?(vineetHasCar?'A':'B'):(vineetHasInstaAccount? 'C':D);
console.log(result);
// What will be the result of the following nested ternary expression: //D
result = true ? false ? true ? 'A' : 'B' : false ? 'C' : 'D' : 'E';
console.log(result);



