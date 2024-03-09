var top=-1, stack=[];

const main = () => {

    push(3);
    console.log(top, stack);
    push(8);
    console.log(top, stack);
    push(2);
    console.log(top, stack);
    push(4);
    console.log(top, stack);

    pop();
    console.log(top, stack);

    pop();
    console.log(top, stack);

    pop();
    console.log(top, stack);

    pop();
    console.log(top, stack);

    pop();
    console.log(top, stack);
}

const push = (element) => {
    top++;
    stack[top] = element;
}

const pop = () => {

    if (top === -1) {
        console.log("stack is empty");
        return -1;
    }

    let element = stack[top];
    stack.splice(top, 1);
    top--;

    return element;
}

const print = () => {
    console.log(stack);
}

main();