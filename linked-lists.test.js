const LinkedList = require('./linked-lists');


// Test append() method
test('append() should add a new node to the end of the list', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  expect(list.toString()).toBe('( 1 ) -> ( 2 ) -> ( 3 ) -> null');
});

// Test prepend() method
test('prepend() should add a new node to the start of the list', () => {
  const list = new LinkedList();
  list.prepend(3);
  list.prepend(2);
  list.prepend(1);
  expect(list.toString()).toBe('( 1 ) -> ( 2 ) -> ( 3 ) -> null');
});

// Test size() method
test('size() should return the total number of nodes in the list', () => {
  const list = new LinkedList();
  expect(list.size()).toBe(0);
  list.append(1);
  expect(list.size()).toBe(1);
  list.append(2);
  list.append(3);
  expect(list.size()).toBe(3);
});

// Test head() method
test('head() should return the first node in the list', () => {
  const list = new LinkedList();
  expect(list.head()).toBe(null);
  list.append(1);
  expect(list.head().value).toBe(1);
  list.prepend(2);
  expect(list.head().value).toBe(2);
});

// Test tail() method
test('tail() should return the last node in the list', () => {
  const list = new LinkedList();
  expect(list.tail()).toBe(null);
  list.append(1);
  expect(list.tail().value).toBe(1);
  list.append(2);
  list.append(3);
  expect(list.tail().value).toBe(3);
});

// Test at() method
test('at() should return the node at the given index', () => {
  const list = new LinkedList();
  expect(list.at(0)).toBe(null);
  list.append(1);
  list.append(2);
  list.append(3);
  expect(list.at(0).value).toBe(1);
  expect(list.at(1).value).toBe(2);
  expect(list.at(2).value).toBe(3);
  expect(list.at(3)).toBe(null);
});

// Test pop() method
test('pop() should remove the last element from the list', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  expect(list.pop().value).toBe(3);
  expect(list.toString()).toBe('( 1 ) -> ( 2 ) -> null');
});

// Test contains() method
test('contains() should return true if the value is in the list, false otherwise', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  expect(list.contains(2)).toBe(true);
  expect(list.contains(4)).toBe(false);
});

// Test find() method
test('find() should return the index of the node containing the value, null if not found', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  expect(list.find(2)).toBe(1);
  expect(list.find(4)).toBe(null);
});

// Test toString() method
test('toString() should represent the LinkedList object as a string', () => {
  const list = new LinkedList();
  expect(list.toString()).toBe(null);
  list.append(1);
  expect(list.toString()).toBe('( 1 ) -> null');
  list.append(2);
  list.append(3);
  expect(list.toString()).toBe('( 1 ) -> ( 2 ) -> ( 3 ) -> null');
});

// Test insertAt() method
test('insertAt() should insert a new node with the provided value at the given index', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.insertAt(4, 1);
  expect(list.toString()).toBe('( 1 ) -> ( 4 ) -> ( 2 ) -> ( 3 ) -> null');
  list.insertAt(5, 0);
  expect(list.toString()).toBe('( 5 ) -> ( 1 ) -> ( 4 ) -> ( 2 ) -> ( 3 ) -> null');
});

// Test removeAt() method
test('removeAt() should remove the node at the given index', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.removeAt(1);
  expect(list.toString()).toBe('( 1 ) -> ( 3 ) -> null');
  list.removeAt(0);
  expect(list.toString()).toBe('( 3 ) -> null');
  list.removeAt(0);
  expect(list.toString()).toBe(null);
});