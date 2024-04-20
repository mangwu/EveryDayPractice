// 请根据每日 气温 列表 temperatures ，重新生成一个列表，要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // 单调栈，下一个更大的元素
  const n = temperatures.length;
  const stack = [];
  const res = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    while (stack && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
      stack.pop();
    }
    if (stack.length) res[i] = stack[stack.length - 1] - i;
    stack.push(i);
  }
  return res;
};
