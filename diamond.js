function diamondPattern(height){
    let space,stars;
    for (let upperIndex = 1; upperIndex <= height; upperIndex++) {
        spaces = ' '.repeat(height - upperIndex);
        stars = '*'.repeat(2 * upperIndex - 1);
        console.log(spaces + stars);
    }

    for (let lowerIndex= height- 1; lowerIndex >=1; lowerIndex--) {
        spaces = ' '.repeat(height - lowerIndex);
        stars = '*'.repeat(2 * lowerIndex - 1);
        console.log(spaces + stars);
    }
    
}

diamondPattern(5);