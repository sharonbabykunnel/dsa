class Heap{
    constructor() {
        this.heap = [];
    }

    insert(value) {
        if (heap.length < 1) {
            this.heap.push(value)
        } else {
            this.heap.push(value);
            this.heapify(this.haep.length - 1)
        }
    }

    buildHeap(arr) {
        this.heap = [...arr];
        for (let i = Math.floor(this.heap.length - 1)/2; i >= 0; i--){
            this.bubble(i);
        }
    }

    bubble(index) {
        let left = index * 2 + 1;
        let right = index * 2 + 2;
        let small = index;
        if (left < this.heap.length && this.heap[left] < this.heap[small]) {
            small = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[small]) {
            small = right;
        }
        if (small !== index) {
            this.swap(index, small);
            this.bubble(small);
        }
    }

    heapify(i) {
        while (i > 0) {
            let parent = (i - 1) / 2;
            if (this.heap[parent] > this.heap[i]) {
                this.swap(i, parent);
                i = parent;
            } else {
                break
            }
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}