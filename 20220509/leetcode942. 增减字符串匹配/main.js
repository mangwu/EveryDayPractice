/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-09 07:17:35                                                  *
 * @LastModifiedDate: 2022-05-09 07:50:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 由范围 [0,n] 内所有整数组成的 n + 1 个整数的排列序列可以表示为长度为 n 的字符串 s ，其中:

// 如果 perm[i] < perm[i + 1] ，那么 s[i] == 'I'
// 如果 perm[i] > perm[i + 1] ，那么 s[i] == 'D'
// 给定一个字符串 s ，重构排列 perm 并返回它。如果有多个有效排列perm，则返回其中 任何一个

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  // s的长度比返回数组的长度小一个，因为最后一个元素无法比较下一个元素
  // 元素为[0,n-1]中的整数
  // 最大元素为n
  const n = s.length + 1;
  // I表示后面的元素比当前的大，D表示后面的元素比当前小
  let min = 0;
  let max = 0;
  const res = [0];
  for (let i = 1; i < n; i++) {
    if (s[i - 1] == "I") {
      // 更大
      res[i] = max + 1;
      max++;
    } else {
      // 更小
      res[i] = min - 1;
      min--;
    }
  }
  for (let i = 0; i < n; i++) {
    res[i] = res[i] - min;
  }
  return res;
};
// 0 1 -1 2 -2
// 2 3 1 4 0
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  // 上面设定了初始第一个元素为0
  // 如果s的第一个字符为D,则贪心地认为第一个元素就是最大值n,
  // 那么探究剩余元素就是在[0,n-1]中选取，属于同一种问题
  // 如果s地第一个字符为I，则贪心地认为第一个元素就是最小值0,
  // 那么探究剩余元素就是在[1,n]中选取，也是同一种问题，只是元素范围有所变化
  // 对于这种变化，取两个遍历，记录最大值和最小值，每次取端点，知道二者相等就是最后一个值
  const ans = [];
  let max = s.length;
  let min = 0;
  for (const ch of s) {
    if (ch == "I") {
      ans.push(min);
      min++;
    } else {
      ans.push(max);
      max--;
    }
  }
  ans.push(min);
  return ans;
};
