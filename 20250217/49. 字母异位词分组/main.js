// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hash = new Map();
  for (const str of strs) {
    const key = getAphlaCnt(str);
    const arr = hash.get(key) || [];
    arr.push(str);
    hash.set(key, arr);
  }
  return [...hash].map(([_key, value]) => value);
};

function getAphlaCnt(str) {
  const aphla = new Array(26).fill(0);
  for (const ch of str) {
    aphla[ch.charCodeAt() - "a".charCodeAt()]++;
  }
  return aphla.toString();
}
