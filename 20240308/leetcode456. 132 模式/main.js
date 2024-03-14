// 给你一个整数数组 nums ，数组中共有 n 个整数。132 模式的子序列 由三个整数 nums[i]、nums[j] 和 nums[k] 组成，并同时满足：i < j < k 和 nums[i] < nums[k] < nums[j] 。

// 如果 nums 中存在 132 模式的子序列 ，返回 true ；否则，返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  // 单调栈
  const stack = [];
  const n = nums.length;
  let min = Infinity;
  let prePop = -Infinity;
  for (let i = 0; i < n; i++) {
    while (stack.length && stack[stack.length - 1] >= nums[i]) {
      const top = stack.pop();
      if (stack.length) {
        min = Math.min(min, stack[0]);
        prePop = Math.max(prePop, top);
      }
    }
    if (nums[i] < prePop && nums[i] > min) return true;
    stack.push(nums[i]);
  }
  return false;
};
// [1,2,3,4,-4,-3,-5,-1]
// 1 2 3 4   -4
// (-4) (-3)     -5
// (-5) (-1)
// 
// [3,5,0,3]
// [3,5,0,4]
