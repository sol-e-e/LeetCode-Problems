class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEndOfWord = true;
    }

    search(word: string, dict: TrieNode = this.root): boolean {
        const chars = word.split('');
        const char = chars[0];

        if (!chars.length && dict.isEndOfWord) return true;

        if (char === '.') {
            for (let key of dict.children.keys()) {
                if (this.search(word.slice(1), dict.children.get(key))) return true;
            }

            return false;
        } else if (!dict.children.has(char)) {
            return false;
        }
    
        return this.search(word.slice(1), dict.children.get(char));
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */