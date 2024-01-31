// Create a file and declare variables and assign string, boolean, undefined and null data types
// Create file and use the JavaScript typeof operator to check different data types.
//  Check the data type of each variable
const myName="Vinay";//string
const isMarried=false;//boolean
const varUndefined=undefined;//Not a good practice but had to assignment due to requirement of assignment
const varNull=null;//should not do this but assgined due to requirement

// use the JavaScript typeof operator to check different data types.
//  Check the data type of each variable
const internName="Vineet";
const internAge=21;
const internIsMarried=false;
const checkOutTime= undefined;
const weaknesss=null;
const strenghts=["Punctual","Polite","Proactive"];
const internProjects={1:"Vehicle Classification and Monitoring",2:"Object Detection Model"};
const otp=Symbol("123");
const exampleOfBigInt=BigInt(12345678765432);
function greet(){
    console.log(`Hello ${internName}`);
    
}
console.log(typeof(internName));//string
console.log(typeof(internAge));//number
console.log(typeof(internIsMarried));//boolean
console.log(typeof(checkOutTime));//undefined
console.log(typeof(weaknesss));//object
console.log(typeof(strenghts));//object
console.log(typeof(greet));//function
console.log(typeof(otp));//symbol
console.log(typeof(exampleOfBigInt));//bigint
