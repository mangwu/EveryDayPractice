/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-17 22:31:06                                                  *
 * @LastModifiedDate: 2022-09-17 23:14:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Alice 和 Bob 计划分别去罗马开会。

// 给你四个字符串 arriveAlice ，leaveAlice ，arriveBob 和 leaveBob 。
// Alice 会在日期 arriveAlice 到 leaveAlice 之间在城市里（日期为闭区间），而 Bob 在日期 arriveBob 到 leaveBob 之间在城市里（日期为闭区间）。每个字符串都包含 5 个字符，格式为 "MM-DD" ，对应着一个日期的月和日。

// 请你返回 Alice和 Bob 同时在罗马的天数。

// 你可以假设所有日期都在 同一个 自然年，而且 不是 闰年。每个月份的天数分别为：[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] 。

const MONTHESDAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (
  arriveAlice,
  leaveAlice,
  arriveBob,
  leaveBob
) {
  const arrive_alice = arriveAlice.split("-").map((v) => parseInt(v));
  const leave_alice = leaveAlice.split("-").map((v) => parseInt(v));
  const arrive_bob = arriveBob.split("-").map((v) => parseInt(v));
  const leave_bob = leaveBob.split("-").map((v) => parseInt(v));
  if (
    isABigerB(arrive_alice, leave_bob) ||
    isABigerB(arrive_bob, leave_alice)
  ) {
    return 0;
  }
  if (isABigerB(leave_alice, leave_bob)) {
    return countDaysTogether(arriveBob, leaveBob, arriveAlice, leaveAlice);
  }
  // end 确定为leave_alice
  if (isABigerB(arrive_alice, arrive_bob)) {
    // start确定为arrive_alice
    return computeDate(arrive_alice, leave_alice);
  } else {
    // start 确定为arrive_bob
    return computeDate(arrive_bob, leave_alice);
  }
};
var isABigerB = function (a, b) {
  if (a[0] > b[0]) {
    return true;
  }
  if (a[0] == b[0] && a[1] > b[1]) {
    return true;
  }
  return false;
};
var computeDate = function (a, b) {
  if (a[0] == b[0]) {
    return b[1] - a[1] + 1;
  }
  let ans = MONTHESDAYS[a[0] - 1] - a[1] + 1 + b[1];
  // 计算a，b之间的天数
  for (let i = a[0]; i < b[0] - 1; i++) {
    ans += MONTHESDAYS[i];
  }
  return ans;
};
