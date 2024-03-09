const prompt = require("prompt-sync")();

var input = JSON.parse(prompt("Enter input: "));

const remove_duplicates = (input) => {
    
    let i=0,j=1;

    while (j < input.length) {

        if (input[i] === input[j]) {
            j++;
        }
        else {
            i++;
            input[i] = input[j];
            j++;
        }
    }

    return input;
}

const output = remove_duplicates(input);
console.log("output: ", output);