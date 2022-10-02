/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-02 10:43:39                                                  *
 * @LastModifiedDate: 2022-10-02 11:20:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个正整数 num1 和 num2 ，找出满足下述条件的整数 x ：

// x 的置位数和 num2 相同，且
// x XOR num1 的值 最小
// 注意 XOR 是按位异或运算。

// 返回整数 x 。题目保证，对于生成的测试用例， x 是 唯一确定 的。

// 整数的 置位数 是其二进制表示中 1 的数目。

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function (num1, num2) {
  let one2 = 0;
  while (num2 > 0) {
    if ((num2 & 1) == 1) {
      one2++;
    }
    num2 >>= 1;
  }
  const int32Arr = new Array(31).fill(0);
  for (let i = 0; i < 31; i++) {
    if (((num1 >> i) & 1) === 1) {
      int32Arr[30 - i] = 1;
    }
  }
  const ans = new Array(31).fill(0);
  let i = 0;
  while (one2 > 0 && i < 31) {
    while (int32Arr[i] === 0) {
      i++;
    }
    console.log(i);
    if (i < 31) {
      ans[i] = 1;
      i++;
      one2--;
    }
  }
  let j = 30;
  while (one2 > 0) {
    if (ans[j] === 0) {
      ans[j] = 1;
      one2--;
      j--;
    } else {
      j--;
    }
  }
  return parseInt(ans.join(""), 2);
};
minimizeXor(1, 12);
