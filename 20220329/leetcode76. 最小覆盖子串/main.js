/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-29 21:25:29                                                  *
 * @LastModifiedDate: 2022-03-29 22:39:09                                      *
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

//

// 注意：

// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const lens = s.length;
  const lent = t.length;
  if (lens < lent) {
    // 不可能存在这样的子字符串
    return "";
  }
  // 遍历一遍t，获取需要的字符
  const set = new Set();
  const aplha = new Map();
  for (const ch of t) {
    set.add(ch);
    const num = aplha.get(ch) ? aplha.get(ch) : 0;
    aplha.set(ch, num + 1);
  }
  // 窗口
  let left = 0;
  let right = 0;
  let min = Number.MAX_VALUE;
  let ans = "";
  const win = new Map();
  const set2 = new Set();
  while (right < lens) {
    if (set.has(s[right])) {
      // 是子字符
      const num = win.get(s[right]) ? win.get(s[right]) : 0;
      win.set(s[right], num + 1);
      // 数量满足条件就可以入set2
      if (num + 1 >= aplha.get(s[right])) {
        set2.add(s[right]);
        // 判断是否是有效子字符串
        if (set2.size == set.size) {
          // 是有效字符串
          if (right - left + 1 < min) {
            min = right - left + 1;
            ans = s.substring(left, right + 1);
          }
          // 开始出队
          while (set2.size == set.size) {
            if (set.has(s[left])) {
              const ch_num = win.get(s[left]);
              win.set(s[left], ch_num - 1);
              // 如果小于就可以退出了循环了
              if (ch_num - 1 < aplha.get(s[left])) {
                set2.delete(s[left]);
              }
            }
            left++;
          }
          // 计算最小值 (这里加2是因为此时刚好只差一个字符串)
          if (right - left + 2 < min) {
            min = right - left + 2;
            ans = s.substring(left - 1, right + 1);
          }
        }
      }
    }
    right++;
  }
  return min == Number.MAX_VALUE ? "" : ans;
};
