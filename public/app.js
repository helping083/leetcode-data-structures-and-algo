import { addTwoNumbers } from './Problems/linkedLists/addTwoNumbers.js';
import ListNode from './datastructures/LinkedList.js';
let l1 = new ListNode(9);
l1.next = new ListNode(9);
l1.next.next = new ListNode(9);
l1.next.next.next = new ListNode(9);
l1.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next.next.next.next = new ListNode(9);

let l2 = new ListNode(9)
l2.next = new ListNode(9);
l2.next.next = new ListNode(9);
addTwoNumbers(l1,l2);