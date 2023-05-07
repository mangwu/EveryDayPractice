/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-07 21:12:45                                                  *
 * @LastModifiedDate: 2023-05-07 21:34:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在歌曲列表中，第 i 首歌曲的持续时间为 time[i] 秒。

// 返回其总持续时间（以秒为单位）可被 60 整除的歌曲对的数量。
// 形式上，我们希望下标数字 i 和 j 满足  i < j 且有 (time[i] + time[j]) % 60 == 0。

/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  const hash = new Map();
  let res = 0;
  for (const item of time) {
    let a = 60 - (item % 60);
    while (a <= 500) {
      if (hash.has(a)) {
        res += hash.get(a);
      }
      a += 60;
    }
    hash.has(item) ? hash.set(item, hash.get(item) + 1) : hash.set(item, 1);
  }
  return res;
};
