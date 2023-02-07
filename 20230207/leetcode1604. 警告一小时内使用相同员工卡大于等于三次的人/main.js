/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-07 08:56:17                                                  *
 * @LastModifiedDate: 2023-02-07 09:20:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 力扣公司的员工都使用员工卡来开办公室的门。每当一个员工使用一次他的员工卡，安保系统会记录下员工的名字和使用时间。如果一个员工在一小时时间内使用员工卡的次数大于等于三次，这个系统会自动发布一个 警告 。

// 给你字符串数组 keyName 和 keyTime ，其中 [keyName[i], keyTime[i]] 对应一个人的名字和他在 某一天 内使用员工卡的时间。

// 使用时间的格式是 24小时制 ，形如 "HH:MM" ，比方说 "23:51" 和 "09:49" 。

// 请你返回去重后的收到系统警告的员工名字，将它们按 字典序升序 排序后返回。

// 请注意 "10:00" - "11:00" 视为一个小时时间范围内，而 "23:51" - "00:10" 不被视为一小时内，因为系统记录的是某一天内的使用情况。

/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
  const hash = new Map();
  const n = keyName.length;
  for (let i = 0; i < n; i++) {
    hash.has(keyName[i])
      ? hash.get(keyName[i]).push(keyTime[i].split(":").map((v) => parseInt(v)))
      : hash.set(keyName[i], [keyTime[i].split(":").map((v) => parseInt(v))]);
  }
  const res = [];
  for (const [name, times] of hash) {
    times.sort((a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0];
      return a[1] - b[1];
    });
    const len = times.length;
    for (let i = 0; i < len - 2; i++) {
      if (getTimeDiff(times[i], times[i + 2]) <= 60) {
        res.push(name);
        break;
      }
    }
  }
  return res.sort();
};

/**
 *
 * @param {number[]} start 开始时间
 * @param {number[]} end 结束时间
 */
var getTimeDiff = function (start, end) {
  if (end[1] < start[1]) {
    end[1] += 60;
    end[0]--;
  }
  return (end[0] - start[0]) * 60 + end[1] - start[1];
};
