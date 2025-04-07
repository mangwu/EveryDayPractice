// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const n = nums.length;
  let sum = nums.reduce((a, b) => a + b);
  if (sum % 2 === 1) return false;
  nums.sort((a, b) => a - b);
  const cache = new Array(n).fill().map(() => new Array(sum / 2 + 1).fill(-1));
  const dfs = (i, rest) => {
    if (i === n) return rest === 0;
    if (rest < 0) return false;
    if (cache[i][rest] !== -1) return cache[i][rest];
    cache[i][rest] = dfs(i + 1, rest - nums[i]) || dfs(i + 1, rest);
    return cache[i][rest];
  };
  let res = dfs(0, sum / 2);
  return res;
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  // 动态规划解法
  const n = nums.length;
  const sum = nums.reduce((a, b) => a + b);
  const maxNum = Math.max.apply(null, nums);
  const target = Math.floor(sum / 2); // 需要求和的目标数
  if (sum % 2 === 1 || maxNum > target) return false;
  // dp[i][j]表示使用前i个元素，是否能选取和为j的情况
  const dp = new Array(n).fill(0).map(() => new Array(sum / 2 + 1).fill(false));
  // dp[i][0]都是true，因为可以都不选
  for (let i = 0; i < n; i++) dp[i][0] = true;
  // dp[0][nums[0]] 为true，选择第一个
  dp[0][nums[0]] = true;
  for (let i = 1; i < n; i++) {
    const num = nums[i];
    for (let j = 1; j <= target; j++) {
      // 不选取就是dp[i-1][j]
      dp[i][j] = dp[i - 1][j];
      // num小于等于j可以选取当前元素，那么就需要前i-1个组合成j - num的数
      if (j >= num) {
        dp[i][j] = dp[i][j] || dp[i - 1][j - num];
      }
    }
  }
  return dp[n - 1][target];
};
