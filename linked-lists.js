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

  // pop() removes the last element from the list

  pop() {
    const penultimateIndex = this.size() - 2;
    const penultimateNode = this.at(penultimateIndex);
    const lastNode = this.tail();
    penultimateNode.nextNode = null;

    return lastNode;
  }

  // contains(value) returns true if the passed in value is in the list and otherwise returns false.

  contains(value) {
    for (let i = 0; i < this.size() - 1; i++) {
      const node = this.at(i);
      if (node.value === value) return true;
    }

    return false;
  }

  // find(value) returns the index of the node containing value, or null if not found.

  find(value) {
    for (let i = 0; i < this.size() - 1; i++) {
      const node = this.at(i);
      if (node.value === value) return i;
    }

    return null;
  }

  // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console.
  // The format should be: ( value ) -> ( value ) -> ( value ) -> null

  toString() {
    const string = '';

    for (let i = 0; i < this.size() - 1; i++) {
      const newString = i === 0
        ? `( ${this.at(i).value} )`
        : ` -> ( ${this.at(i).value} )`;
      
      string = string + newString;
    }

    string = string + ' -> null';
    
    return string;
  }

  // insertAt(value, index) that inserts a new node with the provided value at the given index.

  insertAt(value, index) {
    const newNode = new Node();
    newNode.value = value;
    
    const nodeAtIndex = this.at(index);
    newNode.nextNode = nodeAtIndex;

    if (index === 0) {
      this.head = newNode;
      return;
    } 
    
    const nodeBeforeIndex = this.at(index - 1)
    nodeBeforeIndex.nextNode = newNode;

    return;    
  }

  // removeAt(index) that removes the node at the given index.

  remoteAt(index) {
    const nodeAtIndex = this.at(index);

    if (index === 0) {
      if (!this.at(index + 1)) {
        this.head = null;
        return;
      }

      this.head = this.at(index + 1);
      return;
    }

    if (!nodeAtIndex.nextNode) {
      this.at(index - 1).nextNode = null;
      return;
    }

    this.at(index - 1).nextNode = this.at(index + 1);
    return;
    }
  }
}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}