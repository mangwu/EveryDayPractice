/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-01 09:07:19                                                  *
 * @LastModifiedDate: 2022-11-01 09:11:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个班级里有 n 个学生，编号为 0 到 n - 1 。
// 每个学生会依次回答问题，编号为 0 的学生先回答，然后是编号为 1 的学生，以此类推，直到编号为 n - 1 的学生，然后老师会重复这个过程，重新从编号为 0 的学生开始回答问题。

// 给你一个长度为 n 且下标从 0 开始的整数数组 chalk 和一个整数 k 。
// 一开始粉笔盒里总共有 k 支粉笔。当编号为 i 的学生回答问题时，
// 他会消耗 chalk[i] 支粉笔。如果剩余粉笔数量 严格小于 chalk[i] ，那么学生 i 需要 补充 粉笔。

// 请你返回需要 补充 粉笔的学生 编号 。

/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  let sum = 0;
  for (const c of chalk) {
    sum += c;
  }
  k = k % sum;
  if(k == 0) {
    return 0;
  }
  const n = chalk.length;
  for (let i = 0; i < n; i++) {
    if (chalk[i] > k) {
      return i;
    }
    k -= chalk[i];
  }
};
