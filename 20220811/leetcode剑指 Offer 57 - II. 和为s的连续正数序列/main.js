/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-11 10:37:43                                                  *
 * @LastModifiedDate: 2022-08-11 14:13:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  // 获取因数
  const factors = getFactors(target * 2);
  const ans = [];
  let n = factors.length;
  for (let i = n - 1; i >= 0; i--) {
    let factor = factors[i];
    let a2 = (target * 2) / factor - factor + 1;
    if (a2 % 2 == 0) {
      // a是整数
      let a = a2 / 2;
      ans.push(new Array(factor).fill(0).map((_v, i) => i + a));
    }
  }
  return ans;
};

// 开始数为a,结束数为 a + n - 1 共有n个数
// (a + a + n - 1)n / 2 = target
// 70 = 2*35  n = 2 a = 17  连续数字就是 17 18 target是35
var getFactors = (num) => {
  const sqrtNum = Math.sqrt(num);
  let ans = [];
  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i == 0) {
      ans.push(i);
    }
  }
  return ans;
};

// (2a + 1) * 2 = 4
// 输出
