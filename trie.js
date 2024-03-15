class Node{
    constructor() {
        this.value = {}
        this.endOfWord = false;
    }
}

class Trie{
    constructor() {
        this.root = new Node();
    }

    set(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.value[char]) {
                node.value[char] = new Node();
            }
            node = node.value[char];
        }
        node.endOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.value[char]) {
                return false;
            }
            node = node.value[char];
        }
        return node.endOfWord;
    }

    startWith(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.value[char]) {
                return false;
            }
            node = node.value[char];
        }
        return true;
    }

    delete(word) {
        function deleteWord(word, index, node) {
            if (index === word.length) {
                node.endOfWord = false;
                return Object.keys(node).length === 0;
            }

            const char = word[index];
            if (node[char] && deleteWord(word, index + 1, node[char])) {
                delete node[char];
                return Object.keys(node).length === 0;
            }
        }
        deleteWord(word, 0, this.root);
    }
}