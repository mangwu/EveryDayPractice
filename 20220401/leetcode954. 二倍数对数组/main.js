/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-01 23:01:09                                                  *
 * @LastModifiedDate: 2022-04-01 23:22:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个长度为偶数的整数数组 arr，只有对 arr 进行重组后可以满足 “对于每个 0 <= i < len(arr) / 2，
// 都有 arr[2 * i + 1] = 2 * arr[2 * i]” 时，返回 true；否则，返回 false。

// [0,1,2,3,4,5] 2 - 5   1 - 3    0 - 1
// [0,1,2,3,4,5,6,7] 3 - 7 2 - 5

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
  // 实际上就是数组中的每两组都满足两倍关系 (包括0和0)
  arr.sort((a, b) => a - b);
  const hash = new Map();
  for (const a of arr) {
    const num = hash.get(a) ? hash.get(a) : 0;
    hash.set(a, num + 1);
  }
  for (const [key, num] of hash) {
    if (key < 0 && num !== 0) {
      const num2 = hash.get(key / 2) ? hash.get(key / 2) : 0;
      if (num2 < num) {
        return false;
      }
      hash.set(key, 0);
      hash.set(key / 2, num2 - num);
    } else if (key == 0) {
      if (num % 2 == 1) {
        return false;
      }
    } else if (key > 0 && num !== 0) {
      const num2 = hash.get(key * 2) ? hash.get(key * 2) : 0;
      if (num2 < num) {
        return false;
      }
      hash.set(key, 0);
      hash.set(key * 2, num2 - num);
    }
  }
  return true;
};
