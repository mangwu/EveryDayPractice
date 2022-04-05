/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-05 21:31:37                                                  *
 * @LastModifiedDate: 2022-04-05 23:09:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。
// 这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
// 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

// 给定一个代表每个房屋存放金额的非负整数数组，
// 计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 当前能盗窃到的最大值，是前面一个和前面两个的大者,
  // 且需要注意的是，由于数组是环形的，第一个和最后一个不能连续取值
  const len = nums.length;
  if (len <= 3) {
    return Math.max.apply(null, nums);
  }
  let maxArr = [
    [nums[0], true],
    [nums[1], false],
    [nums[0] + nums[2], true],
  ];
  let max = Math.max.apply(
    null,
    maxArr.map((v) => v[0])
  );
  for (let i = 3; i < len; i++) {
    // 判断是否是最后一个
    if (i == len - 1) {
      // 只能选没有第一个的
      for (let j = i - 1; j > 0; j--) {
        if (!maxArr[j][1]) {
          maxArr[i] = [maxArr[j][0] + nums[i], false];
          max = Math.max(maxArr[i][0], max);
          break;
        }
      }
    } else {
      if (maxArr[i - 3][0] > maxArr[i - 2][0]) {
        maxArr[i] = [nums[i] + maxArr[i - 3][0], maxArr[i - 3][1]];
      } else if (maxArr[i - 3][0] == maxArr[i - 2][0]) {
        maxArr[i] = [
          nums[i] + maxArr[i - 3][0],
          maxArr[i - 3][1] && maxArr[i - 2][1],
        ];
      } else {
        maxArr[i] = [nums[i] + maxArr[i - 2][0], maxArr[i - 2][1]];
      }
      max = Math.max(maxArr[i][0], max);
    }
  }
  return max;
};

// 上述解答将第二个值作为判断是否选择第一项的做法错误，因为后面的选项可能都选了第一个的
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 当前能盗窃到的最大值，是前面一个和前面两个的大者,
  // 且需要注意的是，由于数组是环形的，第一个和最后一个不能连续取值
  const len = nums.length;
  if (len <= 3) {
    return Math.max.apply(null, nums);
  }
  // maxArr中有两个决定
  let maxArr = [
    [nums[0], 0],
    [nums[1], nums[1]],
    [nums[0] + nums[2], nums[2]],
  ];
  let max = Math.max.apply(
    null,
    maxArr.map((v) => v[0])
  );
  for (let i = 3; i < len; i++) {
    if (i == len - 1) {
      // 是最后一个，只能比较非选第一个的
      maxArr[i] = Math.max(
        maxArr[i - 2][1] + nums[i],
        maxArr[i - 3][1] + nums[i]
      );
      max = Math.max(maxArr[i], max);
    } else {
      maxArr[i] = [
        Math.max(maxArr[i - 2][0] + nums[i], maxArr[i - 3][0] + nums[i]),
        Math.max(maxArr[i - 2][1] + nums[i], maxArr[i - 3][1] + nums[i]),
      ];
      max = Math.max.apply(null, maxArr[i].concat(max));
    }
  }
  return max;
};
