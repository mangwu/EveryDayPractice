// 给你一个下标从 0 开始的二维整数数组 nums 。

// 返回位于 nums 至少一条 对角线 上的最大 质数 。如果任一对角线上均不存在质数，返回 0 。

// 注意：

// 如果某个整数大于 1 ，且不存在除 1 和自身之外的正整数因子，则认为该整数是一个质数。
// 如果存在整数 i ，使得 nums[i][i] = val 或者 nums[i][nums.length - i - 1]= val ，则认为整数 val 位于 nums 的一条对角线上。

// 在上图中，一条对角线是 [1,5,9] ，而另一条对角线是 [3,5,7] 。

/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
  const n = nums.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (isPrime(nums[i][i])) {
      res = Math.max(res, nums[i][i]);
    }
    if (isPrime(nums[i][n - i - 1])) {
      res = Math.max(res, nums[i][n - i - 1]);
    }
  }
  return res;
};

function isPrime(num) {
  const sqrtNum = Math.sqrt(num);
  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
