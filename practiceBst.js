class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        if (this.isEmpty()) {
            this.root = new Node(value);
        } else {
            const node = new Node(value)
            this.insertValue(this.root,node);
        }
    }

    insertValue(root,node) {
        if (root.value > node) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertValue(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertValue(root.right, node);
            }
        }
    }

    search(value) {
        return this.searchValue(this.root, value);
    }

    searchValue(root, value) {
        if (root === null || root.value === value) {
            return root;
        }
        if (root.value > value) {
            return this.searchValue(root.left,value)
        } else if (root.value < value) {
            return this.searchValue(root.right,value)
        }
    }

    delete(value) {
        this.root = this.deleteValue(this.root, value);
    }

    deleteValue(root, value) {
        if (root === null) {
            return root;
        } else {
            if (root.value > value) {
                return this.deleteValue(root.left, value);
            } else if (root.value < value) {
                return this.deleteValue(root.right,value);
            } else {
                if (!root.left) {
                    return root.right;
                } else if (!root.right) {
                    return root.left;
                } else {
                    root.value = this.min(root.right).value;
                    root.right = this.deleteValue(root.right, root.value);
                }
                return root;
            }
        }
    }

    preorder(node) {
        if (node) {
            console.log(node.value);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    inorder(node) {
        if (node) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }

    postorder(node) {
        if (node) {
            this.right(node.left);
            this.right(node.right);
            console.log(node.value);
        }
    }

    bfs() {
        let queue = [this.root];
        while (queue.length > 0) {
            let node = queue.shift();
            console.log(node.value);
            if (node.left) {
                queue.push(node.lefft);
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }

    min(root) {
        while (root.left) {
            root = root.left;
        }
        return root;
    }

    max(root) {
        while (root.right) {
            root = root.right;
        }
        return root;
    }
}