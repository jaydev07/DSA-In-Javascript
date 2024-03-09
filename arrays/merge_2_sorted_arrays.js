const prompt = require("prompt-sync")();

var array1 = JSON.parse(prompt("Enter array 1: "));
var array2 = JSON.parse(prompt("Enter array 2: "));

const merge = (array1, array2) => {

    let i=0, j=0, k=1, swap;

    while (i <  array1.length ) {
        
        if (array1[i] <= array2[j]) {
            i++;
        }

        else {
            swap = array1[i];
            array1[i] = array2[j];
            array2[j] = swap;

            // Sort array2
            k = j+1;
            while (swap > array2[k] && k < array2.length) {
                array2[k-1] = array2[k];
                k++;
            }
            array2[k-1] = swap;
        }
    }

    return array1, array2;
}

merge(array1, array2);

console.log("Array1: ", array1, " Array2: ", array2);