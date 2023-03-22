/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-22 08:57:38                                                  *
 * @LastModifiedDate: 2023-03-22 17:35:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 假设你是球队的经理。对于即将到来的锦标赛，你想组合一支总体得分最高的球队。球队的得分是球队中所有球员的分数 总和 。

// 然而，球队中的矛盾会限制球员的发挥，所以必须选出一支 没有矛盾 的球队。如果一名年龄较小球员的分数 严格大于 一名年龄较大的球员，则存在矛盾。同龄球员之间不会发生矛盾。

// 给你两个列表 scores 和 ages，其中每组 scores[i] 和 ages[i] 表示第 i 名球员的分数和年龄。请你返回 所有可能的无矛盾球队中得分最高那支的分数 。

//
/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
  // 按照年龄进行排序
  const infos = [];
  const n = scores.length;
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    if (hash.has(ages[i])) {
      infos[hash.get(ages[i])].score.push(scores[i]);
    } else {
      hash.set(ages[i], infos.length);
      infos.push({ age: ages[i], score: [scores[i]] });
    }
  }
  infos.sort((a, b) => a.age - b.age);
  const dp = [];
  for (const { score } of infos) {
    score.sort((a, b) => a - b);
    dp.push(new Array(score.length).fill(0));
  }
  const len = infos.length;
  let res = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < infos[i].score.length; j++) {
      let left = j > 0 ? dp[i][j - 1] : 0;
      let top = 0;
      if (i > 0) {
        // 寻找当前可以从上面流传下来的值
        let start = i - 1;
        while (start >= 0) {
          if (infos[start].score[0] <= infos[i].score[j]) {
            const score = infos[start].score;
            // 二分查找，找到第一个大于它的索引
            let left = 0;
            let right = score.length;
            while (left < right) {
              let mid = (left + right) >> 1;
              if (score[mid] <= infos[i].score[j]) {
                left = mid + 1;
              } else {
                right = mid;
              }
            }
            top = Math.max(dp[start][right - 1], top);
          }
          // 如果上一个的分数全部大于当前，则需继续向上查找
          start--;
        }
      }
      dp[i][j] = Math.max(left, top) + infos[i].score[j];
      res = Math.max(res, dp[i][j]);
    }
  }
  return res;
};
// ages  scores
//  1    [3,5,6]
//  2    [2,5,7]
//  3    [3,6,8]

// 相当于进行

// [3,5,6,2,5,7,3,6,8,9,5,2,4,7,8,11,12,13,14,5,9,8,6]
// [5,2,3,5,4,1,2,3,6,8,1,10,2,6,8,4,2,11,13,10,4,5,3]

// { age: 1, score: [ 5, 7 ] },
// { age: 2, score: [ 3, 4, 5, 12 ] },
// { age: 3, score: [ 6, 6, 6 ] },
// { age: 4, score: [ 5, 9, 11 ] },
// { age: 5, score: [ 2, 3, 8 ] },
// { age: 6, score: [ 7, 8 ] },
// { age: 8, score: [ 8, 9 ] },
// { age: 10, score: [ 2, 5 ] },
// { age: 11, score: [ 13 ] },
// { age: 13, score: [ 14 ] }

const { randomArr } = require("../../publicFunc/random/random");
console.log(bestTeamScore(randomArr(1000, 1), randomArr(1000, 1)));

// 如果按照分数进行排序
// score    ages
// 2        [2,4]
// 3        [1]
// 5        [3,6]
// 7        [3,5,7]

// [2,2],[2,4],[3,1],[5,3],[5,6],[7,3],[7,5],[7,7]

/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
  const n = scores.length;
  const people = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    people[i] = [scores[i], ages[i]];
  }
  // 按照分数和年龄进行排序
  people.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  // 动态规划
  const dp = new Array(n).fill(0);
  dp[0] = people[0][0]; // 按照分数排序，所以组建的球队最后一名的球员的分数一定最大
  let res = dp[0];
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (people[i][1] >= people[j][1]) {
        // 要保证分数小的前面的队员年纪比当前队员小，否则会产生矛盾
        // 因为分数相同的队员按照年纪进行了排序，所以无需考虑分数相同时队员年纪的情况
        dp[i] = Math.max(dp[i], dp[j]);
      }
    }
    dp[i] += people[i][0];
    res = Math.max(res, dp[i]);
  }
  return res;
};
