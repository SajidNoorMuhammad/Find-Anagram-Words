
const words = ["bat", "tap", "cat", "tab", "pat"];

function detectAnagrams(words) {
    const anagrams = {};
    for (const word of words) {
        const sortedWord = [...word].sort().join('');
        if (sortedWord in anagrams) {
            anagrams[sortedWord].push(word);
        } else {
            anagrams[sortedWord] = [word];
        }
    }
    return Object.values(anagrams);
}

console.log(detectAnagrams(words));