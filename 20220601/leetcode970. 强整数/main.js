/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-01 11:28:20                                                  *
 * @LastModifiedDate: 2022-06-01 13:48:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定三个整数 x 、 y 和 bound ，返回 值小于或等于 bound 的所有 强整数 组成的列表 。

// 如果某一整数可以表示为 xi + yj ，其中整数 i >= 0 且 j >= 0，那么我们认为该整数是一个 强整数 。

// 你可以按 任何顺序 返回答案。在你的回答中，每个值 最多 出现一次。

/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
  let ans = [];
  // 特殊情况
  if (x == 1 && y !== 1) {
    let idx = 0;
    while (x + y ** idx <= bound) {
      ans.push(x + y ** idx);
      idx++;
    }
    return ans;
  } else if (x !== 1 && y == 1) {
    let idx = 0;
    while (x ** idx + y <= bound) {
      ans.push(x ** idx + y);
      idx++;
    }
    return ans;
  } else if (x == 1 && y == 1) {
    if (x + y <= bound) {
      ans.push(x + y);
    }
    return ans;
  }
  // 都不是1的情况
  // 分别计算x和y的最大指数幂
  let m = 0;
  const set = new Set();
  while (1 + y ** m <= bound) {
    set.add(1 + y ** m);
    m++;
  }
  let n = 0;
  while (x ** n + 1 <= bound) {
    set.add(x ** n + 1);
    n++;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (x ** j + y ** i <= bound) {
        set.add(x ** j + y ** i);
      }
    }
  }
  for (const val of set) {
    ans.push(val);
  }
  return ans;
};

// 2 2 10
// 1 + 1/2/4/6
