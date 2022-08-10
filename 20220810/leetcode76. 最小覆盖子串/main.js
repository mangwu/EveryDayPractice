/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-10 10:26:38                                                  *
 * @LastModifiedDate: 2022-08-10 11:10:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
// 如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const sLen = s.length;
  const tLen = t.length;
  if (sLen < tLen) {
    return "";
  }
  // 获取t的字母数量
  const tHash = new Map();
  for (const ch of t) {
    if (tHash.has(ch)) {
      tHash.set(ch, tHash.get(ch) + 1);
    } else {
      tHash.set(ch, 1);
    }
  }
  // 双指针
  let left = 0;
  let right = 0;
  const sHash = new Map();
  // 先加到tLen数量
  while (left - right < tLen) {
    if (sHash.has(s[left])) {
      sHash.set(s[left], sHash.get(s[left]) + 1);
    } else {
      sHash.set(s[left], 1);
    }
    left++;
  }
  // 特殊情况
  if (sLen == tLen) {
    if (hashCompare(sHash, tHash)) {
      return s;
    } else {
      return "";
    }
  }
  let ans = "";
  let nums = Infinity;
  while (left <= sLen) {
    if (hashCompare(sHash, tHash)) {
      // sHash已经比tHash大
      if (nums > left - right) {
        nums = left - right;
        ans = s.substring(right, left);
      }
      while (right < left) {
        const vals = sHash.get(s[right]);
        const valt = tHash.get(s[right]);
        if (vals && valt) {
          if (vals > valt) {
            sHash.set(s[right], vals - 1);
            right++;
            if (nums > left - right) {
              nums = left - right;
              ans = s.substring(right, left);
            }
          } else {
            break;
          }
        } else if (valt) {
          break;
        } else if (vals) {
          if (vals > 1) {
            sHash.set(s[right], vals - 1);
          } else {
            sHash.delete(s[right]);
          }
          right++;
          if (nums > left - right) {
            nums = left - right;
            ans = s.substring(right, left);
          }
        }
      }
      // while结束后添加left
      if (sHash.has(s[left])) {
        sHash.set(s[left], sHash.get(s[left]) + 1);
      } else {
        sHash.set(s[left], 1);
      }
      left++;
    } else {
      // 继续添加
      if (sHash.has(s[left])) {
        sHash.set(s[left], sHash.get(s[left]) + 1);
      } else {
        sHash.set(s[left], 1);
      }
      left++;
    }
  }
  return ans;
};

var hashCompare = (sHash, tHash) => {
  for (const [key, val] of tHash) {
    if (sHash.has(key)) {
      if (sHash.get(key) < val) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};
