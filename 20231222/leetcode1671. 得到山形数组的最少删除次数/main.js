// 我们定义 arr 是 山形数组 当且仅当它满足：

// arr.length >= 3
// 存在某个下标 i （从 0 开始） 满足 0 < i < arr.length - 1 且：
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// 给你整数数组 nums​ ，请你返回将 nums 变成 山形状数组 的​ 最少 删除次数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function (nums) {
  // 单调栈
  const leftStack = [];
  const n = nums.length;
  const rightStack = [];
  const leftDp = new Array(n).fill(0); // 以当前为顶部，左边的数量
  const rightDp = new Array(n).fill(0); // 以当前为顶部，右边的数量
  for (let i = 0; i < n; i++) {
    while (leftStack.length && leftStack[leftStack.length - 1] >= nums[i]) {
      leftStack.pop();
    }
    leftDp[i] =
      i === 0 ? leftStack.length : Math.max(leftStack.length, leftDp[i - 1]);
    leftStack.push(nums[i]);
  }
  for (let j = n - 1; j >= 0; j--) {
    while (rightStack.length && rightStack[rightStack.length - 1] >= nums[j]) {
      rightStack.pop();
    }
    rightDp[j] =
      j === 0 ? rightStack.length : Math.max(rightStack.length, rightDp[j - 1]);
    rightStack.push(nums[j]);
  }
  let res = 1;
  for (let i = 0; i < n; i++) {
    res = Math.max(res, leftDp[i] + rightDp[i] + 1);
  }
  console.log(leftDp, rightDp);
  return n - res;
};
// 上述解法错误，不能处理[1,2,9,5,1,4,1]
// 因为单调栈对于 1 4 1 这种只能丢弃掉 4 1这个更长的子栈反而增加了删除个数
// 要有一种方法能够获取dp[i]的最长单调子数组


/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function (nums) {
  // 动态规划 + 二分查找
  
};


