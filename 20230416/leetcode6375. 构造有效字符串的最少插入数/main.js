/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-16 10:39:02                                                  *
 * @LastModifiedDate: 2023-04-16 10:57:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 word ，你可以向其中任何位置插入 "a"、"b" 或 "c" 任意次，返回使 word 有效 需要插入的最少字母数。

// 如果字符串可以由 "abc" 串联多次得到，则认为该字符串 有效 。

/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function (word) {
  // 将数字中连续的abc删除
  const arr = [];
  const n = word.length;
  for (let i = 0; i < n; i++) {
    if (word[i] === "a" && word[i + 1] === "b" && word[i + 2] === "c") {
      arr.push("");
      i += 2;
    } else {
      arr.push(word[i]);
    }
  }
  const m = arr.length;
  let res = 0;
  for (let i = 0; i < m; i++) {
    if (arr[i] === "a") {
      if (arr[i + 1] === "b" || arr[i + 1] === "c") {
        res++;
        i++;
      } else {
        res += 2;
      }
    } else if (arr[i] === "b") {
      if (arr[i + 1] === "c") {
        res++;
        i++;
      } else {
        res += 2;
      }
    } else if (arr[i] === "c") {
      res += 2;
    }
  }
  return res;
};


// ""bcbcbaa""bcbccbaacbabaab""""ccaba""bbbca""
//   1 2 4 6 8 9 10 12 14 16 17 19 20 22 23 25 27 28 30 32 34 35 37