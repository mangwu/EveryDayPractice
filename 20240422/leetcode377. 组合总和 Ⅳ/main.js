// 给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。

// 题目数据保证答案符合 32 位整数范围。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  // 顺序不同的序列被视作不同的组合。
  const caches = new Map();
  const dfs = (left) => {
    if (left < 0) return 0;
    if (left === 0) return 1;
    if (caches.has(left)) return caches.get(left);
    let res = 0;
    for (const num of nums) {
      res += dfs(left - num);
    }
    caches.set(left, res);
    return res;
  };
  return dfs(target);
};
