const prompt = require("prompt-sync")();

var input = prompt("Enter string: ");

const longest_substring = (input) => {

    let length=0, l=0, r=0, hash_set = {};

    for (r=0; r < input.length; r++) {

        if (!hash_set[input[r]]) {
            hash_set[input[r]] = 1;
            length = r - l + 1 > length ? r - l + 1 : length;
        }
        else {
            while (hash_set[input[r]]) {
                delete hash_set[input[l]];
                l++;
            }
            hash_set[input[r]] = 1;
        }
    }

    console.log(hash_set);
    return length;
}

const output = longest_substring(input);
console.log("output: ", output);