function spellchecker(wordlist: string[], queries: string[]): string[] {
  const result = [];
  const exact = new Set(wordlist);
  const map = new Map<string, string>();
  const words: Record<string, string> = {};

  for (let word of wordlist) {
    const lower = word.toLowerCase();
    if (!words[lower]) words[lower] = word;
    const vowel = lower.replace(/a|e|i|o|u/gi, '#');
    if (!words[vowel]) words[vowel] = word;
  }

  for (let query of queries) {
    if (exact.has(query)) {
        result.push(query);
        continue;
    }

    const lower = query.toLowerCase();
    if (words[lower]) {
        result.push(words[lower]);
        continue;
    } 

    const vowel = lower.replace(/a|e|i|o|u/gi, '#');
    result.push(words[vowel] ?? "");
  }

  return result;
};