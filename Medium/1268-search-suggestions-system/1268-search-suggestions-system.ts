class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEndOfWord = true;
    }

     findWordsWithPrefix(prefix: string): string[] {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children.has(char)) return [];
            node = node.children.get(char)!;
        }
        return this.collectWords(node, prefix);
     }

     private collectWords(node: TrieNode, prefix: string): string[] {
        let words: string[] = [];
        if (node.isEndOfWord) words.push(prefix);

        for (const [char, childNode] of node.children.entries()) {
            words = words.concat(this.collectWords(childNode, prefix + char));
        }
        return words;
     }
}

function suggestedProducts(products: string[], searchWord: string): string[][] {
    let result: string[][] = [];
    products.sort();
    const trie = new Trie();
    for (const product of products) {
        trie.insert(product);
    }
    let prefix = '';
    for (const str of searchWord) {
        prefix += str;
        result.push(trie.findWordsWithPrefix(prefix).slice(0, 3));
    }
    
    return result;
};