// 给你一个整数数组 nums ，数组中共有 n 个整数。132 模式的子序列 由三个整数 nums[i]、nums[j] 和 nums[k] 组成，并同时满足：i < j < k 和 nums[i] < nums[k] < nums[j] 。

// 如果 nums 中存在 132 模式的子序列 ，返回 true ；否则，返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  // 132
  // 单调递增栈，倒序遍历每个元素，将其作为中的3（最大值）入栈
  const stack = [];
  let k = -Infinity; // 最大值右边的第二大的值
  let max = -Infinity; // 最大值
  const n = nums.length;
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] > nums[i]) {
      const pop = stack.pop();
      if (pop > max) {
        k = max;
        max = pop;
      }
      if (nums[i] < k) return true;
    }
    if (stack.length) k = Math.max(k, stack[stack.length - 1]);
    if (nums[i] > max) {
      k = max;
      max = nums[i];
    }
    stack.push(nums[i]);
    console.log(stack, max, k);
  }
  return false;
};

// [-2,1,2,-2,1,2]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  // 132
  // 单调递减栈
  const stack = [];
  const n = nums.length;
  let pre = -Infinity;
  // 1 3 2
  // 当前元素为nums[i]，上一个遍历的元素为nums[i+1](栈顶元素)
  // 以nums[i+1]为3，只要nums[i+1]之前的小于它的最大元素大于当前元素nums[i]，就找到了132
  // 然后为nums[i]作为下一个3，找到前面的最大的2做准备
  // 单调递减栈为这种准备提供基础，它弹出的元素是在nums[i]后，且小于nums[i]的
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] < pre) return true;
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      pre = stack.pop();
    }
    stack.push(nums[i]);
  }
  return false;
};

