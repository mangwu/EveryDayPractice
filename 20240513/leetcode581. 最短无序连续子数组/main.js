// 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

// 请你找出符合题意的 最短 子数组，并输出它的长度。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const copy = nums.slice().sort((a, b) => a - b);
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  for (; left < n; left++) {
    if (copy[left] !== nums[left]) break;
  }
  for (; right >= 0; right--) {
    if (copy[right] !== nums[right]) break;
  }
  return right < left ? 0 : right - left + 1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const n = nums.length;
  const stack = []; // 单调栈
  // 假设最短子数组是[left, right]
  // left应该是弹出的元素最小索引，被弹出的元素肯定不在当前索引
  // right应该是
  let left = n;
  let right = -1;
  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      let top = stack.pop();
      left = Math.min(left, top);
      right = i;
    }
    if (nums[i] < max) right = i;
    max = Math.max(nums[i], max);
    stack.push(i);
  }
  return left > right ? 0 : right - left + 1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const n = nums.length;
  let max = -Infinity; // 从左到右遍历，记录左边的最大值，right就是最后一个小于max的值
  let min = Infinity; // 从右到左遍历，记录右边的最小值，left就是最后一个大于min的值
  let left = n;
  let right = -1;
  for (let i = 0; i < n; i++) {
    if (nums[i] < max) right = i;
    max = Math.max(max, nums[i]);
    if (nums[n - i - 1] > min) left = n - i - 1;
    min = Math.min(min, nums[n - i - 1]);
  }
  return left > right ? 0 : right - left + 1;
};
