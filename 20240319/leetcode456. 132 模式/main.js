// 给你一个整数数组 nums ，数组中共有 n 个整数。132 模式的子序列 由三个整数 nums[i]、nums[j] 和 nums[k] 组成，并同时满足：i < j < k 和 nums[i] < nums[k] < nums[j] 。

// 如果 nums 中存在 132 模式的子序列 ，返回 true ；否则，返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  // 单调递减栈
  // 倒序遍历，单调递减栈的栈底会维护到目前为止的最大值，也就是132中的3
  // 维护单调栈时，出栈的元素就是132中的2，即到目前为止3（最大值）右边的最大值
  // 倒序遍历的过程就是在查找一个132中的1，找到一个1比出栈的2小就
  // “到目前为止3（最大值）右边的最大值”对于本题正确，
  // ：因为如果要出栈一个比上一个出栈元素小的元素，本质上就已经找到了132了
  let k = -Infinity;
  const stack = [];
  const n = nums.length;
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] < k) return true;
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      k = stack.pop();
    }
    stack.push(nums[i]);
  }
  return false;
};

// 1 2  5 2 9 1
