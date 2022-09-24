/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-24 15:00:49                                                  *
 * @LastModifiedDate: 2022-09-24 15:11:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 力扣城计划在两地设立「力扣嘉年华」的分会场，气象小组正在分析两地区的气温变化趋势，对于第 i ~ (i+1) 天的气温变化趋势，将根据以下规则判断：

// 若第 i+1 天的气温 高于 第 i 天，为 上升 趋势
// 若第 i+1 天的气温 等于 第 i 天，为 平稳 趋势
// 若第 i+1 天的气温 低于 第 i 天，为 下降 趋势
// 已知 temperatureA[i] 和 temperatureB[i] 分别表示第 i 天两地区的气温。
// 组委会希望找到一段天数尽可能多，且两地气温变化趋势相同的时间举办嘉年华活动。请分析并返回两地气温变化趋势相同的最大连续天数。

// 即最大的 n，使得第 i~i+n 天之间，两地气温变化趋势相同

/**
 * @param {number[]} temperatureA
 * @param {number[]} temperatureB
 * @return {number}
 */
var temperatureTrend = function (temperatureA, temperatureB) {
  const n = temperatureA.length;
  const atrade = new Array(n).fill(0);
  const btrade = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    atrade[i] =
      temperatureA[i] > temperatureA[i - 1]
        ? 1
        : temperatureA[i] < temperatureA[i - 1]
        ? -1
        : 0;
    btrade[i] =
      temperatureB[i] > temperatureB[i - 1]
        ? 1
        : temperatureB[i] < temperatureB[i - 1]
        ? -1
        : 0;
  }
  let ans = 0;
  let cur = 0;
  for (let i = 1; i < n; i++) {
    if (atrade[i] === btrade[i]) {
      cur++;
      ans = Math.max(cur, ans);
    } else {
      cur = 0;
    }
  }
  return ans;
};
