/*
 * @Author: mangwu                                                             *
 * @File: random.js                                                            *
 * @Date: 2023-03-22 16:46:33                                                  *
 * @LastModifiedDate: 2023-03-22 17:11:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const random = {
  /**
   * @description 获取指定范围的随机整数，默认[0, 2)
   * @param {number} start 随机整数的最小值
   * @param {number} end 随机整数的大边界，默认为2
   * @returns {number} 一个随机整数
   */
  randomNum(start = 0, end = 2) {
    if (end < start) throw new Error("传入的end应该不小于比start大");
    return Math.floor(Math.random() * (end - start) + start);
  },
  /**
   * @description 获取指定范围的随机整数数组，数范围默认为[0, n)
   * @param {number} n 随机整数数组的长度
   * @param {number} start 随机整数中数的最小值
   * @param {number} end 随机整数中数的大边界，默认为n
   * @returns {number[]}
   */
  randomArr(n, start = 0, end = n) {
    const res = [];
    while (n) {
      res.push(random.randomNum(start, end));
      n--;
    }
    return res;
  },
};

module.exports = random;
