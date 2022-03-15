/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-15 09:38:13                                                  *
 * @LastModifiedDate: 2022-03-15 18:39:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，请你找出 nums 子集 按位或 可能得到的 最大值 ，并返回按位或能得到最大值的 不同非空子集的数目 。

// 如果数组 a 可以由数组 b 删除一些元素（或不删除）得到，则认为数组 a 是数组 b 的一个 子集 。如果选中的元素下标位置不一样，则认为两个子集 不同 。

// 对数组 a 执行 按位或 ，结果等于 a[0] OR a[1] OR ... OR a[a.length - 1]（下标从 0 开始）。
/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  // 获得可以按位或得到数组的按位或最大值的子集的个数
  // 动态规划
  // 记录前i个的按位或最大值，和数量
  // 如果按位或值与当前值位或后不变，则数量乘以2，如果当前值和按位或值相等，需要额外
  // 如果按位或值与当前值位或后变大，不需要改变数量，如果当前值和按位或值相等，额外加一
  let orNum = nums[0];
  const len = nums.length;
  let ans = 1;
  for (let i = 1; i < len; i++) {
    if ((nums[i] | orNum) == orNum) {
      // 与当前或值相等，需要加上不带上此值的原始数量 加上带上此值的全部数量
      if (nums[i] == orNum) {
        ans = ans + Math.pow(2, i) - 1;
      } else {
        // 不等，则简单乘2即可
        ans *= 2;
      }
    } else if ((nums[i] | orNum) > orNum) {
      orNum = nums[i] | orNum;
      // 与当前值相等
      if (nums[i] == orNum) {
        // 只考虑带上此值时的全部数量
        ans = Math.pow(2, i) - 1;
        console.log("---");
      }
      // 不等，说明之前所有子集都需要带上它，不需要改变
    }
    console.log(ans);
  }
  return ans;
};
// 上述解法错误，不能
countMaxOrSubsets([3, 2, 1]);
// 3 => 11
// 2 => 10
// 1 => 01

// 5 => 101

// 3
// 3, 3 2
// 3 ,3 2, 3 1, 1 2 3, 1 2
//

// 可以使用暴力法求解，子集个数为2^n - 1个，计算每个子集的或值，如果和当前相等就加1，大于就重置为1

/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  // 声明最大或值和数量
  let maxOrVal = 0;
  let cnt = 0;
  const len = nums.length;
  // 遍历2^n次
  for (let i = 0; i < 1 << len; i++) {
    // 设置当前或值
    let orVal = 0;
    for (let j = 0; j < len; j++) {
      if (((i >> j) & 1) == 1) {
        // i左移j位即表示i的第j位，如果为1表示该位置为被选中的元素，用来求或值
        orVal |= nums[j];
      }
    }
    if (orVal > maxOrVal) {
      // 当前值比最大或值大，更新或值
      maxOrVal = orVal;
      cnt = 1;
    } else if (orVal == maxOrVal) {
      // 相同最大值，加1
      cnt++;
    }
  }
  return cnt;
};
