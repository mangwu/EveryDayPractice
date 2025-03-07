// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

// 返回这三个数的和。

// 假定每组输入只存在恰好一个解。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let minAbs = Infinity;
  let res = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] > nums[i - 1]) continue;
    let right = n - 1;
    for (let j = i + 1; j < n - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let curSum = nums[i] + nums[j];
      while (right > j && curSum + nums[right] >= target) {
        if (curSum + nums[right] === target) return target;
        const diff = Math.abs(curSum + nums[right] - target);
        if (diff < minAbs) {
          res = curSum + nums[right];
          minAbs = diff;
        }
        right--;
      }
      if (right > j) {
        const diff = Math.abs(curSum + nums[right] - target);
        if (diff < minAbs) {
          res = curSum + nums[right];
          minAbs = diff;
        }
      }
    }
  }
  return res;
};
