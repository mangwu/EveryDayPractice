/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-15 22:31:08                                                  *
 * @LastModifiedDate: 2022-10-15 22:41:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 5 的字符串 time ，表示一个电子时钟当前的时间，格式为 "hh:mm" 。最早 可能的时间是 "00:00" ，最晚 可能的时间是 "23:59" 。

// 在字符串 time 中，被字符 ? 替换掉的数位是 未知的 ，被替换的数字可能是 0 到 9 中的任何一个。

// 请你返回一个整数 answer ，将每一个 ? 都用 0 到 9 中一个数字替换后，可以得到的有效时间的数目。

/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
  const [hours, minutes] = time.split(":");
  let hoursOps = 0;
  let minutesOps = 0;
  if (hours == "??") {
    hoursOps = 24;
  } else if (hours.includes("?")) {
    if (hours[0] == "?") {
      let end = parseInt(hours[1]);
      if (end <= 3) {
        hoursOps = 3;
      } else {
        hoursOps = 2;
      }
    } else {
      let start = parseInt(hours[0]);
      if (start === 2) {
        hoursOps = 4;
      } else {
        hoursOps = 10;
      }
    }
  } else {
    hoursOps = 1;
  }
  if (minutes == "??") {
    minutesOps = 60;
  } else if (minutes.includes("?")) {
    if (minutes[0] == "?") {
      minutesOps = 6;
    } else {
      minutesOps = 10;
    }
  } else {
    minutesOps = 1;
  }
  console.log(hoursOps, minutesOps);
  return hoursOps * minutesOps;
};
