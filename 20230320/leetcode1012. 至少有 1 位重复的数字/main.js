/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-20 08:56:32                                                  *
 * @LastModifiedDate: 2023-03-20 09:51:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} n
 * @return {number}
 */
var numDupDigitsAtMostN = function (n) {
  // 算出没有一位重复数字的个数
  const str = n.toString();
  const len = str.length;
  const hash = new Array(len).fill(0).map(() => new Array(1024).fill(-1));
  // isLimit表示是否都选的最大的
  // hasChoose表示前面是否已经有选择（可能都是0）
  // i表示当前选择的位
  // mask表示选择了的数字
  const dfs = (i, mask, isLimit, hasChoose) => {
    if (i === len) {
      // 结束选择
      return hasChoose ? 1 : 0; // 表示已经选择
    }
    // 仅考虑没有限制且已选择的情况
    if (!isLimit && hasChoose && hash[i][mask] !== -1) return hash[i][mask];
    let res = 0;
    if (!hasChoose) res += dfs(i + 1, mask, false, false); // 继续不选择
    // 进行选择的情况
    let topLimit = isLimit ? parseInt(str[i]) : 9;
    let start = hasChoose ? 0 : 1; // 没有选择必须从1开始，0的情况已经单独考虑
    for (let d = start; d <= topLimit; d++) {
      if (((mask >> d) & 1) === 0) {
        // 选择没有被选的数字
        res += dfs(i + 1, mask | (1 << d), isLimit && d === topLimit, true);
      }
    }
    if (!isLimit && hasChoose) hash[i][mask] = res;
    return res;
  };
  return n - dfs(0, 0, true, false);
};
