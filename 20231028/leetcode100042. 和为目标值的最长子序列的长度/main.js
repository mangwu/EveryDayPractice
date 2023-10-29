// 给你一个下标从 0 开始的整数数组 nums 和一个整数 target 。

// 返回和为 target 的 nums 子序列中，子序列 长度的最大值 。如果不存在和为 target 的子序列，返回 -1 。

// 子序列 指的是从原数组中删除一些或者不删除任何元素后，剩余元素保持原来的顺序构成的数组。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var lengthOfLongestSubsequence = function (nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const cache = new Array(n + 1)
    .fill(0)
    .map((v) => new Array(target + 1).fill(0));
  // 选择小的数越多，子序列越长
  // cur是当前和，num是选择的数量
  const dfs = (i, cur, num) => {
    if (cur > target) return -1;
    if (cur === target) {
      // 找到一个结果
      cache[i][cur] = Math.max(cache[i][cur], num);
      return cache[i][cur];
    }
    if (cache[i][cur] !== 0) {
      // 已经有结果了
      return cache[i][cur];
    }
    if (i === n) return -1;
    // 选择当前和不选择当前
    const res = Math.max(
      dfs(i + 1, cur + nums[i], num + 1),
      dfs(i + 1, cur, num)
    );
    cache[i][cur] = res;
    return res;
  };
  let ans = dfs(0, 0, 0);
  return ans;
};

const random = require("../../publicFunc/random/random");

console.log(lengthOfLongestSubsequence(random.randomArr(800, 1, 1000), 999));
