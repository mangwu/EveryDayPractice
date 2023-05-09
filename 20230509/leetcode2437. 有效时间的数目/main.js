/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-09 09:00:45                                                  *
 * @LastModifiedDate: 2023-05-09 09:20:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 5 的字符串 time ，表示一个电子时钟当前的时间，格式为 "hh:mm" 。
// 最早 可能的时间是 "00:00" ，最晚 可能的时间是 "23:59" 。

// 在字符串 time 中，被字符 ? 替换掉的数位是 未知的 ，被替换的数字可能是 0 到 9 中的任何一个。

// 请你返回一个整数 answer ，将每一个 ? 都用 0 到 9 中一个数字替换后，可以得到的有效时间的数目。
/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
  const arr = time.split(":");
  return getHourTime(arr[0]) * getMinuteTime(arr[1]);
};

var getHourTime = function (hours) {
  if (hours[0] === "?" && hours[1] === "?") {
    return 24;
  }
  if (hours[0] === "?") {
    return hours[1] < 4 ? 3 : 2;
  }
  if (hours[1] === "?") {
    return hours[0] < 2 ? 10 : 4;
  }
  return 1;
};

var getMinuteTime = function (minutes) {
  if (minutes[0] === "?" && minutes[1] === "?") {
    return 60;
  }
  if (minutes[0] === "?") {
    return 6;
  }
  if (minutes[1] === "?") {
    return 10;
  }
  return 1;
};
