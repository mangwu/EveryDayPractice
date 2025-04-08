// 给你一个整数数组 nums，你需要确保数组中的元素 互不相同 。为此，你可以执行以下操作任意次：

// 从数组的开头移除 3 个元素。如果数组中元素少于 3 个，则移除所有剩余元素。
// 注意：空数组也视作为数组元素互不相同。返回使数组元素互不相同所需的 最少操作次数 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const set = new Set();
  const n = nums.length;
  for (let i = n - 1; i >= 0; i--) {
    if (set.has(nums[i])) {
      return Math.ceil((i + 1) / 3);
    }
    set.add(nums[i]);
  }
  return 0;
};
