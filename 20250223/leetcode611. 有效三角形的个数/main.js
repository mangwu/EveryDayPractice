// 给定一个包含非负整数的数组 nums ，返回其中可以组成三角形三条边的三元组个数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let res = 0;
  for (let i = 0; i < n - 2; i++) {
    let right = i + 2;
    for (let j = i + 1; j < n - 1; j++) {
      let sum = nums[i] + nums[j];
      while (right < n && sum > nums[right]) right++;
      if (right > j) {
        res += right - j - 1;
      }
    }
  }
  return res;
};
