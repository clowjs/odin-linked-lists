class LinkedList {
  constructor() {
    this.head = null;
  }

  // append(value) adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node();
    newNode.value = value;
    this.tail().nextNode = newNode;
  }

  // prepend(value) adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node();
    newNode.value = value;
    newNode.nextNode = this.head();
    this.head = newNode;
  }

  // size returns the total number of nodes in the list
  size() {
    if (!this.head) return 0;

    let currentNode = this.head;

    if (!currentNode.nextNode) return 1;

    let total = 1;

    while (currentNode.nextNode) {
      total += 1;
      currentNode = currentNode.nextNode;
    }

    return total;
  }

  // head returns the first node in the list
  head() { return this.head }

  // tail returns the last node in the list
  tail() {
    if (!this.head()) return null
    if (!this.head().nextNode) return this.head;

    let currentNode = this.head();

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  // at(index) returns the node at the given index
  at(index) {
    if (!this.head()) return null;
    if (index === 0) return this.head();

    let currentNode = this.head();

    for (let i = 1; i <= index; i++) {
      if (!currentNode.nextNode) return null;

      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}