/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-21 10:33:13                                                  *
 * @LastModifiedDate: 2024-06-21 10:44:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 力扣城计划在两地设立「力扣嘉年华」的分会场，气象小组正在分析两地区的气温变化趋势，对于第 i ~ (i+1) 天的气温变化趋势，将根据以下规则判断：

// 若第 i+1 天的气温 高于 第 i 天，为 上升 趋势
// 若第 i+1 天的气温 等于 第 i 天，为 平稳 趋势
// 若第 i+1 天的气温 低于 第 i 天，为 下降 趋势
// 已知 temperatureA[i] 和 temperatureB[i] 分别表示第 i 天两地区的气温。 组委会希望找到一段天数尽可能多，且两地气温变化趋势相同的时间举办嘉年华活动。请分析并返回两地气温变化趋势相同的最大连续天数。

// 即最大的 n，使得第 i~i+n 天之间，两地气温变化趋势相同

/**
 * @param {number[]} temperatureA
 * @param {number[]} temperatureB
 * @return {number}
 */
var temperatureTrend = function (temperatureA, temperatureB) {
  const n = temperatureA.length;
  let res = 0;
  for (let i = 1; i < n; i++) {
    let curRes = 0;
    let aTrend = compareNum(temperatureA[i], temperatureA[i - 1]);
    let bTrend = compareNum(temperatureB[i], temperatureB[i - 1]);
    while (i < n && aTrend === bTrend) {
      curRes++;
      i++;
      aTrend = compareNum(temperatureA[i], temperatureA[i - 1]);
      bTrend = compareNum(temperatureB[i], temperatureB[i - 1]);
    }
    res = Math.max(res, curRes);
  }
  return res;
};
/**
 * @description 比较大小
 * @param {number} a
 * @param {number} b
 * @returns {0|1|-1}
 */
function compareNum(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}
