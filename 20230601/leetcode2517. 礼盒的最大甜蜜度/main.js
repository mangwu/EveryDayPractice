/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-01 09:00:29                                                  *
 * @LastModifiedDate: 2023-06-01 09:18:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数数组 price ，其中 price[i] 表示第 i 类糖果的价格，另给你一个正整数 k 。

// 商店组合 k 类 不同 糖果打包成礼盒出售。礼盒的 甜蜜度 是礼盒中任意两种糖果 价格 绝对差的最小值。

// 返回礼盒的 最大 甜蜜度。
/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function (price, k) {
  // 选择差值最大的k个糖果
  price.sort((a, b) => a - b);
  const n = price.length;
  // 二分查找
  let left = 0;
  let right = price[n - 1] - price[0];
  const check = (mid) => {
    let cur = price[0] + mid;
    let m = 1;
    for (let i = 1; i < n; i++) {
      if (price[i] >= cur) {
        m++;
        cur = price[i] + mid;
        if (m === k) return true;
      }
    }
    return false;
  };
  while (left < right) {
    const mid = (left + right) >> 1;
    // 检查mid是否满足条件
    if (check(mid)) {
      // 满足
      left = mid + 1;
    } else {
      // 不满足
      right = mid - 1;
    }
  }
  return right;
};
