var first = -1, last = -1, queue = [];

const main = () => {

    console.log(first, last, queue);

    enqueue(4);
    console.log(first, last, queue);
    enqueue(1);
    console.log(first, last, queue);
    enqueue(6);
    console.log(first, last, queue);
    enqueue(9);
    console.log(first, last, queue);

    console.log(dequeue(), first, last, queue);
    console.log(dequeue(), first, last, queue);
    console.log(dequeue(), first, last, queue);
    console.log(dequeue(), first, last, queue);
    console.log(dequeue(), first, last, queue);

    enqueue(7);
    console.log(first, last, queue);

    console.log(dequeue(), first, last, queue);

}

const enqueue = (element) => {

    if (queue.length === 0) {
        first++;
    }
    last++;
    queue[last] = element;
}

const dequeue = () => {

    if (first > last) {
        console.log("queue is empty");
        return -1;
    }

    let element = queue[first];
    first++;

    return element;
}

main();