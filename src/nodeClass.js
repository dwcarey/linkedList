class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

  getValue() {
    return this.value;
  }

  setValue(valueInput) {
    this.value = valueInput;
  }

  getNextNode() {
    return this.nextNode;
  }

  setNextNode(nextNodeInput) {
    this.nextNode = nextNodeInput;
  }
}

export { Node };
