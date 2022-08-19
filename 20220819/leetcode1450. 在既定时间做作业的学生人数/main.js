/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-19 08:54:17                                                  *
 * @LastModifiedDate: 2022-08-19 08:56:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数数组 startTime（开始时间）和 endTime（结束时间），并指定一个整数 queryTime 作为查询时间。

// 已知，第 i 名学生在 startTime[i] 时开始写作业并于 endTime[i] 时完成作业。

// 请返回在查询时间 queryTime 时正在做作业的学生人数。
// 形式上，返回能够使 queryTime 处于区间 [startTime[i], endTime[i]]（含）的学生人数。

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  const n = startTime.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      ans++;
    }
  }
  return ans;
};
