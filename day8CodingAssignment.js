function getLengthOfMissingArray(arrayOfArrays) {
    if (!arrayOfArrays || arrayOfArrays.length === 0) {
        return 0;
    }

    
    let minLength = Infinity;
    let maxLength = -Infinity;

    for (let array of arrayOfArrays) {
        if (!array || array.length === 0) {
            return 0; // If any array is empty, return 0
        }
        minLength = Math.min(minLength, array.length);
        maxLength = Math.max(maxLength, array.length);
    }


    for (let i = minLength; i <= maxLength; i++) {
        let found = false;
        for (let array of arrayOfArrays) {
            if (array.length === i) {
                found = true;
                break;
            }
        }
        if (!found) {
            return i;
        }
    }
    return maxLength + 1;
}