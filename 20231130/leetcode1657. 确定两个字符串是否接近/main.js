// 如果可以使用以下操作从一个字符串得到另一个字符串，则认为两个字符串 接近 ：

// 操作 1：交换任意两个 现有 字符。
// 例如，abcde -> aecdb
// 操作 2：将一个 现有 字符的每次出现转换为另一个 现有 字符，并对另一个字符执行相同的操作。
// 例如，aacabb -> bbcbaa（所有 a 转化为 b ，而所有的 b 转换为 a ）
// 你可以根据需要对任意一个字符串多次使用这两种操作。

// 给你两个字符串，word1 和 word2 。如果 word1 和 word2 接近 ，就返回 true ；否则，返回 false 。

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  if (m !== n) return false;
  const hash1 = new Map();
  const hash2 = new Map();
  for (const ch of word1) hash1.set(ch, (hash1.get(ch) | 0) + 1);
  for (const ch of word2) hash2.set(ch, (hash2.get(ch) | 0) + 1);
  if (hash1.size !== hash2.size) return false;
  const arr1 = [];
  const arr2 = [];
  for (const [key, value] of hash1) {
    if (!hash2.has(key)) return false;
    arr1.push(value);
    arr2.push(hash2.get(key));
  }
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  const l = arr1.length;
  for (let i = 0; i < l; i++) if (arr1[i] !== arr2[i]) return false;
  return true;
};
