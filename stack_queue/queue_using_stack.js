var s1=[], s2=[];

const main = () => {

    enqueue(7);
    print_queue();
    enqueue(2);
    print_queue();
    enqueue(9);
    print_queue();
    enqueue(3);
    print_queue();

    console.log(dequeue());
    print_queue();
    console.log(dequeue());
    print_queue();
    console.log(dequeue());
    print_queue();
    console.log(dequeue());
    print_queue();
    console.log(dequeue());
    print_queue();
}

const enqueue = (element) => {

    let current_element;

    while (s2.length !== 0) {
        current_element = s2.pop();
        s1.push(current_element);
    }
    s2.push(element);
    while (s1.length !== 0) {
        current_element = s1.pop();
        s2.push(current_element);
    }
}

const dequeue = () => {

    if (s2.length === 0) {
        console.log("queue is empty");
        return -1;
    }

    let element = s2.pop();
    return element;
}

const print_queue = () => {
    console.log(s2);
}

main();