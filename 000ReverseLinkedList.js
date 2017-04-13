//Reverse a linked list

(function() {
  class Node {

    constructor(n, next) {
      this.data = n;
      this.next = next;
    }
  }

  var list = new Node(1);
  var ptr = list;
  for(var i = 2; i < 10; i++) {
    ptr.next = new Node(i);
    ptr = ptr.next;
  }

  //Using stack
  var stack = [];
  ptr = list;
  while(ptr != null) {
    stack.push(ptr);
    ptr = ptr.next;
  }

  //Use temp to set next and iterate
  var ret = stack.pop();
  var temp = ret;
  ptr = ret;
  while(stack.length > 0) {
    ptr = stack.pop();
    temp.next = ptr;
    temp = temp.next;
  }
  //Set last node's next to null
  ptr.next = null;

  while(ret != null) {
    console.log(ret.data);
    ret = ret.next;
  }

  //Using O(1) space complexity
  //Credit to Max Gurela
  var last = null;
  while(head) {
    var item = head;
    item.next = last;
    last = item;
    head = head.next;
  }
  return last;
})();
