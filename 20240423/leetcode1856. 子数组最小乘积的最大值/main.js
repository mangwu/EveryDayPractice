// 一个数组的 最小乘积 定义为这个数组中 最小值 乘以 数组的 和 。

// 比方说，数组 [3,2,5] （最小值是 2）的最小乘积为 2 * (3+2+5) = 2 * 10 = 20 。
// 给你一个正整数数组 nums ，请你返回 nums 任意 非空子数组 的最小乘积 的 最大值 。由于答案可能很大，请你返回答案对  109 + 7 取余 的结果。

// 请注意，最小乘积的最大值考虑的是取余操作 之前 的结果。题目保证最小乘积的最大值在 不取余 的情况下可以用 64 位有符号整数 保存。

// 子数组 定义为一个数组的 连续 部分。
const MOD = 10n ** 9n + 7n;
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function (nums) {
  //  前缀和+单调栈
  // 枚举每个元素，获取将每个元素作为最小值的最长数组，计算其最小乘积，然后比较
  // 假设以nums[i]为最小值的最长数组是[left, right]，sum(nums[left]-nums[right])可以用前缀和快速得到
  // left和right的值可以通过单调栈获取，left-1是nums[i]的左边最近的严格小于nums[i]的索引
  // right+1是nums[i]的右边最近的严格小于nums[i]的索引
  const n = nums.length;
  const rightLess = new Array(n).fill(n);
  const leftLess = new Array(n).fill(-1);
  const rightStack = []; // 单调递减
  const leftStack = []; // 单调递减
  for (let i = 0; i < n; i++) {
    while (
      rightStack.length &&
      nums[rightStack[rightStack.length - 1]] > nums[i]
    ) {
      rightLess[rightStack.pop()] = i;
    }
    rightStack.push(i);
    while (
      leftStack.length &&
      nums[leftStack[leftStack.length - 1]] >= nums[i]
    ) {
      leftStack.pop();
    }
    if (leftStack.length) leftLess[i] = leftStack[leftStack.length - 1];
    leftStack.push(i);
  }
  // 前缀和
  const preffix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    preffix[i + 1] = preffix[i] + nums[i];
  }
  let ans = 0n;
  for (let i = 0; i < n; i++) {
    // 以nums[i]做最小值
    let left = leftLess[i] + 1;
    let right = rightLess[i] - 1;
    const res =
      (BigInt(preffix[right + 1]) - BigInt(preffix[left])) * BigInt(nums[i]);
    if (res > ans) ans = res;
  }
  return ans % MOD;
};

// 优化：
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function (nums) {
  // 在计算rightLess时，可以记录右边小于等于当前元素的最近的索引，
  // 这样做不会影响到答案，因为连续相等的元素的最后一个能得出正确的答案
  // 好处是可以只使用一个栈记录
  const n = nums.length;
  const rightLess = new Array(n).fill(n);
  const leftLess = new Array(n).fill(-1);
  const stack = []; // 单调递减
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] >= nums[i]) {
      rightLess[stack.pop()] = i;
    }
    if (stack.length) leftLess[i] = stack[stack.length - 1];
    stack.push(i);
  }
  // 前缀和
  const preffix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    preffix[i + 1] = preffix[i] + nums[i];
  }
  let ans = 0n;
  for (let i = 0; i < n; i++) {
    // 以nums[i]做最小值
    let left = leftLess[i] + 1;
    let right = rightLess[i] - 1;
    const res =
      (BigInt(preffix[right + 1]) - BigInt(preffix[left])) * BigInt(nums[i]);
    if (res > ans) ans = res;
  }
  return ans % MOD;
};
