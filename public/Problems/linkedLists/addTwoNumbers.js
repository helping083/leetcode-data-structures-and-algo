import ListNode from '../../datastructures/LinkedList.js'
export const addTwoNumbers = (l1,l2) => {
    let dummy = new ListNode();
    let curr = dummy;
    let carry = 0;
    while(l1 || l2 || carry) {
        let val1 = l1 ? l1.val: 0;
        let val2 = l2 ? l2.val: 0;
        let val = val1 + val2 + carry;
        carry = Math.floor(val / 10);
        val = val % 10;
        curr.next = new ListNode(val);

        curr = curr.next;
        l1 = l1 ? l1.next: null;
        l2 = l2 ? l2.next: null;
    }
    console.log(dummy.next)
    return dummy.next;
}