// 沿街有一排连续的房屋。每间房屋内都藏有一定的现金。现在有一位小偷计划从这些房屋中窃取现金。

// 由于相邻的房屋装有相互连通的防盗系统，所以小偷 不会窃取相邻的房屋 。

// 小偷的 窃取能力 定义为他在窃取过程中能从单间房屋中窃取的 最大金额 。

// 给你一个整数数组 nums 表示每间房屋存放的现金金额。形式上，从左起第 i 间房屋中放有 nums[i] 美元。

// 另给你一个整数 k ，表示窃贼将会窃取的 最少 房屋数。小偷总能窃取至少 k 间房屋。

// 返回小偷的 最小 窃取能力。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  const n = nums.length;
  // 二分查找
  const check = (cur) => {
    let res = 0;
    for (let i = 0; i < n; i += 2) {
      if (nums[i] <= cur) {
        res++;
      } else if (nums[i + 1] <= cur) {
        i++;
        res++;
      }
    }
    return res >= k; // 存在cur的最大金额
  };
  let left = 1;
  let right = Math.max.apply(null, nums);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      // mid满足条件
      right = mid - 1;
    } else {
      // mid不满足条件
      left = mid + 1;
    }
  }
  return left;
};
