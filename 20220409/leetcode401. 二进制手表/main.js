/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-09 23:06:35                                                  *
 * @LastModifiedDate: 2022-04-10 21:12:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  // 因为时针最多亮三个，分针最多亮5个，所以超过8的灯数没有结果
  if (turnedOn > 8) {
    return [];
  }
  const ans = [];
  // 首先确定时针
  for (let i = 0; i <= Math.min(turnedOn, 3); i++) {
    // 分针个数
    let m = turnedOn - i;
    if (m > 5) {
      continue;
    }
    for (const hour of hours[i]) {
      for (const minute of minutes[m]) {
        ans.push(hour + ":" + minute);
      }
    }
  }
  return ans;
};

// 时针的情况
const hours = {
  0: ["0"],
  1: ["1", "2", "4", "8"],
  2: ["3", "5", "6", "9", "10"],
  3: ["7", "11"],
};
// 分针的情况
const minutes = {
  0: ["00"],
  1: ["01", "02", "04", "08", "16", "32"],
  2: [
    "03",
    "05",
    "09",
    "17",
    "33",
    "06",
    "10",
    "18",
    "34",
    "12",
    "20",
    "36",
    "24",
    "40",
    "48",
  ],
  3: [
    "07",
    "11",
    "19",
    "35",
    "13",
    "21",
    "37",
    "25",
    "41",
    "14",
    "22",
    "28",
    "38",
    "26",
    "42",
    "49",
    "50",
    "44",
    "52",
    "56",
  ],
  4: [
    "15",
    "23",
    "27",
    "29",
    "30",
    "39",
    "43",
    "45",
    "46",
    "51",
    "53",
    "54",
    "57",
    "58",
  ],
  5: ["31", "47", "55", "59"],
};

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  // 因为时针最多亮三个，分针最多亮5个，所以超过8的灯数没有结果
  if (turnedOn > 8) {
    return [];
  }
  const ans = [];
  // 首先确定时针
  for (let i = 0; i <= Math.min(turnedOn, 3); i++) {
    // 分针个数
    let m = turnedOn - i;
    if (m > 5) {
      continue;
    }
    // 不使用已经定义好的，手动计算
    for (const hour of HOURS[i]) {
      for (const minute of MINUTES[m]) {
        ans.push(hour + ":" + minute);
      }
    }
  }
  return ans;
};
const HOURS = [];
const MINUTES = [];
// 枚举获得所有时分钟的情况
const getAllStatus = () => {
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      // 计算h的亮灯数,先进h转化位二进制字符串，再以0为分割就能得到1的个数
      const hnum = h.toString(2).split("0").join("").length;
      const mnum = m.toString(2).split("0").join("").length;
      let minute = m.toString();
      if (m < 10) {
        minute = "0" + minute;
      }
      if (HOURS[hnum]) {
        HOURS[hnum].add(h.toString());
      } else {
        HOURS[hnum] = new Set();
        HOURS[hnum].add(h.toString());
      }
      if (MINUTES[mnum] == undefined) {
        MINUTES[mnum] = new Set();
        MINUTES[mnum].add(minute);
      } else {
        MINUTES[mnum].add(minute);
      }
    }
  }
};
getAllStatus();
