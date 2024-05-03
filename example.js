const arr = [-2, 4, -20, 5, 7];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        let swap = false;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                swap = true;
            }
        }
        if (!swap) {
            break;
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        let min = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        let nti = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > nti) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = nti;
    }
    return arr;
}
function heapSort(arr){

}

function quickSort(arr) {
    let pivot = arr[length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

function mergeSort(arr) {
    let mid = Math.ceil(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let temparr = [];
    if (left[0] < right[0]) {
        temparr.push(left.shift(0));
    } else {
        temparr.push(right.shift(0));
    }
}

class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.head === 0;
  }

  enQueue(value) {
    this.items[this.head] = value;
    this.head++;
  }

  deQueue() {
    const item = this.items[this.rear];
    delete this.items[this.rear];
    this.rear++;
    return item;
  }

  front() {
    return this.items[this.rear];
  }

  display() {
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enQueue(2);
queue.enQueue(3);
console.log(queue.deQueue());
queue.enQueue(5);
console.log(queue.front());
queue.display();

class Stack {
  constructor() {
    this.items = {};
    this.front = 0;
  }

  isEmpty() {
    return this.front === 0;
  }

  push(value) {
    this.items[this.front] = value;
    this.front++;
  }

  pop() {
    const item = this.items[this.front - 1];
    delete this.items[this.front - 1];
    this.front--;
    return item;
  }

  peek() {
    return this.items[this.front - 1];
  }

  display() {
    console.log(this.items);
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(2);
stack.push(5);
console.log(stack.pop());
stack.push(6);
stack.display();
