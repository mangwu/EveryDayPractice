// 给你一个下标从 0 开始长度为 n 的整数数组 nums 和一个整数 k 。每一次操作中，你可以选择一个数并将它乘 2 。

// 你最多可以进行 k 次操作，请你返回 nums[0] | nums[1] | ... | nums[n - 1] 的最大值。

// a | b 表示两个整数 a 和 b 的 按位或 运算。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumOr = function (nums, k) {
  const n = nums.length;
  // 必定只有一个数会被连续左移k位
  // 遍历nums，将其中一个数左移k位，前缀或可以在遍历过程中得知，后缀或使用后缀和的方式存储在数组中
  const suffix = new Array(n + 1).fill(0n);
  for (let i = n - 1; i >= 0; i--) {
    suffix[i] = suffix[i + 1] | BigInt(nums[i]);
  }
  let pre = 0n;
  let res = 0;
  const mutil = BigInt(2 ** k);
  for (let i = 0; i < n; i++) {
    let cur = (mutil * BigInt(nums[i])) | suffix[i + 1] | pre;
    res = Math.max(res, Number(cur));
    pre = pre | BigInt(nums[i]);
  }
  return res;
};

// 12 => 1100   => 11000
// 9  => 1001   => 10010
//
