// 给你一个下标从 0 开始、由正整数组成的数组 nums 。

// 你可以在数组上执行下述操作 任意 次：

// 选中一个同时满足 0 <= i < nums.length - 1 和 nums[i] <= nums[i + 1] 的整数 i 。将元素 nums[i + 1] 替换为 nums[i] + nums[i + 1] ，并从数组中删除元素 nums[i] 。
// 返回你可以从最终数组中获得的 最大 元素的值。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function (nums) {
  // 从后往前遍历，遇到nums[i-1] <= curSum的情况就一直进行curSum+= nums[i-1]的操作
  // 否则以nums[i-1]开始重新遍历
  const n = nums.length;
  let ans = 0;
  for (let i = n - 1; i >= 0; i--) {
    let curSum = nums[i];
    while (i > 0 && curSum >= nums[i - 1]) {
      curSum += nums[i - 1];
      i--;
    }
    ans = Math.max(ans, curSum);
  }
  return ans;
};
