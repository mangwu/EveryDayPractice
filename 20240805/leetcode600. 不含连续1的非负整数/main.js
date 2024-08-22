/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-08-05 09:16:54                                                  *
 * @LastModifiedDate: 2024-08-05 15:46:35                                      *
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
var findIntegers = function (n) {
  const str = n.toString(2);
  const strLen = str.length;
  if (n <= 2) return n + 1;
  const cache = new Array(strLen).fill(-1).map((v) => new Array(2).fill(-1));
  /**
   * @description
   * @param {boolean} isZero 前面是否都为0
   * @param {boolean} isLimit 前面是否都是限制的str
   * @param {number} i 当前索引
   * @param {number} preBit 前一个索引选择的数字
   * @returns {number}
   */
  const dfs = (isZero, isLimit, i, preBit) => {
    if (i === strLen) {
      // 结束遍历
      return 1; // 包含0的情况，所以直接返回1
    }
    let res = 0;
    if (i === 0) {
      res = dfs(false, true, i + 1, 1) + dfs(true, false, i + 1, 0);
      cache[i][preBit] = res;
      return res;
    }
    if (cache[i][preBit] !== -1) return cache[i][preBit];
    if (isZero) {
      // 前面都为0，本次可以继续选择0
      res += dfs(true, false, i + 1, 0);
      if (str[i] === "1") {
        // 本次不选0，选择1
        res += dfs(false, false, i + 1, 1);
      }
      cache[i][preBit] = res;
      return res;
    }
    if (isLimit) {
      // 有限制
      const curNum = parseInt(str[i]);
      let up = Math.min(curNum, 1 - preBit);
      for (let j = 0; j <= up; j++) {
        res += dfs(false, j === curNum, i + 1, j);
      }
      cache[i][preBit] = res;
      return res;
    }
    // 无限制，不是0，只和preBit有关
    res += dfs(false, false, i + 1, 0); // 选择0
    if (preBit !== 1) {
      res += dfs(false, false, i + 1, 1);
    }
    cache[i][preBit] = res;
    return res;
  };
  const res = dfs(true, true, 0, 0);
  console.log(cache);
  return res;
};

/**
 * @param {number} n
 * @return {number}
 */
var findIntegers = function (n) {
  const str = n.toString(2);
  const strLen = str.length;
  if (n === 0) return 1;
  const cache = new Array(strLen).fill(-1).map((v) => new Array(2).fill(-1));
  /**
   * @description
   * @param {boolean} isLimit 前面是否都是限制的str
   * @param {number} i 当前索引
   * @param {number} preBit 前一个索引选择的数字
   * @returns {number}
   */
  const dfs = (isLimit, i, preBit) => {
    if (i === strLen) {
      // 结束遍历
      return 1; // 包含0的情况，所以直接返回1
    }
    if (!isLimit && cache[i][preBit] !== -1) return cache[i][preBit];
    let res = 0;
    let high = isLimit ? Math.min(parseInt(str[i]), 1 - preBit) : 1 - preBit;
    for (let d = 0; d <= high; d++) {
      res += dfs(isLimit && d === parseInt(str[i]), i + 1, d);
    }
    cache[i][preBit] = res;
    return cache[i][preBit];
  };
  const res = dfs(true, 0, 0);
  return res;
};
