/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-23 20:49:15                                                  *
 * @LastModifiedDate: 2023-04-23 22:29:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个数组 books ，其中 books[i] = [thicknessi, heighti] 表示第 i 本书的厚度和高度。你也会得到一个整数 shelfWidth 。

// 按顺序 将这些书摆放到总宽度为 shelfWidth 的书架上。

// 先选几本书放在书架上（它们的厚度之和小于等于书架的宽度 shelfWidth ），然后再建一层书架。重复这个过程，直到把所有的书都放在书架上。

// 需要注意的是，在上述过程的每个步骤中，摆放书的顺序与你整理好的顺序相同。

// 例如，如果这里有 5 本书，那么可能的一种摆放情况是：第一和第二本书放在第一层书架上，第三本书放在第二层书架上，第四和第五本书放在最后一层书架上。
// 每一层所摆放的书的最大高度就是这一层书架的层高，书架整体的高度为各层高之和。

// 以这种方式布置书架，返回书架整体可能的最小高度。

/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
  const n = books.length;
  // 动态规划
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    let [curThickness, curHeight] = books[i - 1];
    dp[i] = dp[i - 1] + curHeight;
    for (let j = i - 2; j >= 0; j--) {
      const [preThickness, preHeight] = books[j];
      curThickness += preThickness;
      if (curThickness <= shelfWidth) {
        curHeight = Math.max(curHeight, preHeight);
        dp[i] = Math.min(dp[i], dp[j] + curHeight);
      } else {
        break;
      }
    }
  }
  return dp[n];
};
