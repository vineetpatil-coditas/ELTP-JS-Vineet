// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
// Generate a random number between 0 and 100 inclusively.
// Generate a random number between 50 and 100 inclusively.
// 5. Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
// 6. Enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
const rollNumber='10';
const toCheck=10;
console.log(typeof(rollNumber)===typeof(toCheck));
const convertRollNumber=parseInt(rollNumber);
console.log(typeof(convertRollNumber)===typeof(toCheck));
// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
const marks='98.9';
const toCheckMarks=98.9;
console.log(typeof(marks)===typeof(toCheckMarks));
const convertedMarks=parseFloat(marks);
console.log(typeof(convertedMarks)===typeof(toCheckMarks));
// Generate a random number between 0 and 100 inclusively.
const randomNumberBetween0and100 =Math.floor(Math.random()*101);
console.log(randomNumberBetween0and100);
//Generate a random number between 50 and 100 inclusively.
const randomNumberBetween50and100=Math.floor(Math.random()*51 +50)
console.log(randomNumberBetween50and100);
// 5. Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
const numbers = [1, 2, 3, 4, 5];
for (let index in numbers) {
    const forLoopRunnerVariable = numbers[index];
    console.log(`${forLoopRunnerVariable} ${1} ${forLoopRunnerVariable} ${Math.pow(forLoopRunnerVariable, 2)} ${Math.pow(forLoopRunnerVariable, 3)}`);
}


//Enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
const triangleHeight=5;
const triangleBase=10;
const triangleArea=0.5*triangleBase*triangleHeight;
console.log(triangleArea);
