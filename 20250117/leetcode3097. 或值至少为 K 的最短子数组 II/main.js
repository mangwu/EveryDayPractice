// 给你一个 非负 整数数组 nums 和一个整数 k 。

// 如果一个数组中所有元素的按位或运算 OR 的值 至少 为 k ，那么我们称这个数组是 特别的 。

// 请你返回 nums 中 最短特别非空
// 子数组
// 的长度，如果特别子数组不存在，那么返回 -1 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
  const bits = new Array(30).fill(0);
  let left = 0;
  let right = 0;
  const n = nums.length;
  let res = n + 1;
  while (left < n) {
    while (left === right || (right < n && getBitsNum(bits) < k)) {
      let num = nums[right++];
      for (let i = 0; i < 30; i++) {
        if (((num >> i) & 1) === 1) {
          bits[i]++;
        }
      }
    }
    if (getBitsNum(bits) >= k) res = Math.min(res, right - left);
    else break;
    let num = nums[left++];
    for (let i = 0; i < 30; i++) {
      if (((num >> i) & 1) === 1) {
        bits[i]--;
      }
    }
  }
  return res === n + 1 ? -1 : res;
};
/**
 * @description
 * @param {number[]} bits
 * @returns {number}
 */
function getBitsNum(bits) {
  let res = 0;
  for (let i = 0; i < 30; i++) {
    if (bits[i]) res += 1 << i;
  }
  return res;
}
