class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class bst{
    constructor(){
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.root = node;
        } else {
            this.insertValue(this.root, node);
        }
    }

    insertValue(root, node) {
        if (root.value > node.value) {
            if (root.left === null) {
                root.left = node;
            }else{
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
        if (!root || root.value === value) {
            return root;
        } else {
            if (value < root.value) {
                return this.searchValue(root.left, value);
            } else {
                return this.searchValue(root.right, value);
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
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.value);
        }
    }

    breadthFS(root) {
        if (root === null) {
            return false;
        }
        let queue = [root];
        while (queue.length > 0) {
            let node = queue.shift()
            console.log(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    min(root) {
        while (root.left) {
            root = root.left
        }
        return root.value;
    }

    max(root) {
        while (root.right) {
            root = root.right;
        }
        return root.value;
    }

    delete(value) {
        this.root = this.deleteValue(this.root, value);
    }

    deleteValue(root, value) {
        if (!root) {
            return root;
        } else {
            if (value < root.value) {
                root.left = this.deleteValue(root.left, value);
            } else if(value > root.value) {
                root.right = this.deleteValue(root.right, value);
            } else {
                if (!root.left && !root.right) {
                   return root = null
                }
                if (!root.left) {
                    return root = root.right;
                }else if (!root.right) {
                    return root = root.left;
                } else {
                    root.value = this.min(root.right)
                    root.right = this.deleteValue(root.right,root.value)
                }
            }
        }
        return root;
    }
}