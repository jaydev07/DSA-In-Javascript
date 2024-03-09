const prompt = require("prompt-sync")();

var input = JSON.parse(prompt("Enter Input: "));

const sort_012 = (input) => {

    let low = 0, mid = 0, high = input.length-1, swap;

    while (mid < high) {

        if (input[mid] === 0) {
            swap = input[mid];
            input[mid] = input[low];
            input[low] = swap;
            mid++;
            low++;
        }

        else if (input[mid] === 1) {
            mid++;
        }

        else if (input[mid] === 2) {
            swap = input[mid];
            input[mid] = input[high];
            input[high] = swap;
            high--;
        }
    }

    return input;
}

const output = sort_012(input);
console.log("output: ", output);