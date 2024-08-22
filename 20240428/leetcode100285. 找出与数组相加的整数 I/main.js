// 给你两个长度相等的数组 nums1 和 nums2。

// 数组 nums1 中的每个元素都与变量 x 所表示的整数相加。如果 x 为负数，则表现为元素值的减少。

// 在与 x 相加后，nums1 和 nums2 相等 。当两个数组中包含相同的整数，并且这些整数出现的频次相同时，两个数组 相等 。

// 返回整数 x 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2) {
  const n = nums1.length;
  return (nums2.reduce((a, b) => a + b) - nums1.reduce((a, b) => a + b)) / n;
};
