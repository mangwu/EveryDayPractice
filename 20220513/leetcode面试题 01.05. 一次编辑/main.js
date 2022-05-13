/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-13 14:03:57                                                  *
 * @LastModifiedDate: 2022-05-13 14:11:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。
//  给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。

/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
  let lenf = first.length;
  let lens = second.length;
  let sub = lenf - lens;
  // 最多相差一个字符串
  if (sub > 1 || sub < -1) {
    return false;
  }
  if (sub == 0) {
    // 替换，只有一个字符不同
    let cnt = 0;
    for (let i = 0; i < lenf; i++) {
      if (first[i] !== second[i]) {
        cnt++;
        if (cnt > 1) {
          return false;
        }
      }
    }
  } else if (sub == -1) {
    // first加上一个字符变为second
    let i = 0;
    let j = 0;
    let cnt = 0;
    while (i < lenf && j < lens) {
      if (first[i] == second[j]) {
        i++;
        j++;
        continue;
      } else {
        cnt++;
        if (cnt > 1) {
          return false;
        }
        j++;
      }
    }
    return true;
  } else {
    return oneEditAway(second, first);
  }
  return true;
};
