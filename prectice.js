class Node{
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    appendChild(value) {
        const node = new Node(value)
        this.children.push(node);
    }
}

class Tree{
    constructor(value) {
        this.root = new Node(value);
    }

    isEmpty() {
        return this.root === null;
    }

    traversalDF() {
        let node = this.root;
        function traversal(node) {
            console.log(node.value);
            node.children.forEach(child => traversal(child));
        }
        traversal(node);
    }

    traversalBF() {
        let queue = [this.root];
        while (queue.length > 0) {
            let node = queue.shift();
            console.log(node.value);
            node.children.forEach(child => queue.push(child));
        }
    }

}

