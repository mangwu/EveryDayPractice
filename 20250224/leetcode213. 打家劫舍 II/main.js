// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  if (n <= 3) return Math.max.apply(null, nums);
  return Math.max(robRange(nums, 0, n - 2), robRange(nums, 1, n - 1));
};

function robRange(nums, start, end) {
  let pre1 = nums[start];
  let pre2 = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2; i <= end; i++) {
    const cur = Math.max(pre2, pre1 + nums[i]);
    pre1 = pre2;
    pre2 = cur;
  }
  return pre2;
}
