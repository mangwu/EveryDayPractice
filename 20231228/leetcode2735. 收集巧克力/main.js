// 给你一个长度为 n 、下标从 0 开始的整数数组 nums ，表示收集不同巧克力的成本。每个巧克力都对应一个不同的类型，最初，位于下标 i 的巧克力就对应第 i 个类型。

// 在一步操作中，你可以用成本 x 执行下述行为：

// 同时修改所有巧克力的类型，将巧克力的类型 ith 修改为类型 ((i + 1) mod n)th。
// 假设你可以执行任意次操作，请返回收集所有类型巧克力所需的最小成本。

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minCost = function (nums, x) {
  // 最大操作次数可以进行记录，因为nums的长度为1000，所以本题可以用O(n^2)的解法
  // 对于每i类型的巧克力，通过贪心找出每个的最小成本，并记录最大操作次数
  const n = nums.length;
  let res = 0;
  let maxOps = 0;
  for (let i = 0; i < n; i++) {
    let ops = 0;
    let cost = nums[i];
    for (let j = 0; j < n; j++) {
      // 找到最小成本
      if (j < i) {
        const curCost = nums[j] + x * (i - j);
        if (curCost < cost) {
          ops = i - j;
          cost = curCost;
        }
      } else if (j > i) {
        const curCost = nums[j] + x * (n - j + i);
        if (curCost < cost) {
          ops = n - j + i;
          cost = curCost;
        }
      }
    }
    res += cost - ops * x;
    maxOps = Math.max(maxOps, ops);
  }
  return res + maxOps * x;
};

// [20,1,15,99,1,42,3,2,15]  10
// 20 + 1 + 1 + 1 + 1 + 1 + 3 + 2 + 2
// 2
// 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 2
// 2
// 上述解答错误，因为未完全贪心，在已有操作情况下，仍然选择了非最小值

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minCost = function (nums, x) {
  const n = nums.length;
  let res = nums.reduce((a, b) => a + b);
  // 移动次数最多为n-1次，第n次会回到初始情况
  let k = n;
  const copy = nums.slice();
  while (k > 0) {
    k--;
    let cur = (n - k) * x;
    for (let i = 0; i < n; i++) {
      let pre = (i + k) % n;
      copy[i] = Math.min(copy[i], nums[pre]);
      cur += copy[i];
    }
    res = Math.min(res, cur);
  }
  return res;
};

// [20,1,15,99,1,42,3,2,15]
// 15 1 1 15 1 1 3 2 2
// 2  1 1 1 1 1 1 2 2
