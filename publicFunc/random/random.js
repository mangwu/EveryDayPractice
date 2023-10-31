/*
 * @Author: mangwu                                                             *
 * @File: random.js                                                            *
 * @Date: 2023-03-22 16:46:33                                                  *
 * @LastModifiedDate: 2023-10-31 10:46:24                                      *
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
  /**
   * @description 洗牌
   * @param {number[]} arr
   * @returns {number[]}
   */
  randomShuffle(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      const a = this.randomNum(0, i + 1);
      const b = this.randomNum(0, i + 1);
      this.swap(arr, a, b);
    }
    return arr;
  },
  /**
   * @description 交互数组元素
   * @param {[]} arr
   * @param {number} a 索引a
   * @param {number} b 索引b
   */
  swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  },
};

module.exports = random;
