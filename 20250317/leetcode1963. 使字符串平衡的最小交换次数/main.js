// 给你一个字符串 s ，下标从 0 开始 ，且长度为偶数 n 。字符串 恰好 由 n / 2 个开括号 '[' 和 n / 2 个闭括号 ']' 组成。

// 只有能满足下述所有条件的字符串才能称为 平衡字符串 ：

// 字符串是一个空字符串，或者
// 字符串可以记作 AB ，其中 A 和 B 都是 平衡字符串 ，或者
// 字符串可以写成 [C] ，其中 C 是一个 平衡字符串 。
// 你可以交换 任意 两个下标所对应的括号 任意 次数。

// 返回使 s 变成 平衡字符串 所需要的 最小 交换次数。

/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  // 使用栈，将已经匹配的进行消除
  const stack = [];
  for (const ch of s) {
    if (ch === "]" && stack.length && stack[stack.length - 1] === "[")
      stack.pop();
    else stack.push(ch);
  }
  return Math.floor((stack.length / 2 + 1) / 2);
};

// ]]][]][[][][][[[
// ]]]][[[[
// []]][[[]
// [][][][]
/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  // 使用栈，将已经匹配的进行消除
  let cnt = 0;
  let minCnt = 0;
  for (const ch of s) {
    if (ch === "[") cnt++;
    else {
      cnt--;
      minCnt = Math.min(cnt, minCnt);
    }
  }
  return Math.floor((1 - minCnt) / 2);
};
