class Queue {
  constructor() {
    this.stackA = [];
    this.stackB = [];
  }

  enqueue(val) {
    this.stackA.push(val);
  }

  dequeue() {
    /*  We will pop all the elements from stackA and push them to stackB
     *  except the last, which we won't push and instead save to variable.
     *  Then pop all elements from stackB and push to stackA.
     *  Finally, return variable.
     */
    let ret; // what we will return

    const aLength = this.stackA.length;
    for (let i = aLength; i > 0; i--) {
      const val = this.stackA.pop();
      if (i === 1) {
        ret = val;
      } else {
        this.stackB.push(val);
      }
    }

    const bLength = this.stackB.length; // ?
    for (let i = 1; i <= bLength; i++) {
      this.stackA.push(this.stackB.pop());
    }
    return ret;
  }

  peek() {
    return this.stackA;
  }
}

const test = new Queue();
test.enqueue("a");
test.enqueue("b");
test.enqueue("c");
console.log(test.peek());
console.log(test.dequeue());
console.log(test.peek());
