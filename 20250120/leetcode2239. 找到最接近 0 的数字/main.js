// 给你一个长度为 n 的整数数组 nums ，请你返回 nums 中最 接近 0 的数字。如果有多个答案，请你返回它们中的 最大值 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  let res = nums[0];
  for (const num of nums) {
    const absNum = Math.abs(num);
    const absRes = Math.abs(res);
    if (absNum < absRes) {
      res = num;
    } else if (absNum === absRes) {
      res = Math.max(res, num);
    }
  }
  return res;
};
