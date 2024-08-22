// 给定字符串列表 strs ，返回其中 最长的特殊序列 的长度。如果最长特殊序列不存在，返回 -1 。

// 特殊序列 定义如下：该序列为某字符串 独有的子序列（即不能是其他字符串的子序列）。

//  s 的 子序列可以通过删去字符串 s 中的某些字符实现。

// 例如，"abc" 是 "aebdc" 的子序列，因为您可以删除"aebdc"中的下划线字符来得到 "abc" 。"aebdc"的子序列还包括"aebdc"、 "aeb" 和 "" (空字符串)。

/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  const n = strs.length;
  if (n === 1) return strs[0].length;
  strs.sort((a, b) =>
    b.length - a.length !== 0
      ? b.length - a.length
      : a > b
      ? -1
      : a === b
      ? 0
      : 1
  );
  let parentStrStack = [];
  for (let i = 0; i < n; i++) {
    // 获取当前长度相等的字符串
    let curLen = strs[i].length;
    let start = i;
    let isSame = true; // 是否存在不同的字符串
    while (i < n && strs[i].length === curLen) {
      if (strs[i] !== strs[start]) isSame = false;
      i++;
    }
    i--;
    // [start, i]是长度相等的字符串
    if (!parentStrStack.length) {
      // 最长字符串只有一个的情况
      if (start === i) return curLen;
      // 最长字符串有多个，且有不相等的情况
      if (!isSame) return curLen;
      parentStrStack.push(strs[start]); // 作为存疑的父序列
    } else {
      if (start === i) {
        // 只有一个的情况，如果存在一个父序列
        if (
          parentStrStack.some((parentStr) => !isSonSeq(strs[start], parentStr))
        ) {
          continue;
        }
        return curLen;
      }
      // 有多个，且相等的情况
      if (isSame) {
        if (
          // 存在父序列
          parentStrStack.some((parentStr) => !isSonSeq(strs[start], parentStr))
        ) {
          continue;
        }
        // 新序列
        stack.push(strs[start]);
        continue;
      }
      // 有多个，不相同
      // 判断当前所有字符串是否是parentStr的子序列
      const filterHash = new Map();
      for (let j = start; j <= i; j++) {
        if (!parentStrStack.some((parentStr) => isSonSeq(strs[j], parentStr))) {
          filterHash.set(strs[j], (filterHash.get(strs[j]) | 0) + 1);
        }
      }
      console.log(filterHash, parentStrStack);
      for (const [str, num] of filterHash) {
        if (num === 1) return str.length;
        parentStrStack.push(str);
      }
    }
  }
  return -1;
};
/**
 * @description str1是否是str2的子序列
 * @param {string} str1 存疑子序列
 * @param {string} str2 存疑父序列
 * @returns {boolean}
 */
function isSonSeq(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  let i = 0;
  let j = 0;
  while (i < m) {
    while (j < n && str2[j] !== str1[i]) {
      j++;
    }
    if (str2[j] === str1[i]) j++;
    else return false;
    i++;
  }
  return i === m;
}

/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  const n = strs.length;
  if (n === 1) return strs[0].length;
  let res = -1;
  for (let i = 0; i < n; i++) {
    let hasParentSeq = false;
    for (let j = 0; j < n; j++) {
      if (i !== j) hasParentSeq |= isSonSeq(strs[i], strs[j]);
    }
    if (!hasParentSeq) res = Math.max(res, strs[i].length);
  }
  return res;
};
