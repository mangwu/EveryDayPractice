// 给你一个字符串 s 。

// 你的任务是重复以下操作删除 所有 数字字符：

// 删除 第一个数字字符 以及它左边 最近 的 非数字 字符。
// 请你返回删除所有数字字符以后剩下的字符串。

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  const arr = [];
  for (const ch of s) {
    if (isNaN(parseInt(ch))) arr.push(ch);
    else arr.pop();
  }
  return arr.join("");
};
  