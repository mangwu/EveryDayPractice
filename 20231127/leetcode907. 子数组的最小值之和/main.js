// 给定一个整数数组 arr，找到 min(b) 的总和，其中 b 的范围为 arr 的每个（连续）子数组。

// 由于答案可能很大，因此 返回答案模 10^9 + 7 。

const MOD = 10 ** 9 + 7;
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  // 子数组数量为 1 + 2 + 3 + ... + n
  const n = arr.length;
  // 一个金字塔的形状
  // 动态规划 + 单调栈
  let stack = [[arr[0], 1]];
  let sum = arr[0];
  let ans = arr[0];
  let len = 1;
  for (let i = 1; i < n; i++) {
    while (stack.length && stack[stack.length - 1][0] > arr[i]) {
      let pop = stack.pop();
      sum -= pop[0] * pop[1];
      len -= pop[1];
    }
    sum += arr[i] * (i + 1 - len);
    stack.push([arr[i], i + 1 - len]);
    ans += sum;
    ans %= MOD;
    len = i + 1;
  }
  return ans;
};

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  // 动态规划，求出前i个数组的结果dp[i]，
  // 第前i+1个数组的结果为dp[i] + 以arr[i+1]为最后一个元素的子数组的最小值之和
  // 以arr[i+1]为最后一个元素的子数组的最小值之和包括
  // arr[i+1]为最小值的后面k个子数组，以及
  // 前面的i+1 - k 个的子数组，它们可以通过动态规划过程中前面的结果获取
  const n = arr.length;
  let dp = arr[0]; // 上一个数组的结果
  let ans = arr[0];
  let len = 1;
  const stack = [[arr[0], 1]]; // [arr[i], length] length表示当前元素为最小值的个数
  for (let i = 1; i < n; i++) {
    while (stack.length && stack[stack.length - 1][0] > arr[i]) {
      const pop = stack.pop();
      dp -= pop[0] * pop[1]; // 这些元素
      len -= pop[1]; // 不以arr[i]为最小元素的前面元素个数
    }
    dp += arr[i] * (i + 1 - len); // 以arr[i+1]为最小值的后面k个子数组的最小值之和
    stack.push([arr[i], i + 1 - len]);
    ans += dp;
    ans %= MOD;
    len = i + 1;
  }
  return ans;
};
