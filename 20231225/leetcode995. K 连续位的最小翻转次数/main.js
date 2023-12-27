// 给定一个二进制数组 nums 和一个整数 k 。

// k位翻转 就是从 nums 中选择一个长度为 k 的 子数组 ，同时把子数组中的每一个 0 都改成 1 ，把子数组中的每一个 1 都改成 0 。

// 返回数组中不存在 0 所需的最小 k位翻转 次数。如果不可能，则返回 -1 。

// 子数组 是数组的 连续 部分。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function (nums, k) {
  if (k === 1) {
    // 直接返回0的数量
    return nums.reduce((pre, cur) => (cur === 0 ? ++pre : pre), 0);
  }
  // 一个子数组的翻转2次后，相当于没有进行任何操作
  // 所以一个子数组最多翻转1次，或者不翻转
  // 其次，对于任意次翻转操作而言，其操作的顺序不会影响最终的翻转结果
  // 所以我们可以按顺序遍历nums，遇到nums[i] = 0 就在i处进行一次实时翻转
  // ，然后继续遍历，重复上述操作，这样也保证了每个子数组最多翻转一次
  // 如果最终的翻转结果是nums中的元素全为1，则可以成功翻转，返回翻转次数
  // 否则无法翻转成功
  let sum = 0; // 差分数组的前缀和，表示当前数位被翻转的次数
  const n = nums.length;
  const diff = new Array(n + 1).fill(0);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    sum += diff[i];
    if ((nums[i] + sum) % 2 === 0) {
      // 进行翻转，其中sum是前面进行的影响到了当前数位的翻转次数
      if (i + k > n) return -1; // 不存在子数组翻转
      // 能翻转，记录对后续翻转的影响
      ans++;
      sum++; // 实时记录差分数组的前缀和
      diff[i + k]--;
    }
  }
  return ans;
};

// 01100011
// 11000011

// 010111011000
// 101011011101
// 110101011101
// 111010011101
// 111101111101
// 111110001101
// 111111110101

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function (nums, k) {
  if (k === 1) {
    // 直接返回0的数量
    return nums.reduce((pre, cur) => (cur === 0 ? ++pre : pre), 0);
  }
  // 利用原本数组中的元素记录是否进行了翻转差分记录
  let sum = 0; // 差分数组的前缀和，表示当前数位被翻转的次数
  const n = nums.length;
  let ans = 0;
  let flag = false;
  for (let i = 0; i < n; i++) {
    if (nums[i - k] > 1) {
      sum--;
      nums[i - k] -= 2; // 还原数组
    }
    if (flag) continue;
    if ((nums[i] + sum) % 2 === 0) {
      // 进行翻转，其中sum是前面进行的影响到了当前数位的翻转次数
      if (i + k > n) {
        // 没有结果，但是仍然要还原数组，所以要继续遍历
        flag = true;
        continue;
      }
      // 能翻转，记录对后续翻转的影响
      ans++;
      sum++; // 实时记录差分数组的前缀和
      nums[i] += 2; // 记录差分
    }
  }
  return flag ? -1 : ans;
};
