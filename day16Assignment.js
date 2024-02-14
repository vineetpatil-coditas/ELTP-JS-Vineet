const newReduce = (array, initialValue, operationFunction) => {
    let product = initialValue;
    for (const number of array) {
        product = operationFunction(product, number);
    }
    return product;
};

const multiply = (array) => {
    const multiplyFunction = (a, b) => a * b;
    return newReduce(array, 1, multiplyFunction);
};

const numbers = [1, 2, 3, 4, 5];
console.log(multiply(numbers)); 
