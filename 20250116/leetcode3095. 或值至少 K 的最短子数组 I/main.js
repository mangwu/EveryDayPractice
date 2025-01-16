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
  // 滑动窗口
  const n = nums.length;
  const bits = new Array(6).fill(0);
  let right = 0;
  let res = Infinity;
  for (let i = 0; i < n; i++) {
    while (right < n && (getBitsNum(bits) < k || right === i)) {
      let num = nums[right++];
      for (let i = 0; i < 6; i++) {
        if (((num >> i) & 1) === 1) {
          bits[i]++;
        }
      }
    }
    if (getBitsNum(bits) >= k) res = Math.min(res, right - i);
    else break;
    let num = nums[i];
    for (let i = 0; i < 6; i++) {
      if (((num >> i) & 1) === 1) {
        bits[i]--;
      }
    }
  }
  return res == Infinity ? -1 : res;
};

function getBitsNum(bits) {
  const n = bits.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (bits[i]) res += 2 ** i;
  }
  return res;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
  const n = nums.length;
  // 暴力解法
  let res = Infinity;
  for (let i = 0; i < n; i++) {
    let curOrSum = nums[i];
    if (curOrSum >= k) return 1;
    for (let j = i + 1; j < n; j++) {
      curOrSum = curOrSum || nums[j];
      if (curOrSum >= k) {
        res = Math.min(res, j - i + 1);
        break;
      }
    }
  }
  return res == Infinity ? -1 : res;
};
