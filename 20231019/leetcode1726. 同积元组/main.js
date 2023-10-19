// 给你一个由 不同 正整数组成的数组 nums ，请你返回满足 a * b = c * d 的元组 (a, b, c, d) 的数量。其中 a、b、c 和 d 都是 nums 中的元素，且 a != b != c != d 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
  // 计算每个二元组的乘积
  const hash = new Map();
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const product = nums[i] * nums[j];
      hash.set(product, (hash.get(product) || 0) + 1);
    }
  }
  let ans = 0;
  for (const [key, m] of hash) {
    ans += 4 * (m - 1) * m;
  }
  return ans;
};
