/**
Problem Statement

Given an array of strings words, return true if you can make all strings equal 
in words array by performing any number of swap operations. Otherwise, return false.

In one swap operation, you can pick any two indices i and j, and move any characters from words[i] to any position of the words[j].
Examples

  Example 1:
    Input: words = ["aaa","bbb","ccc", "abc"]
    Expected Output: true
    Justification: Each string has 3 characters of a single type, 
    and the last string has all 3 characters. We can redistribute the characters to form 
    a string like "abc" making the distribution equal.

  Example 2:
    Input: words = ["ab","bc","cd","de","ea"]
    Expected Output: false
    Justification: The characters cannot be redistributed to make all strings equal because
    all characters appear only twice, making equal distribution impossible.

  Example 3:
    Input: words = ["zzx","xzz","zxz"]
    Expected Output: true
    Justification: We can redistribute characters to have each string contain one "x" and two "z"s, 
    like "zzx", "xzz", "zxz", maintaining equal distribution.
*/

function canRedistributeToMakeEqual(words: string[]): boolean {
  const charCount: Map<string, number> = new Map();
  const numStrings = words.length;

  // Count total occurrences of each character across all strings
  for (const word of words) {
    for (const char of word) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  }

  // Check if each character's total count is divisible by the number of strings
  for (const count of charCount.values()) {
    if (count % numStrings !== 0) {
      return false;
    }
  }

  return true;
}

export { canRedistributeToMakeEqual };