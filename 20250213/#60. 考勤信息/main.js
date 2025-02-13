/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-13 23:51:11                                                  *
 * @LastModifiedDate: 2025-02-14 00:02:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 公司用一个字符串来表示员工的出勤信息

// absent：缺勤
// ate：迟到
// eaveearly：早退
// present：正常上班
// 现需根据员工出勤信息，判断本次是否能获得出勤奖，能获得出勤奖的条件如下： 1、缺勤不超过一次； 2、没有连续的迟到/早退； 3、任意连续7次考勤，缺勤/迟到/早退不超过3次。

// 输入描述 用户的考勤数据字符串

// 记录条数 >= 1；
// 输入字符串长度 < 10000；
// 不存在非法输入；

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  const strs = [];
  for (let i = 1; i <= n; i++) {
    strs.push(inputs[i].split(" "));
  }
  const isGood1 = (nums) => {
    return nums.reduce((pre, cur) => (cur === "absent" ? ++pre : pre), 0) <= 1;
  };
  const isGood2 = (nums) => {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === "leaveearly" || nums[i] === "late") {
        if (nums[i - 1] === "leaveearly" || nums[i - 1] === "late")
          return false;
      }
    }
    return true;
  };
  const isGood3 = (nums) => {
    let errorNum = 0;
    for (let i = 0; i < Math.min(7, nums.length); i++) {
      if (nums[i] !== "present") errorNum++;
    }
    if (errorNum > 3) return false;
    for (let i = 7; i < nums.length; i++) {
      if (nums[i] !== "present") errorNum++;
      if (nums[i - 7] !== "present") errorNum--;
      if (errorNum > 3) return false;
    }
    return true;
  };
  const isGood = (nums) => {
    return isGood1(nums) && isGood2(nums) && isGood3(nums);
  };
  const res = [];
  for (const str of strs) {
    res.push(isGood(str));
  }
  console.log(res.join(" "));
}
solution();
