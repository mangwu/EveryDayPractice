// 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

// 请你找出符合题意的 最短 子数组，并输出它的长度。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const sorted = nums.slice().sort((a, b) => a - b);
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left < n)
    if (sorted[left] === nums[left]) left++;
    else break;
  while (right >= left)
    if (sorted[right] === nums[right]) right--;
    else break;
  return right - left + 1;
};
