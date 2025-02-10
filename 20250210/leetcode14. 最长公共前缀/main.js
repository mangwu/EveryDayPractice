// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = strs[0].split("");
  const n = strs.length;
  for (let i = 1; i < n; i++) {
    const str = strs[i];
    const m = str.length;
    const newRes = [];
    for (let j = 0; j < m; j++) {
      if (j < res.length && res[j] === str[j]) {
        newRes.push(res[j]);
        continue;
      } else break;
    }
    res = newRes;
  }
  return res.join("");
};
