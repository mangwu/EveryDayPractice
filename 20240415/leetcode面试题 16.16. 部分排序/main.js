/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function (array) {
  const copy = array.slice().sort((a, b) => a - b);
  const n = array.length;
  let ans = [-1, -1];
  for (let i = 0; i < n; i++) {
    if (copy[i] !== array[i]) {
      ans[0] = i;
      break;
    }
  }
  if (ans[0] === -1) return ans;
  for (let i = n - 1; i >= 0; i--) {
    if (copy[i] !== array[i]) {
      ans[1] = i;
      break;
    }
  }
  return ans;
};
const { randomArr } = require("../../publicFunc/random/random");
const {
  recordInOutContent,
} = require("../../publicFunc/recordInOutContent/recordInOutContent");
recordInOutContent(subSort, randomArr(1000000, 0, 1000));
/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function (array) {
  // 双指针
  const n = array.length;
  let ans = [-1, -1];
  let left = 0;
  let right = n - 1;
  while (left + 1 < n && array[left] <= array[left + 1]) left++;
  while (right - 1 >= 0 && array[right] >= array[right - 1]) right--;
  if (left >= right) return ans;
  let max = -Infinity;
  let min = Infinity;
  for (let i = left; i <= right; i++) {
    max = Math.max(max, array[i]);
    min = Math.min(min, array[i]);
  }
  while (left >= 0 && array[left] > min) left--;
  while (right < n && array[right] < max) right++;
  return [left + 1, right - 1];
};

/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function (array) {
  // 一次遍历，
  // 从左到右记录最大值，最后一个值大于前面所有数字的最大值则不是结果，否则就是
  // 从右到左记录最小值，第一个值小于后面所有数字的最小值则不是结果，否则就是
  const n = array.length;
  let min = Infinity;
  let max = -Infinity;
  let first = -1;
  let last = -1;
  for (let i = 0; i < n; i++) {
    if (array[i] < max) last = i;
    else max = array[i];
    if (array[n - i - 1] > min) first = n - i - 1;
    else min = array[n - i - 1];
  }
  return [first, last];
};

/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function (array) {
  // 单调栈
  // 单调递增栈，找到
  const n = array.length;
  let max = -Infinity;
  const stack = [array[0]];
  let first = -1;
  for (let i = 1; i < n; i++) {
    // 这里记录max是为了只让结尾递增的元素入栈，
    // 中间比max小的只能作为与不需要排序的开头递增元素的对比而进行弹出操作的对象
    if (array[i] >= max) {
      stack.push(array[i]);
      max = array[i];
    } else {
      // 出栈比当前元素小的，当前元素不用出栈
      while (stack.length && stack[stack.length - 1] > array[i]) {
        stack.pop();
        // 需要排序的元素被弹出栈，剩下的就是不需要进行排序的开头的元素
        if (first === -1) first = stack.length;
        else first = Math.min(first, stack.length);
      }
    }
  }
  if (first === -1) return [first, first];
  let last = n - (stack.length - first) - 1;
  return [first, last];
};
