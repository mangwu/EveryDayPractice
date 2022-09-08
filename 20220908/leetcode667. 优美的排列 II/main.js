/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-08 08:51:55                                                  *
 * @LastModifiedDate: 2022-09-08 09:54:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数 n 和 k ，请你构造一个答案列表 answer ，该列表应当包含从 1 到 n 的 n 个不同正整数，
// 并同时满足下述条件：

// 假设该列表是 answer = [a1, a2, a3, ... , an] ，那么列表 [|a1 - a2|, |a2 - a3|, |a3 - a4|, ... ,
//   |an-1 - an|] 中应该有且仅有 k 个不同整数。
// 返回列表 answer 。如果存在多种答案，只需返回其中 任意一种 。
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  // 差值的范围在[1, n-1]之间
  // 例如 n = 4 时， 1 4 2 3    => 最多有 3 2 1  三种差值
  // n = 5 时 1 5 2 4 3  => 最多有 4 3 2 1 四种差值
  // k < n ，k表示差值的种类
  // n = 5 k = 3 则 1 5 2 3 4  => 有  4 3 1 三种
  // n = 5 k = 2 则 1 5 4 3 2 => 有 4 1 两种
  // n = 5 k = 1 则 1 2 3 4 5 => 有 1 一种
  // n = 10 k = 4 则  1 10 2 9 8 7 6 5 4 3   9
  let left = 1;
  let right = n;
  const ans = [];
  let i = 0;
  for (; i < k; i++) {
    if (i % 2 == 0) {
      ans.push(left);
      left++;
    } else {
      ans.push(right);
      right--;
    }
  }
  if (i % 2 == 0) {
    // 从right开始
    for (let j = right; j >= left; j--) {
      ans.push(j);
    }
  } else {
    // 从left开始
    for (let j = left; j <= right; j++) {
      ans.push(j);
    }
  }
  return ans;
};
