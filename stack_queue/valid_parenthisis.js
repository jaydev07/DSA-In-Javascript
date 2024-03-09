const prompt = require("prompt-sync")();

var input = prompt("Enter input: ");

const main = (input) => {

    let stack = [], current_element;

    for (let element of input) {
        
        if (element === '(' || element === '{' || element === '[') {
            stack.push(element);
        }
        else if (element === ')') {
            current_element = stack.pop();
            if (current_element !== '(') {
                return false;
            }
        }
        else if (element === '}') {
            current_element = stack.pop();
            if (current_element !== '{') {
                return false;
            }
        }
        else if (element === ']') {
            current_element = stack.pop();
            if (current_element !== '[') {
                return false;
            }
        }
    }

    if (stack.length > 0) {
        return false;
    }

    return true;
}

console.log(main(input));