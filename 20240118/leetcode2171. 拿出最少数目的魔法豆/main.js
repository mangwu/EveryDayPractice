/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-18 08:57:30                                                  *
 * @LastModifiedDate: 2024-01-18 09:21:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个 正整数 数组 beans ，其中每个整数表示一个袋子里装的魔法豆的数目。

// 请你从每个袋子中 拿出 一些豆子（也可以 不拿出），使得剩下的 非空 袋子中（即 至少还有一颗 魔法豆的袋子）魔法豆的数目 相等。一旦把魔法豆从袋子中取出，你不能再将它放到任何袋子中。

// 请返回你需要拿出魔法豆的 最少数目。

/**
 * @param {number[]} beans
 * @return {number}
 */
var minimumRemoval = function (beans) {
  beans.sort((a, b) => a - b);
  const n = beans.length;
  // 前缀和
  const prefix = [0];
  for (const bean of beans) {
    prefix.push(prefix[prefix.length - 1] + bean);
  }
  let ans = Infinity;
  for (let i = 0; i < n; i++) {
    // 选择当前元素作为相等元素
    ans = Math.min(
      ans,
      prefix[i] - prefix[0] + prefix[n] - prefix[i + 1] - beans[i] * (n - i - 1)
    );
  }
  return ans;
};
// 1 4 5 6

// 1 5 10 16

// 16
// 15 - 3 = 12
// 1 + 11 - 2 * 4 = 4
// 5 + 6 - 1 * 5 = 6
