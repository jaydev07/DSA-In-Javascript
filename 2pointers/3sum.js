const prompt = require("prompt-sync")();

var input = JSON.parse(prompt("Enter input: "));

const three_sum = (input) => {
    
    let i=0,j=0,k=input.length-1,output=[];

    input.sort((a,b) => a-b);

    while (input[i] <= 0) {
        j = i + 1;
        k = input.length-1;

        while (j < k) {
            if (input[i] + input[j] + input[k] === 0) {
                output.push([input[i], input[j], input[k]]);
                break;
            }
            else if (input[i] + input[j] + input[k] < 0) {
                j++;
            }
            else if (input[i] + input[j] + input[k] > 0) {
                k--;
            }
        }

        i++;
    }

    return output;
}

const output = three_sum(input);
console.log("output: ", output);