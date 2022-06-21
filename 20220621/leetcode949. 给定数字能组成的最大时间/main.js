/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-21 10:37:41                                                  *
 * @LastModifiedDate: 2022-06-21 14:04:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个由 4 位数字组成的数组，返回可以设置的符合 24 小时制的最大时间。

// 24 小时格式为 "HH:MM" ，其中 HH 在 00 到 23 之间，MM 在 00 到 59 之间。
// 最小的 24 小时制时间是 00:00 ，而最大的是 23:59 。从 00:00 （午夜）开始算起，过得越久，时间越大。

// 以长度为 5 的字符串，按 "HH:MM" 格式返回答案。如果不能确定有效时间，则返回空字符串。

/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function (arr) {
  // const set = new Set(arr); // 重复元素会有问题，
  const hash = new Map();
  for (const val of arr) {
    if (hash.has(val)) {
      hash.set(val, hash.get(val) + 1);
    } else {
      hash.set(val, 1);
    }
  }
  let ans = "";
  const dfs = (idx, pre) => {
    if (idx == 4) {
      ans = timeMax(ans, pre);
      return;
    }
    if (idx == 0) {
      for (const [key, val] of [...hash]) {
        if (key >= 0 && key <= 2) {
          if (val == 1) {
            hash.delete(key);
          } else {
            hash.set(key, val - 1);
          }
          let newPre = pre + key;
          dfs(idx + 1, newPre);
          hash.set(key, val);
        }
      }
    }
    if (idx == 1) {
      if (pre == "0" || pre == "1") {
        for (const [key, val] of [...hash]) {
          if (val == 1) {
            hash.delete(key);
          } else {
            hash.set(key, val - 1);
          }
          let newPre = pre + key + ":";
          dfs(idx + 1, newPre);
          hash.set(key, val);
        }
      } else {
        for (const [key, val] of [...hash]) {
          if (key >= 0 && key <= 3) {
            if (val == 1) {
              hash.delete(key);
            } else {
              hash.set(key, val - 1);
            }
            let newPre = pre + key + ":";
            dfs(idx + 1, newPre);
            hash.set(key, val);
          }
        }
      }
    }
    if (idx == 2) {
      for (const [key, val] of [...hash]) {
        if (key >= 0 && key <= 5) {
          if (val == 1) {
            hash.delete(key);
          } else {
            hash.set(key, val - 1);
          }
          let newPre = pre + key;
          dfs(idx + 1, newPre);
          hash.set(key, val);
        }
      }
    }
    if (idx == 3) {
      for (const [key, val] of [...hash]) {
        if (val == 1) {
          hash.delete(key);
        } else {
          hash.set(key, val - 1);
        }
        let newPre = pre + key;
        dfs(idx + 1, newPre);
        hash.set(key, val);
      }
    }
  };
  dfs(0, "");
  return ans;
};

const timeMax = (time1, time2) => {
  if (time1 == "") {
    return time2;
  }
  const arr1 = time1.split(":").map((v) => parseInt(v));
  const arr2 = time2.split(":").map((v) => parseInt(v));
  let minutes1 = arr1[0] * 60 + arr1[1];
  let minutes2 = arr2[0] * 60 + arr2[1];
  if (minutes1 > minutes2) {
    return time1;
  }
  return time2;
};

largestTimeFromDigits([0, 0, 1, 0]);



// 暴力枚举

