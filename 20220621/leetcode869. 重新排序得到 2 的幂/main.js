/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-21 09:47:10                                                  *
 * @LastModifiedDate: 2022-06-21 10:31:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定正整数 n ，我们按任何顺序（包括原始顺序）将数字重新排序，注意其前导数字不能为零。

// 如果我们可以通过上述方式得到 2 的幂，返回 true；否则，返回 false。

/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
  // n 最多有9位，最多有A99中排法
  // A99的数量级过大，所以不能一一枚举
  // 但是2的幂次方的个数可以一一枚举，只要保证2^x <= 10 ^ 9即可
  let k = n.toString();
  const arr = new Array(10).fill(0);
  for (const ch of k) {
    arr[ch]++;
  }
  if (powerOf2.has(arr.toString())) {
    return true;
  }
  return false;
};

// 计算获得2^x各个情况下的0 - 9 个数
const powerOf2 = new Set();
let idx = 0;
while (Math.pow(2, idx) <= Math.pow(10, 9)) {
  let k = Math.pow(2, idx).toString();
  const arr = new Array(10).fill(0);
  for (const ch of k) {
    arr[ch]++;
  }
  powerOf2.add(arr.toString());
  idx++;
}
