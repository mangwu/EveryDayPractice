/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-07 09:53:04                                                  *
 * @LastModifiedDate: 2022-04-07 09:59:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个字符串, s 和 goal。如果在若干次旋转操作之后，s 能变成 goal ，那么返回 true 。

// s 的 旋转操作 就是将 s 最左边的字符移动到最右边。

// 例如, 若 s = 'abcde'，在旋转一次之后结果就是'bcdea' 。
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  const lens = s.length;
  const leng = goal.length;
  if (lens !== leng) {
    return false;
  }
  let i = 0;
  while (i < leng) {
    // 找到第一个字符
    if (s[i] == goal[0]) {
      if (s.substring(i) + s.substring(0, i) == goal) {
        return true;
      }
    }
  }
  return false;
};
