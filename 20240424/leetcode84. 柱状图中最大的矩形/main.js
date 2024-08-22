// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

// 求在该柱状图中，能够勾勒出来的矩形的最大面积。

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  // 以每个元素为最小值所能构成的最大矩阵
  // 假设nums[i]的左边索引left和右边索引right能构成包含nums[i]的最大矩阵
  // 那么nums[left-1]就是左边最近的小于nums[i]的值
  // 那么nums[right+1]就是右边最近的小于nums[i]的值
  // 利用单调栈可以求出left和right
  const n = heights.length;
  const stack = [];
  const leftLess = new Array(n).fill(-1);
  const rightLess = new Array(n).fill(n);
  for (let i = 0; i < n; i++) {
    while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
      rightLess[stack.pop()] = i;
    }
    if (stack.length) leftLess[i] = stack[stack.length - 1];
    stack.push(i);
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let left = leftLess[i] + 1;
    let right = rightLess[i] - 1;
    ans = Math.max(ans, (right - left + 1) * heights[i]);
  }
  return ans;
};
