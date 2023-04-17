/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-17 08:42:15                                                  *
 * @LastModifiedDate: 2023-04-17 09:19:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Alice 和 Bob 计划分别去罗马开会。

// 给你四个字符串 arriveAlice ，leaveAlice ，arriveBob 和 leaveBob 。Alice 会在日期 arriveAlice 到 leaveAlice 之间在城市里（日期为闭区间），而 Bob 在日期 arriveBob 到 leaveBob 之间在城市里（日期为闭区间）。每个字符串都包含 5 个字符，格式为 "MM-DD" ，对应着一个日期的月和日。

// 请你返回 Alice和 Bob 同时在罗马的天数。

// 你可以假设所有日期都在 同一个 自然年，而且 不是 闰年。每个月份的天数分别为：[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] 。

// 非闰年
const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

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
  arriveAlice = arriveAlice.split("-").map((v) => parseInt(v));
  leaveAlice = leaveAlice.split("-").map((v) => parseInt(v));
  arriveBob = arriveBob.split("-").map((v) => parseInt(v));
  leaveBob = leaveBob.split("-").map((v) => parseInt(v));
  if (
    compareTwoDay(arriveBob, leaveAlice) === 1 ||
    compareTwoDay(arriveAlice, leaveBob) === 1
  )
    return 0;
  const res1 = compareTwoDay(arriveAlice, arriveBob);
  const res2 = compareTwoDay(leaveAlice, leaveBob);
  const start = res1 > 0 ? arriveAlice : arriveBob;
  const end = res2 > 0 ? leaveBob : leaveAlice;
  return getDays(start, end);
};

/**
 * @description 比较date1和date2的大小，前者大就返回1，相等返回0,否则返回-1
 * @param {number[]} date1 日期1
 * @param {number[]} date2 日期2
 * @returns {number}
 */
var compareTwoDay = function (date1, date2) {
  if (date1[0] > date2[0]) return 1;
  if (date1[0] < date2[0]) return -1;
  if (date1[1] > date2[1]) return 1;
  if (date1[1] < date2[1]) return -1;
  return 0;
};
/**
 * @description date1和date2日期间隔
 * @param {number[]} date1 日期1
 * @param {number[]} date2 日期2
 * @returns {number}
 */
var getDays = function (date1, date2) {
  if (date1[0] === date2[0]) {
    return date2[1] - date1[1] + 1;
  }
  let res = DAYS[date1[0] - 1] - date1[1] + 1 + date2[1];
  for (let i = date1[0] + 1; i < date2[0]; i++) {
    res += DAYS[i - 1];
  }
  return res;
};
