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

  prependValue(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      const currentNode = this.head;
      newNode.setNextNode(currentNode);
      this.head = newNode;
    }
  }

  getSize() {
    if (this.head === null) {
      return 0;
    }

    let currentNode = this.head;
    let sizeCount = 1;
    while (currentNode.getNextNode() !== null) {
      sizeCount += 1;
      currentNode = currentNode.getNextNode();
    }
    return sizeCount;
  }

  getHead() {
    if (this.head === null) {
      return "Ain't no nodes";
    }

    return this.head;
  }

  getTail() {
    if (this.head === null) {
      return "Ain't no nodes";
    }
    let currentNode = this.head;
    while (currentNode.getNextNode() !== null) {
      currentNode = currentNode.getNextNode();
    }
    return currentNode;
  }

  //starting 0
  getByIndex(index) {
    if (this.head === null) {
      return "Ain't no nodes";
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      currentNode = currentNode.getNextNode();
      currentIndex += 1;
    }
    return currentNode;
  }

  //get size
  //getbyindex size - 2
  //should be 2nd last node
  //set nextnode to null

  popNode() {
    if (this.head === null) {
      return "Ain't no nodes";
    }
    const length = this.getSize();
    const secondLastNode = this.getByIndex(length - 2);
    return secondLastNode.setNextNode(null);
  }

  containsValue(value) {
    if (this.head === null) {
      return "Ain't no nodes";
    }
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.getValue() === value) {
        return true;
      }
      currentNode = currentNode.getNextNode();
    }
    return false;
  }

  getIndexOf(value) {
    if (this.head === null) {
      return "Ain't no nodes";
    }
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentNode.getValue() === value) {
        return currentIndex;
      }
      currentIndex += 1;
      currentNode = currentNode.getNextNode();
    }
    return null;
  }

  toString() {
    if (this.head === null) {
      return "Ain't no nodes";
    }
    let currentNode = this.head;
    let listString = '';

    while (currentNode.getNextNode() !== null) {
      listString += `( ${currentNode.getValue()} ) => `;
      currentNode = currentNode.getNextNode();
    }
    listString += `( ${currentNode.getValue()} )`;
    return listString;
  }

  //starts at 0
  insertAtIndex(value, index) {
    const nodeBefore = linkedListOne.getByIndex(index - 1);
    const newNode = new Node(value);
    const nodeAfter = nodeBefore.getNextNode();

    newNode.setNextNode(nodeAfter);
    return nodeBefore.setNextNode(newNode);
  }

  removeAtIndex(index) {
    const nodeBefore = linkedListOne.getByIndex(index - 1);
    const nodeAfter = nodeBefore.getNextNode().getNextNode();
    nodeBefore.setNextNode(nodeAfter);
  }
  // other functions
}

const linkedListOne = new LinkedList();
console.log(linkedListOne);

linkedListOne.appendValue('X');
linkedListOne.appendValue('Y');
linkedListOne.appendValue('Z');
linkedListOne.prependValue('A');
linkedListOne.prependValue('B');
linkedListOne.prependValue('C');

console.log(linkedListOne.getSize());

console.log(linkedListOne.getHead());

console.log(linkedListOne.getTail());

console.log(linkedListOne.getByIndex(0));
console.log(linkedListOne.getByIndex(4));

console.log(linkedListOne.popNode());

console.log(linkedListOne.containsValue('A')); //true
console.log(linkedListOne.containsValue('B')); //true
console.log(linkedListOne.containsValue('H')); //false
console.log(linkedListOne.containsValue(1)); //false

console.log(linkedListOne.getIndexOf('A')); //2
console.log(linkedListOne.getIndexOf('B')); //1
console.log(linkedListOne.getIndexOf('H')); //null
console.log(linkedListOne.getIndexOf(1)); //null

linkedListOne.insertAtIndex('H', 2); //H in 3rd spot
linkedListOne.insertAtIndex(5, 3); //5 in 4th spot

linkedListOne.removeAtIndex(2); //remove the H
linkedListOne.removeAtIndex(2); //remove the 5

console.log(linkedListOne.toString());