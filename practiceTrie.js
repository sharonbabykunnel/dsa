class Trie{
    constructor() {
        this.root = {}
        this.isEnd = false;
    }

    set(word) {
        let node = this.root
        for(const char of word){
            if (!node[char]) {
                node[char] = {}
            }
            node = node[char];
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node[char]) {
                return false;
            }
            node = node[char];
        }
        return node.isEnd;
    }

    startWith(word) {
        let node = this.root;
        for (const char of word) {
            if (!node[char]) {
                return false
            }
            node = node[char];
        }
        return true;
    }

    remove(word) {
        function removeChar(node, word, index) {
            if (index === word.length) {
                node.isEnd = false;
                return Object.keys(node).length === 0;
            }

            const char = word[index]
            if (node[char] && removeChar(node[char]), word, index + 1) {
                delete node[char];
                return Object.keys(node).length === 0;
            }
            return false;
        }
        removeChar(this.root, word, 0);
    }
}