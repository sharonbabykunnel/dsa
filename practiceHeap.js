class MinHeap{
    constructor() {
        this.heap = [];
    }

    build(arr) {
        this.heap = [...arr];
        for (let i = Math.floor((arr.length - 1) / 2); i >= 0; i--){
            this.heapify(i);
        }
    }

    heapify(index) {
        while (index > 0) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let small = index;
            if (left < this.heap.length && this.heap[left] < this.heap[small]) small = left;
            if (right < this.heap.length && this.heap[right] < this.heap[small]) small = right;
            if (small !== index) {
                this.swap(small, index);
                this.heapify(small);
            }
        }
    }

    insert(value) {
        this.heap.push(value);
        this.bubble(this.heap.length - 1);
    }

    bubble(index) {
        while (index > 0) {
        let parent = Math.floor((index - 1) / 2);
        if (this.heap[index] < this.heap[parent]) {
            this.swap(parent, index);
            index = parent;
        } else {
            break;
        }
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] =[this.heap[j], this.heap[i]];
    }

    delete(value) {
        const index = this.heap.indexOf(value);
        if (index === -1) {
            return false;
        }

        this.swap(index, this.heap.length - 1)
        this.heap.pop();
        this.heapify(index)
    }

}