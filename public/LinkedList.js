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
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length -=1;
        if(this.length === 0) {
            this.clear();
        }
        return current;
    }

    shift() {
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length -=1;
        if(this.length === 0) {
            this.clear()
        }
        console.log(this);
        return currentHead;
    }

    unShift(val) {
        let newHead = new Node(val);
        if(!this.head) {
            this.head = newHead;
            this.tail = newHead;
        }
        newHead.next = this.head;
        this.head = newHead;
        this.length +=1;
        console.log(this);
        return this;
    }

    clear() {
        this.head = null;
        this.tail = null;
    }

    traverse() {
        let current = this.head;
        while(current) {
            current = current.next;
        }
    }
}

export default LinkedList