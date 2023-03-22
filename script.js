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

  /* returns true if the passed in value is in the 
  list and otherwise returns false. */
  contains(v) {
    let checker = this.head;
    if (checker.value === v) {
      return true;
    } else {
      while (checker.value !== v && checker.next !== null) {
        checker = checker.next;
        if (checker.value === v) return true;
      }
      return false;
    }
  }

  /* returns the index of the node containing value, 
  or null if not found. */
  find(v) {
    let checker = this.head;

    for (let i = 1; i <= this.length; i++) {
      if (checker.value === v) return i;
      checker = checker.next;
    }
    return null;
  }

  // represents your LinkedList objects as strings
  toString() {
    let checker = this.head;
    let arr = [];
    for (let i = 1; i <= this.length - 1; i++) {
      if (checker.next != null) {
        arr.push(checker.value);
        checker = checker.next;
      }
      if (checker.next === null) {
        arr.push(checker.value);
        arr.push(`${checker.next}`);
      }
    }
    const stringArr = arr.toString();
    const format = stringArr.replaceAll(",", " -> ");
    return format;
  }

  // inserts a new node with the provided value at the given index
  insertAt(value, index) {
    let indexValue = this.head;
    for (let i = 1; i <= index - 1; i++) {
      indexValue = indexValue.next;
    }
    indexValue.value = value;
    return this;
  }

  // removes the node at the given index
  removeAt(index) {
    let indexValue = this.head;

    if (index <= 1) {
      this.head = indexValue = indexValue.next;
      this.length--;
      return this;
    }
    index = index - 1;
    for (let i = 1; i <= this.length; i++) {
      if (i === index) {
        if (indexValue.next.next === null) {
          indexValue.next = null;
          this.length--;
          this.tail = indexValue;
          return this;
        }

        if (indexValue.next.next !== null) {
          indexValue.next = indexValue.next.next;
          this.length--;
          this.tail = indexValue;
          return this;
        }
      }
      indexValue = indexValue.next;
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
console.log(linkedList.at(7)); // {value: 21, next: null}
// console.log(linkedList.pop());
console.log(linkedList.contains(20)); // true
console.log(linkedList.headNode());
console.log(linkedList.tailNode());
console.log(linkedList.find(20)); // 6
console.log(linkedList.toString()); // 5 => 6 => 7 => 8 => true => 20 => 21 => null

console.log(linkedList.insertAt(3, 2)); // insert 3 at index 2
console.log(linkedList.removeAt(5)); // removes index 5
