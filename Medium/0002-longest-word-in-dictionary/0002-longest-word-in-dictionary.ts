function longestWord(words: string[]): string {
    let answer = '';
    const trie = new Trie();
    
    for (const word of words) {
        trie.insert(word);
    }

    function dfs(node: TrieNode, current: string) {
        if (!node.isEndOfWord && current.length > 0) {
            return;
        }

        if (current.length > answer.length || 
        (current.length === answer.length && current < answer)) {
            answer = current;
        }

        for (const [ch, childNode] of node.children) {
            dfs(childNode, current + ch);
        }
    }

    dfs(trie.root, "");

    return answer;
};

class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;
    
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }

    insert
}

class Trie {
    root: TrieNode;
    
    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let current = this.root;
        for (const ch of word) {
            if (!current.children.has(ch)) {
                current.children.set(ch, new TrieNode());
            }
            current = current.children.get(ch);
        }
        current.isEndOfWord = true;
    }
}