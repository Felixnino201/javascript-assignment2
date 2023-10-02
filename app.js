let array1 = [15, 30, 45, 60];
let array2 = [5, 6, 3, 10];

function arrayDivider(numeratorArray, denominatorArray) {
    if (numeratorArray.length === denominatorArray.length) {
        let resultArray = new Array();
        
        for (i = 0; i < numeratorArray.length; i++) {
            result = numeratorArray[i] / denominatorArray[i];

            resultArray.push(result);
        }

        return resultArray;
    }

    else {
        error = "The arrays are not of same length";

        return error;
    }
}

newArray = arrayDivider(array1, array2);
console.log(newArray);