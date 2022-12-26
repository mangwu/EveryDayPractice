/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-25 11:08:11                                                  *
 * @LastModifiedDate: 2022-12-26 14:53:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
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
  price.sort((a, b) => a - b);
  // 二分查找
  // 最小的甜蜜度就是0，无论什么情况0都是满足条件的
  // 最大的甜美度和price的最大和最小值之差有关系
  // 如果k为2，最大甜美度就是price[-1] - price[0]
  // k增大会减少最大甜美度(price[-1] - price[0]) / (k-1)
  // 可以进行选择合适甜蜜度的操作
  // 例如[1,2,5,8,13,21]
  // 猜甜蜜度为7，那么从1 -> 8 -> 21 是可以的，那么小于7的甜蜜度都是可以选出来的
  // 继续猜甜蜜度为9，那么 1 -> 13 -> fail，无法找到满足的区间，所以9以及大于9的甜蜜度都是不行的
  // 利用二分思想，找到8，那么1 -> 13 -> 21是可以的，所以最大甜蜜度就是8
  let left = 0;
  let right = Math.floor((price[price.length - 1] - price[0]) / (k - 1));

  const check = (d) => {
    let cnt = 1; // 从第一个元素开始
    let x0 = price[0];
    for (const x of price) {
      if (x >= x0 + d) {
        // x可以选择
        cnt++;
        x0 = x;
      }
    }
    return cnt >= k;
  };
  while (left <= right) {
    let mid = (left + right) >> 1;
    // 检查是否成立
    if (check(mid)) {
      // mid是满足条件的
      left = mid + 1;
    } else {
      // 不满足条件
      right = mid - 1;
    }
  }
  return left - 1;
};
