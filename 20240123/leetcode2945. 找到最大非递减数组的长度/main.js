// 给你一个下标从 0 开始的整数数组 nums 。

// 你可以执行任意次操作。每次操作中，你需要选择一个 子数组 ，并将这个子数组用它所包含元素的 和 替换。比方说，给定数组是 [1,3,5,6] ，你可以选择子数组 [3,5] ，用子数组的和 8 替换掉子数组，然后数组会变为 [1,8,6] 。

// 请你返回执行任意次操作以后，可以得到的 最长非递减 数组的长度。

// 子数组 指的是一个数组中一段连续 非空 的元素序列。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumLength = function (nums) {
  // 二分查找
  const n = nums.length;
  let left = 1;
  let right = n;
  const check = (num) => {
    // 顺序遍历nums，如果遇到nums[i+1] < nums[i]的情况，就要进行合并操作了
    // 合并方式有两种
    //  1. 向前合并m个，保证nums[i+2]大于等于nums[i+1] + nums[i] + ... nums[i+2-m]
    //  2. 先后合并m个，保证nums[i+1] + nums[i+2] ... + nums[i+m] 大于等于nums[i]
    for(let i = 0; i < n; i++) {

    }
  }
  while(left <= right) {

  }
};

// 4 2 7 8
// 1 4 2 5 8 9 8 4 2 4 7

// 1 4 7 8 9 12 13
