import Node from './Node.js';

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length +=1;
        console.log(this);
        return this;
    }

    pop() {

    }

    traverse() {
        let current = this.head;
        while(current) {
            current = current.next;
        }
    }
}

export default LinkedList