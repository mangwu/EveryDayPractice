// 给你一个 二进制 字符串 s ，其中至少包含一个 '1' 。

// 你必须按某种方式 重新排列 字符串中的位，使得到的二进制数字是可以由该组合生成的 最大二进制奇数 。

// 以字符串形式，表示并返回可以由给定组合生成的最大二进制奇数。

// 注意 返回的结果字符串 可以 含前导零。

/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  // 其中一个1在最后，其它的往前靠
  const arr = new Array(2).fill(0);
  for (const ch of s) {
    arr[ch]++;
  }
  return "1".repeat(arr[1] - 1) + "0".repeat(arr[0]) + "1";
};
