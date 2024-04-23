// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

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
