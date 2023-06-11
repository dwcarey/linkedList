import { Node } from './nodeClass';

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  appendValue(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.getNextNode() !== null) {
        currentNode = currentNode.getNextNode();
      }
      currentNode.setNextNode(newNode);
    }
  }
  // other functions
}

const linkedListOne = new LinkedList();
console.log(linkedListOne);

linkedListOne.appendValue('X');
console.log(linkedListOne);

linkedListOne.appendValue('Y');
console.log(linkedListOne);

linkedListOne.appendValue('Z');
console.log(linkedListOne);
