// 给你一个整数数组 nums 和一个 非负 整数 k 。

// 一次操作中，你可以选择任一下标 i ，然后将 nums[i] 加 1 或者减 1 。

// 请你返回将 nums 中位数 变为 k 所需要的 最少 操作次数。

// 一个数组的 中位数 指的是数组按 非递减 顺序排序后最中间的元素。如果数组长度为偶数，我们选择中间两个数的较大值为中位数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperationsToMakeMedianK = function (nums, k) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let ans = 0;
  if (n % 2 === 1) {
    // 奇数
    let half = Math.floor(n / 2);
    if (k === nums[half]) return 0;
    else if (k > nums[half]) {
      for (let i = half; i < n; i++) {
        if (nums[i] < k) {
          ans += k - nums[i];
        } else break;
      }
    } else {
      for (let i = half; i >= 0; i--) {
        if (nums[i] > k) {
          ans += nums[i] - k;
        } else break;
      }
    }
  } else {
    // 偶数
    let lessHalf = n / 2 - 1;
    let moreHalf = n / 2;
    if (nums[moreHalf] === k) return 0;
    else if (k > nums[moreHalf]) {
      for (let i = moreHalf; i < n; i++) {
        if (nums[i] < k) {
          ans += k - nums[i];
        } else break;
      }
    } else if (k >= nums[lessHalf]) {
      return nums[moreHalf] - k;
    } else if (k < nums[lessHalf]) {
      for (let i = moreHalf; i >= 0; i--) {
        if (nums[i] > k) {
          ans += nums[i] - k;
        } else break;
      }
    }
  }
  return ans;
};

// 2 5 5 6 8
//
//
