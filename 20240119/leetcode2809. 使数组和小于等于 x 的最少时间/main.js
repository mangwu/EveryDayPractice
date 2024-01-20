// 给你两个长度相等下标从 0 开始的整数数组 nums1 和 nums2 。每一秒，对于所有下标 0 <= i < nums1.length ，nums1[i] 的值都增加 nums2[i] 。操作 完成后 ，你可以进行如下操作：

// 选择任一满足 0 <= i < nums1.length 的下标 i ，并使 nums1[i] = 0 。
// 同时给你一个整数 x 。

// 请你返回使 nums1 中所有元素之和 小于等于 x 所需要的 最少 时间，如果无法实现，那么返回 -1 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} x
 * @return {number}
 */
var minimumTime = function (nums1, nums2, x) {
  // 如果nums2减去最大值的和值都大于x，无论多少秒，最终操作一定大于x
  const sum2 =
    nums2.reduce((pre, cur) => pre + cur, 0) - Math.max.apply(null, nums2);
  if (sum2 > x) return -1;
};

// 1 2 3
// 1 2 3

// 2 4 0  6 - 6 => 0
// 3 0 3  6 - 6 => 0
// 4 2 0  6 - 6 => 0
// 0 4 3  6 - 5 => 1
// 1 0 6  6 - 6 => 0
// 2 2 0  6 - 9 => -3

// 1 2 3 5
// 1 2 3 1
// 7 - 6 => 1

// 2 4 6 0
// 3 6 0 1

// 7 - 9 => -2
