/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-08-21 08:51:17                                                  *
 * @LastModifiedDate: 2024-08-22 00:55:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 k 和一个整数 x 。整数 num 的价值是它的二进制表示中在 x，2x，3x 等位置处
// 设置位
//  的数目（从最低有效位开始）。下面的表格包含了如何计算价值的例子。
// num 的 累加价值 是从 1 到 num 的数字的 总 价值。如果 num 的累加价值小于或等于 k 则被认为是 廉价 的。

// 请你返回 最大 的廉价数字。

/**
 * @param {number} k
 * @param {number} x
 * @return {number}
 */
var findMaximumNumber = function (k, x) {
  // 二分查找
  const check = (mid) => {
    let res = 0;
    const binaryStr = mid.toString(2);
    const len = binaryStr.length;
    for (let i = x - 1; i < len; i += x) {
      const idx = len - i - 1;
      let curBinaryStr = binaryStr;
      if (binaryStr[idx] === "0") {
        let firstOne = binaryStr.indexOf("1", idx);
        if (firstOne === -1) {
          firstOne = 0;
        } else {
          firstOne = len - firstOne;
        }
        curBinaryStr = (mid - Math.pow(2, firstOne))
          .toString(2)
          .padStart(len, 0);
      }
      const left =
        idx > 0 ? parseInt(curBinaryStr.substring(0, idx), 2) + 1 : 1;
      const right =
        idx < len - 1 ? parseInt(curBinaryStr.substring(idx + 1), 2) + 1 : 1;
      res += Math.max(left - 1, 0) * Math.pow(2, i) + right;
    }
    return res <= k;
  };
  let left = 1;
  let right = Math.pow(2, 50);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      left = mid + 1;
    } else right = mid - 1;
  }
  return right;
};

// findMaximumNumber(9, 1);
// findMaximumNumber(7, 2);
