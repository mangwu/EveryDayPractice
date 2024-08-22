// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 三种解法

// 单调栈+前缀和
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;
  const nextGreater = new Array(n).fill(-1);
  // 单调栈 + 前缀和
  const stack = []; // 单调递减
  const preffix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    while (stack.length && height[stack[stack.length - 1]] <= height[i]) {
      nextGreater[stack.pop()] = i;
    }
    stack.push(i);
    preffix[i + 1] = preffix[i] + height[i];
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (nextGreater[i] !== -1) {
      // 前面部分
      let next = nextGreater[i];
      ans += height[i] * (next - i - 1) - (preffix[next] - preffix[i + 1]);
      i = next - 1;
    } else {
      // 找到下一个-1，中间就是存水区域
      let start = i;
      i++;
      while (i < n && nextGreater[i] !== -1) i++;
      ans +=
        (height[i] || 0) * (i - start - 1) - (preffix[i] - preffix[start + 1]);
      i--;
    }
  }
  return ans;
};

// 单调栈，在遍历过程中获取水槽求水量
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;
  const stack = []; // 单调递减栈
  let ans = 0;
  for (let i = 0; i < n; i++) {
    while (stack.length && height[stack[stack.length - 1]] < height[i]) {
      const top = stack.pop();
      if (!stack.length) break;
      let left = stack[stack.length - 1];
      const curHeight = Math.min(height[left], height[i]) - height[top];
      ans += (i - left - 1) * curHeight;
    }
    stack.push(i);
  }
  return ans;
};

// 动态规划
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;
  const leftMax = new Array(n).fill(height[0]);
  const rightMax = new Array(n).fill(height[n - 1]);
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    rightMax[n - i - 1] = Math.max(rightMax[n - i], height[n - i - 1]);
  }
  let ans = 0;
  for (let i = 1; i < n - 1; i++) {
    ans +=
      Math.max(Math.min(leftMax[i - 1], rightMax[i + 1]), height[i]) -
      height[i];
  }
  return ans;
};

//  [0,1,0, 2,1,0,1,3,2,1,2,1]
//    -1 0 -1 0 2 3 2 2

// 双指针优化动态规划
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;
  let leftMax = height[0];
  let rightMax = height[n - 1];
  let left = 1;
  let right = n - 2;
  let ans = 0;
  while (left <= right) {
    if (leftMax < rightMax) {
      ans += Math.max(leftMax, height[left]) - height[left];
      leftMax = Math.max(leftMax, height[left++]);
    } else {
      ans += Math.max(rightMax, height[right]) - height[right];
      rightMax = Math.max(rightMax, height[right--]);
    }
  }
  return ans;
};
