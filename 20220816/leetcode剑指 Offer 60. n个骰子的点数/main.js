/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-16 10:29:56                                                  *
 * @LastModifiedDate: 2022-08-16 10:51:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。
// 你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。
/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
  // 初始时
  let ans = new Array(6).fill(1 / 6);
  let deleteNum = n - 1;
  while (n > 1) {
    const len = ans.length;
    let res = new Array(len + 6).fill(0);
    for (let i = 0; i < len; i++) {
      let preP = ans[i];
      for (let j = 1; j <= 6; j++) {
        res[i + j] += preP / 6;
      }
    }
    ans = res;
    n--;
  }
  // 删除前面的(n-1) 个元素
  ans = ans.slice(deleteNum);
  return ans;
};

// n <= 11
// 如果进行枚举，那么最大时间复杂度为O(6,11) = 362797056 显然超时
// 不能简单枚举
