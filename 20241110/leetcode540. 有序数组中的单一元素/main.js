// 给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。

// 请你找出并返回只出现一次的那个数。

// 你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  return nums.reduce((a, b) => a ^ b);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  // 二分查找
  let left = 0;
  const n = nums.length;
  let right = n - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if(nums[mid] !== nums[mid-1] && nums[mid] !== nums[mid+1]) return nums[mid];
    else if(nums[mid] === numd)
  }
};
