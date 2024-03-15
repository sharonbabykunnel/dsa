class MaxHeap{
    constructor() {
        this.heap = [];
    }

    build(arr) {
        this.heap = [...arr];
        for (let i = Math.floor((this.heap.length - 1) / 2); i >= 0; i--){
            heapify(i);
        }
    }

    heapify(index) {
        let left = index * 2 + 1;
        let right = index * 2 + 2;
        let large = index;
        if (left < this.heap.length && this.heap[left] > this.heap[large]) {
            large = left;
        }
        if (right < this.heap.lenght && this.haep[right] > this.heap[large]) {
            large = right;
        }
        if (large !== index) {
            this.swap(large, index);
            this.heapify(large);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.build(this.heap.lenght - 1);
    }

    build(index) {
        while (index > 0) {
            let parent = (index - 1) / 2;
            if (this.heap[parent] < this.heap[index]) {
                this.swap(parent, index);
                index = parent;
            } else {
                break;
            }
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}