const prompt = require("prompt-sync")();

var input = JSON.parse(prompt("Enter array: "));

const max_sum = (input) => {

    let sum=0, max=0, hash_map={};
    
    for (let i=0; i < input.length; i++) {
        
        sum += input[i];

        if (hash_map[sum] !== undefined) {
            // now sum is 0

            max = max < i - hash_map[sum] ? i - hash_map[sum] : max;
        }
        else {
            hash_map[sum] = i;
        }
    }

    return max;
}

const output = max_sum(input);
console.log("output: ", output);