
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length, width) => length * width;
console.log(areaOfRectangle(5,10))
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    const monthInLower = month.toLowerCase();
    let season;

    switch (monthInLower) {
        case 'march':
        case 'april':
        case 'may':
            season = 'Spring';
            break;
        case 'june':
        case 'july':
        case 'august':
            season = 'Summer';
            break;
        case 'september':
        case 'october':
        case 'november':
            season = 'Autumn';
            break;
        case 'december':
        case 'january':
        case 'february':
            season = 'Winter';
            break;
        default:
            season = 'Invalid month';
    }

    return season;
}



// Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
// 4. Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (x, y) => {
    const temp = x;
    x = y;
    y = temp;
    return [x, y]; 
};

// 5. Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
const generateColors = (type, num) => {
    const hexChars = '0123456789abcdef';
    const colors = [];

    if (type === 'rgb') {
        for (let index = 0; index < num; index++) {
            const rgbArray = [];
            for (let index = 0; index < 3; index++) {
                const rand = Math.floor(Math.random() * 256);
                rgbArray.push(rand);
            }
            const rgbString = rgbArray.join(',');
            const finalRgb = `rgb(${rgbString})`;
            colors[index] = finalRgb;
        }
    } else if (type === 'hex') {
        for (let index = 0; index < num; index++) {
            let hexColor = '#';
            for (let index = 0; index < 6; index++) {
                const index = Math.floor(Math.random() * hexChars.length);
                hexColor += hexChars[index];
            }
            colors[index] = hexColor;
        }
    }
    return colors;
};

console.log(generateColors('rgb', 4));
console.log(generateColors('hex', 4));

// 6. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// //['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
function modifyArray(array) {
    if (array.length < 5) {
        return 'item not found';
    } else {
        array[4] = array[4].toUpperCase(); 
        return array;
    }
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']));

// 7. Write a functions which checks if all items are unique in the array.
function areAllItemsUnique(arr) {
    return arr.every((item, index) => arr.indexOf(item) === index);
}

console.log(areAllItemsUnique([1, 2, 3, 4, 5])); 


// 8. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
function sevenRandomNumbers() {
    const numbers = [];
    while (numbers.length < 7) {
        const randomNumber = Math.floor(Math.random() * 10); 
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

console.log(sevenRandomNumbers());
