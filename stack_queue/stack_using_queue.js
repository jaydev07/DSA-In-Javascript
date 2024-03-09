var q1=[], q2=[];

const main = () => {

    push(7);
    print_stack();
    push(2);
    print_stack();
    push(9);
    print_stack();
    push(3);
    print_stack();

    console.log(pop());
    print_stack();
    console.log(pop());
    print_stack();
    console.log(pop());
    print_stack();

}

const push = (element) => {

    let current_element;

    q1.push(element);
    while (q2.length !== 0) {
        current_element = q2.shift();
        q1.push(current_element);
    }
    while (q1.length !== 0) {
        current_element = q1.shift();
        q2.push(current_element);
    }
}

const pop = () => {

    if (q2.length === 0) {
        console.log("stack is empty");
        return -1;
    }

    let element = q2.shift();
    return element;
}

const print_stack = () => {
    console.log(q2);
}

main();