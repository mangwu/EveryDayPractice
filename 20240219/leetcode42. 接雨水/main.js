/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-19 17:28:49                                                  *
 * @LastModifiedDate: 2024-02-20 16:59:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 单调栈 + 前缀和
  // 单调栈计算下一个更高的元素的索引
  const n = height.length;
  let stack = [];
  // 正序，下一个更高的元素
  const nextGreater = new Array(n).fill(-1);
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && height[stack[stack.length - 1]] < height[i]) {
      stack.pop();
    }
    if (stack.length) nextGreater[i] = stack[stack.length - 1];
    stack.push(i);
  }
  // 前缀和
  const preffix = [0];
  for (let i = 0; i < n; i++) {
    preffix[i + 1] = preffix[i] + height[i];
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (nextGreater[i] === -1) {
      // 不存在下一个更大的索引，就找到下一个为-1的索引，中间的区域就是存水区域
      let start = i;
      i++; // 从下一个索引开始寻找nextGreater[i]为-1的索引
      while (i < n && nextGreater[i] !== -1) {
        i = nextGreater[i];
      }
      const len = i - start - 1;
      ans += len * (height[i] | 0) - (preffix[i] - preffix[start + 1]);
      i--; // 抵消i++的效果
    } else {
      // 前面部分
      const nxtIdx = nextGreater[i];
      const len = nxtIdx - i - 1;
      ans += len * (height[i] | 0) - (preffix[nxtIdx] - preffix[i + 1]);
      i = nxtIdx - 1;
    }
  }
  return ans;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 讨论每个height[i]最终接收雨水到达的高度：
  // 这个接收雨水到达的高度和索引i左边和右边的柱子高度有关系，
  // 它肯定不能超过左边和右边最高的柱子，否则就会因为“地势”向左右流动
  // 因为雨水是充足的，所以i所到达的高度是左右最高柱子的小者，
  // 如果height[i]本身比这个值大，说明当前索引的柱子不会接收雨水
  // 使用动态规划求得每个位置左边和右边的最大高度
  const n = height.length;
  const leftMax = [height[0]];
  const rightMax = [height[n - 1]];
  for (let i = 1; i < n; i++) {
    leftMax.push(Math.max(leftMax[leftMax.length - 1], height[i]));
    rightMax.push(Math.max(rightMax[rightMax.length - 1], height[n - i - 1]));
  }
  rightMax.reverse();
  return height.reduce(
    (pre, cur, i) =>
      pre + Math.max(cur, Math.min(leftMax[i], rightMax[i])) - cur,
    0
  );
};

class Stack {
  #items = [];
  size() {
    return this.#items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  push(val) {
    this.#items.push(val);
  }
  pop() {
    if (this.isEmpty()) return undefined;
    return this.#items.pop();
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.#items[this.size() - 1];
  }
}
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 单调栈遍历一次，无需再保存遍历nextGreater数组，
  // 从左往右构建一个单调递增的栈，每次出栈时，都可能构成一个水沟：
  //  1.出栈后，若当前栈中还存在一个元素，则这个元素就是水沟的左边界，此时：
  //     水槽的宽度：i - stack.peek() - 1，其中i时当前遍历到的索引
  //     水槽的高度：min(height[stack.peek()], height[i]) - height[top]，top时刚弹出的元素
  //  2. 出栈后，栈中没有元素了，无法构成边界
  const stack = new Stack();
  let ans = 0;
  const n = height.length;
  for (let i = 0; i < n; i++) {
    while (!stack.isEmpty() && height[stack.peek()] < height[i]) {
      const top = stack.pop();
      if (!stack.isEmpty()) {
        const len = i - stack.peek() - 1;
        const h = Math.min(height[stack.peek()], height[i]) - height[top];
        ans += len * h;
      }
    }
    stack.push(i);
  }
  return ans;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 双指针，优化动态规划
  const n = height.length;
  let left = 0;
  let right = n - 1;
  let leftMax = 0;
  let rightMax = 0;
  let ans = 0;
  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (leftMax < rightMax) {
      ans += leftMax - height[left];
      left++;
    } else {
      ans += rightMax - height[right];
      right--;
    }
  }
  return ans;
};
