/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-17 09:02:36                                                  *
 * @LastModifiedDate: 2023-05-17 13:52:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个字符串数组 event1 和 event2 ，表示发生在同一天的两个闭区间时间段事件，其中：

// event1 = [startTime1, endTime1] 且
// event2 = [startTime2, endTime2]
// 事件的时间为有效的 24 小时制且按 HH:MM 格式给出。

// 当两个事件存在某个非空的交集时（即，某些时刻是两个事件都包含的），则认为出现 冲突 。

// 如果两个事件之间存在冲突，返回 true ；否则，返回 false 。

/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
  if (
    time1BigerTime2(event1[0], event2[1]) ||
    time1BigerTime2(event2[0], event1[1])
  ) {
    return false;
  }
  return true;
};

var time1BigerTime2 = function (time1, time2) {
  time1 = time1.split(":").map((v) => parseInt(v));
  time2 = time2.split(":").map((v) => parseInt(v));
  if (time1[0] !== time2[0]) {
    return time1[0] > time2[0];
  }
  return time1[1] > time2[1];
};
