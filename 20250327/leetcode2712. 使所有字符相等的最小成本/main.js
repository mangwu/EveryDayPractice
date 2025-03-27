// 给你一个下标从 0 开始、长度为 n 的二进制字符串 s ，你可以对其执行两种操作：

// 选中一个下标 i 并且反转从下标 0 到下标 i（包括下标 0 和下标 i ）的所有字符，成本为 i + 1 。
// 选中一个下标 i 并且反转从下标 i 到下标 n - 1（包括下标 i 和下标 n - 1 ）的所有字符，成本为 n - i 。
// 返回使字符串内所有字符 相等 需要的 最小成本 。

// 反转 字符意味着：如果原来的值是 '0' ，则反转后值变为 '1' ，反之亦然。

/**
 * @param {string} s
 * @return {number}
 */
var minimumCost = function (s) {
  const n = s.length;
  const suffix = new Array(n + 1).fill(0).map((_v) => new Array(2).fill(0));
  // suffix[i][0] 是i-n-1变成0的成本
  // suffix[i][1] 是i-n-1变成1的成本
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === "0") {
      // 全变成0
      suffix[i][0] = suffix[i + 1][0];
      // 全变成1
      suffix[i][1] = suffix[i + 1][0] + n - i;
    } else {
      // 全变成1
      suffix[i][1] = suffix[i + 1][1];
      // 全变成0
      suffix[i][0] = suffix[i + 1][1] + n - i;
    }
  }
  let pre0 = 0;
  let pre1 = 0;
  let res = Math.min(suffix[0][0], suffix[0][1]);
  for (let i = 0; i < n; i++) {
    if (s[i] === "0") {
      // pre0不变
      // 全部变成1
      pre1 = pre0 + i + 1;
    } else {
      // pre1不变
      pre0 = pre1 + i + 1;
    }
    res = Math.min(pre0 + suffix[i + 1][0], pre1 + suffix[i + 1][1]);
  }
  return res;
};

// 010101 => 全变成0
// 001010 => 5
// 000101 => 4

/**
 * @param {string} s
 * @return {number}
 */
var minimumCost = function (s) {
  // 只要两个相邻的左右字符不同，就需要将左子字符串，或者右字符串翻转一次
  // 因为这种翻转不会影响到其它字符串的相邻关系（不同的还是不同，相同的还是相同）
  // 所以进行操作的次数就是相邻字符不同的相邻对数
  // 每对选择左字符串或者右子字符串短的即可
  const n = s.length;
  let res = 0;
  for (let i = 1; i < n; i++) {
    if (s[i] !== s[i - 1]) {
      res += Math.min(i, n - i);
    }
  }
  return res;
};
