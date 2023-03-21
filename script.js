function createNode(value = null) {
  return {
    value: value,
    next: null,
  };
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    this.length++;
    let newNode = createNode(value);

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    this.length++;
    let newNode = createNode(value);
    this.head = { value: value, next: this.head };
    return newNode;
  }

  // returns the total number of nodes in the list
  size() {
    return this.length;
  }

  // returns the first node in the list
  headNode() {
    return this.head;
  }

  // returns the last node in the list
  tailNode() {
    return this.tail;
  }

  // returns the node at the given index
  at(index) {
    let indexValue = this.head;
    for (let i = 1; i <= index - 1; i++) {
      indexValue = indexValue.next;
    }
    return indexValue;
  }

  // removes the last element from the list
  pop() {
    let value = this.head;
    let preValue = null;
    while (preValue === null) {
      value = value.next;
      if (value.next.next.next === null) {
        preValue = this.tail = value.next;
        this.length--;
        value = value.next.next = null;
        return this.head;
      }
    }
  }
}

const linkedList = new LinkedList();

linkedList.append(7);
linkedList.append(8);
linkedList.append(true);
linkedList.append(20);
linkedList.append(21);
linkedList.prepend(6);
linkedList.prepend(5);
console.log(linkedList);
console.log(linkedList.at(7));
console.log(linkedList.pop());
