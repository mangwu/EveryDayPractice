/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-02 17:21:45                                                  *
 * @LastModifiedDate: 2023-05-02 17:46:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定三个整数 x 、 y 和 bound ，返回 值小于或等于 bound 的所有 强整数 组成的列表 。

// 如果某一整数可以表示为 xi + yj ，其中整数 i >= 0 且 j >= 0，那么我们认为该整数是一个 强整数 。

// 你可以按 任何顺序 返回答案。在你的回答中，每个值 最多 出现一次。

/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
  if (bound < 2) return [];
  // x 或 y 可以等于1
  if (x == 1 && y == 1) return [2];
  if (x === 1) {
    return specailScene(y, bound);
  } else if (y === 1) {
    return specailScene(x, bound);
  }
  const res = new Set();
  const maxI = Math.log(bound) / Math.log(x);
  const maxJ = Math.log(bound) / Math.log(y);
  for (let i = 0; i <= maxI + 1; i++) {
    let xi = Math.pow(x, i);
    if (xi + 1 > bound) break;
    for (let j = 0; j <= maxJ + 1; j++) {
      let yj = Math.pow(y, j);
      if (xi + yj <= bound) {
        res.add(xi + yj);
      } else {
        break;
      }
    }
  }
  return [...res];
};

function specailScene(m, bound) {
  const maxJ = Math.log(bound) / Math.log(m);
  const res = [];
  for (let i = 0; i <= maxJ + 1; i++) {
    const cur = Math.pow(m, i) + 1;
    if (cur <= bound) {
      res.push(cur);
    } else {
      break;
    }
  }
  return res;
}
