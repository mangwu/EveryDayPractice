/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-20 10:04:08                                                  *
 * @LastModifiedDate: 2024-09-20 15:47:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function (n) {
  const str = n.toString();
  const len = str.length;
  const cache = new Array(len).fill(-1).map((v) => new Array(1 << 10).fill(-1));
  const dfs = (i, isLimit, isZero, mask) => {
    if (i === len) {
      // 前面都是0就返回0，因为不包括0
      return isZero ? 0 : 1;
    }
    // 无特殊情况下检查cache
    if (!isLimit && !isZero && cache[i][mask] !== -1) return cache[i][mask];
    let res = 0;
    const curNum = parseInt(str[i]);
    // 前面都是0的情况，可以继续取0
    if (isZero) res += dfs(i + 1, false, true, mask);
    // 一般判断
    let low = isZero ? 1 : 0; // 
    let high = isLimit ? curNum : 9;
    for (let d = low; d <= high; d++) {
      if (((mask >> d) & 1) === 0) {
        res += dfs(i + 1, isLimit && curNum === d, false, mask | (1 << d));
      }
    }
    if (!isLimit && !isZero) cache[i][mask] = res;
    return res;
  };
  return dfs(0, true, true, 0);
};
