// 给定一个单词列表 words 和一个整数 k ，返回前 k 个出现次数最多的单词。

// 返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率， 按字典顺序 排序。

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const hash = new Map();
  for (const word of words) {
    hash.set(word, (hash.get(word) || 0) + 1);
  }
  const arr = [...hash].sort((a, b) =>
    b[1] !== a[1] ? b[1] - a[1] : a[0].localeCompare(b[0])
  );
  return arr.slice(0, k).map((v) => v[0]);
};
