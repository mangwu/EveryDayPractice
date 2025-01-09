// 给你一个长度为 n 的数组 words ，该数组由 非空 字符串组成。

// 定义字符串 term 的 分数 等于以 term 作为 前缀 的 words[i] 的数目。

// 例如，如果 words = ["a", "ab", "abc", "cab"] ，那么 "ab" 的分数是 2 ，因为 "ab" 是 "ab" 和 "abc" 的一个前缀。
// 返回一个长度为 n 的数组 answer ，其中 answer[i] 是 words[i] 的每个非空前缀的分数 总和 。

// 注意：字符串视作它自身的一个前缀。

// 字典树变体
class Trie {
  constructor() {
    this.children = new Array(26).fill(null);
    this.isEnd = false;
    this.num = 0; // 以当前节点结束的字符串前缀的word个数
  }
  insert(word) {
    let node = this;
    for (const ch of word) {
      const code = ch.charCodeAt() - "a".charCodeAt();
      if (node.children[code] === null) node.children[code] = new Trie();
      node = node.children[code];
      node.num++;
    }
    node.isEnd = true;
  }
}

/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function (words) {
  const trie = new Trie();
  for (const word of words) trie.insert(word);
  const res = [];
  for (const word of words) {
    let sum = 0;
    let node = trie;
    for (const ch of word) {
      const code = ch.charCodeAt() - "a".charCodeAt();
      node = node.children[code];
      sum += node.num;
    }
    res.push(sum);
  }
  return res;
};
