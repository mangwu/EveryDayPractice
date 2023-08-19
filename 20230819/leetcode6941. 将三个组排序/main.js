/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-19 22:51:08                                                  *
 * @LastModifiedDate: 2023-08-19 23:14:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始长度为 n 的整数数组 nums 。

// 从 0 到 n - 1 的数字被分为编号从 1 到 3 的三个组，数字 i 属于组 nums[i] 。注意，有的组可能是 空的 。

// 你可以执行以下操作任意次：

// 选择数字 x 并改变它的组。更正式的，你可以将 nums[x] 改为数字 1 到 3 中的任意一个。
// 你将按照以下过程构建一个新的数组 res ：

// 将每个组中的数字分别排序。
// 将组 1 ，2 和 3 中的元素 依次 连接以得到 res 。
// 如果得到的 res 是 非递减顺序的，那么我们称数组 nums 是 美丽数组 。

// 请你返回将 nums 变为 美丽数组 需要的最少步数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  // 意思就是nums中的数构成顺序为
  // x个 1，y个 2，z个3
  // x + y + z = nums.length
  const n = nums.length;
  // 只有1，2或者3
  let one = 0;
  let two = 0;
  let three = 0;
  nums.forEach((v) => (v === 1 ? one++ : v === 2 ? two++ : null));
  let res = Math.min(n - one, n - two, one + two);
  three = n - one - two;
  // 有1，2，3
  let notOne = 0;
  for (let i = 0; i < n - 2; i++) {
    // 最后一个1位于i
    if (nums[i] !== 1) notOne++;
    notTwo = 0;
    for (let j = i + 1; j < n - 1; j++) {
      // 最后一个2位于j
      if (nums[j] !== 2) notTwo++;
      notThree = 0;
      for (let k = j + 1; k < n; k++) {
        if (nums[k] !== 3) notThree++;
      }
      res = Math.min(res, notOne + notTwo + notThree);
    }
  }
  let curOne = 0;
  let curTwo = 0;
  let curThree = 0;
  // 有1，2或1，3或2，3
  for (let i = 0; i < n - 1; i++) {
    // 左边1,2,3的数量
    if (nums[i] === 1) curOne++;
    if (nums[i] === 2) curTwo++;
    if (nums[i] === 3) curThree++;
    let rigthTwo = two - curTwo;
    let rightThree = three - curThree;
    res = Math.min(
      res,
      n - curOne - rigthTwo,
      n - curOne - rightThree,
      n - curTwo - rightThree
    );
  }
  return res;
};
