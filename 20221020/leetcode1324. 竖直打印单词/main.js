/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-20 10:17:57                                                  *
 * @LastModifiedDate: 2022-10-20 10:24:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s。请你按照单词在 s 中的出现顺序将它们全部竖直返回。
// 单词应该以字符串列表的形式返回，必要时用空格补位，但输出尾部的空格需要删除（不允许尾随空格）。
// 每个单词只能放在一列上，每一列中也只能有一个单词。
/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
  const words = s.split(" ");
  let len = words.reduce((pre, cur) => Math.max(pre, cur.length), 0);
  const ans = [];
  for (let i = 0; i < len; i++) {
    let cur = "";
    for (const word of words) {
      cur += word[i] ? word[i] : " ";
    }
    cur = cur.trimEnd();
    ans.push(cur);
  }
  return ans;
};
