// 给你两个整数数组 nums1 和 nums2。

// 从 nums1 中移除两个元素，并且所有其他元素都与变量 x 所表示的整数相加。如果 x 为负数，则表现为元素值的减少。

// 执行上述操作后，nums1 和 nums2 相等 。当两个数组中包含相同的整数，并且这些整数出现的频次相同时，两个数组 相等 。

// 返回能够实现数组相等的 最小 整数 x 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumAddedInteger = function (nums1, nums2) {
  const n = nums2.length;
  const m = nums1.length;
  const sum1 = nums1.reduce((a, b) => a + b);
  const sum2 = nums2.reduce((a, b) => a + b);
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let res = Infinity;
  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j < m; j++) {
      const numSum1 = sum1 - nums1[i] - nums1[j];
      const diffs = sum2 - numSum1;

      if (diffs % n === 0) {
        let left = 0;
        let right = 0;
        let diff = false;

        while (right < n) {
          while (left === i || left === j) left++;
          if (diff === false) {
            diff = nums2[right] - nums1[left];
          } else if (diff !== nums2[right] - nums1[left]) {
            diff = false;
            break;
          }
          left++;
          right++;
        }
        diff !== false && (res = Math.min(res, diffs / n));
      }
    }
  }
  return res;
};

// [10,2,8,7,5,6,7,10]
