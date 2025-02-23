// 给定字符串列表 strs ，返回其中 最长的特殊序列 的长度。如果最长特殊序列不存在，返回 -1 。

// 特殊序列 定义如下：该序列为某字符串 独有的子序列（即不能是其他字符串的子序列）。

//  s 的 子序列可以通过删去字符串 s 中的某些字符实现。

// 例如，"abc" 是 "aebdc" 的子序列，因为您可以删除"aebdc"中的下划线字符来得到 "abc" 。"aebdc"的子序列还包括"aebdc"、 "aeb" 和 "" (空字符串)。

/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  const hash = new Map();
  const dfs = (i, str, pre, set) => {
    if (i === str.length) {
      set.add(pre);
      return;
    }
    // 选择下一个字符串
    dfs(i + 1, str, pre + str[i], set);
    // 不选择
    dfs(i + 1, str, pre, set);
  };
  for (const str of strs) {
    const set = new Set();
    dfs(0, str, "", set);
    for (const item of set) {
      hash.set(item, (hash.get(item) || 0) + 1);
    }
  }
  let res = -1;
  for (const [key, value] of hash) {
    if (value === 1) res = Math.max(res, key.length);
  }
  return res ? res : -1;
};

/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  const n = strs.length;
  let ans = -1;
  for (let i = 0; i < n; i++) {
    let check = true;
    for (let j = 0; j < n; j++) {
      if (i !== j && isSubseq(strs[i], strs[j])) {
        check = false;
        break;
      }
    }
    if (check) {
      ans = Math.max(ans, strs[i].length);
    }
  }
  return ans;
};

/**
 * @description t是否是s的子序列
 * @param {string} s
 * @param {string} t
 */
function isSubseq(s, t) {
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
      j++;
    } else j++;
  }
  return i === s.length;
}
