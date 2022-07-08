/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-08 10:30:15                                                  *
 * @LastModifiedDate: 2022-07-08 10:32:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 假设有若干信号发射源定时发送信号， signals[i] = [start, end)
//   表示第 i 个信号发射源运作的开始时间 start 和停止时间 end 。

//   若调度员的接收设备同一时刻仅能接收一个发射源发出的信号，请判断调度员能否收到所有发射源的完整信号。

//   注意：只有接收了一个信号源从开始到结束的所有信号才算完整信号。

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canReceiveAllSignals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const n = intervals.length;
  for (let i = 1; i < n; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }
  return true;
};
