/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-28 19:28:46                                                  *
 * @LastModifiedDate: 2022-08-28 21:17:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
const set = new Set([5, 11, 17, 23, 29, 30]);
/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function (k) {
  // 5 的个数 有多少个5就能达成多少个0
  // 结果只能是0 或 5
  // 需要判断k个五的阶层是否存在
  if (k <= 30) {
    if (set.has(k)) {
      return 0;
    }
    return 5;
  }
  let pre = 0;
  let res = 1;
  let idx = 0;
  while (res < k) {
    pre = res;
    res = res * 5 + 1;
    idx++;
  }
  if (k >= res - idx && k < res) {
    return 0;
  }
  let add = pre;
  pre--;
  console.log(idx);
  for (let i = 1; i <= 3; i++) {
    pre += add;
    if (k <= pre ** k >= pre - idx) {
      return 0;
    }
  }
  return preimageSizeFZF(k % Math.pow(5, idx + 1));
};
