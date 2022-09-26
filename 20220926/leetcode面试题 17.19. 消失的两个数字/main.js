/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-26 08:51:19                                                  *
 * @LastModifiedDate: 2022-09-26 10:33:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个数组，包含从 1 到 N 所有的整数，但其中缺了两个数字。
// 你能在 O(N) 时间内只用 O(1) 的空间找到它们吗？

// 以任意顺序返回这两个数字均可。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function (nums) {
  // 不使用On的事件
  nums.sort((a, b) => a - b);
  if (nums[0] === 3) {
    return [1, 2];
  }
  let pre = 0;
  const n = nums.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] - 1 !== pre) {
      ans.push(pre + 1);
    }
    pre = nums[i];
  }
  if (ans.length === 1) {
    ans.push(pre + 1);
  }
  if (ans.length === 0) {
    ans.push(pre + 1);
    ans.push(pre + 2);
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function (nums) {
  // 数学方法
  // 求nums的和及平方和
  let sum = 0;
  let squareSum = 0;
  for (let num of nums) {
    sum += num;
    squareSum += num ** 2;
  }
  const n = nums.length;
  // 和差值
  let a = ((n + 2) * (n + 3)) / 2 - sum; // x + y的值
  // 平方和差值
  let b = ((n + 2) * (n + 3) * (2 * n + 5)) / 6 - squareSum; // x^2 + y^2的值
  let ans = [];
  ans[0] = (a + Math.sqrt(2 * b - a ** 2)) / 2;
  ans[1] = a - ans[0];
  return ans;
};

// x + y = a
// x^2 + y^2 = b
// x^2 + (a - x)^2 = b
// x^2 + a^2 -2ax + x^2 = b
// 2x^2 - 2ax + a^2 - b = 0
// x =  2a + sq(4a^2 - 8(a^2 - b)) / 4
// x = (2a + sq(8b - 4a^2)) / 4 = (a + sq(2b - a^2)) / 2

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function (nums) {
  // 异或
  let xornum = 0;
  for (const num of nums) {
    xornum ^= num;
  }
  const n = nums.length;
  // 再添加1 n+2的数进行异或
  for (let i = 1; i <= n + 2; i++) {
    xornum ^= i;
  }
  // 获取最低位
  let lsb = xornum & -xornum;
  // 将所有2n-2个数进行分类异或
  let type1 = 0;
  let type2 = 0;
  for (const num of nums) {
    if (num & lsb) {
      type1 ^= num;
    } else {
      type2 ^= num;
    }
  }
  for (let i = 1; i <= n + 2; i++) {
    if (i & lsb) {
      type1 ^= i;
    } else {
      type2 ^= i;
    }
  }
  return [type1, type2];
};


// n(n+1)(2n+1) - k(k+1)(2k+1)

// 