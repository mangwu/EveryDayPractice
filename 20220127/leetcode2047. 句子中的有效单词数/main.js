/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-27 14:23:10                                                  *
 * @LastModifiedDate: 2022-01-27 17:13:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 句子仅由小写字母（'a' 到 'z'）、数字（'0' 到 '9'）、连字符（'-'）、标点符号（'!'、'.' 和 ','）以及空格（' '）组成。每个句子可以根据空格分解成 一个或者多个 token ，这些 token 之间由一个或者多个空格 ' ' 分隔。

// 如果一个 token 同时满足下述条件，则认为这个 token 是一个有效单词：

// 仅由小写字母、连字符和/或标点（不含数字）。
// 至多一个 连字符 '-' 。如果存在，连字符两侧应当都存在小写字母（"a-b" 是一个有效单词，但 "-ab" 和 "ab-" 不是有效单词）。
// 至多一个 标点符号。如果存在，标点符号应当位于 token 的 末尾 。
// 这里给出几个有效单词的例子："a-b."、"afad"、"ba-c"、"a!" 和 "!" 。

// 给你一个字符串 sentence ，请你找出并返回 sentence 中 有效单词的数目 。

/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
  // 获得token 可能匹配到边界字符
  const tokens = sentence.split(/\s+/);
  // 消除空字符
  if (tokens[0].length == 0) {
    tokens.shift();
  }
  if (tokens[tokens.length - 1].length == 0) {
    tokens.pop();
  }
  console.log(tokens);
  // 注意使用^和$，表示匹配整个字符串 不包含-的情况
  const reg1 = /^[a-z]*[!.,]?$/;
  // 如果包含-的情况
  const reg2 = /^[a-z]+-[a-z]+[!.,]?$/;
  // 有效token个数
  let ans = 0;
  // 符合条件token的
  // 遍历tokens
  for (let v of tokens) {
    if (reg1.test(v) || reg2.test(v)) {
      // console.log(v);
      ans++;
    }
  }
  // console.log(ans);
  return ans;
};

countValidWords(
  " !g 3 !sy "
);

/**
 * @param {string} sentence
 * @return {number}
 */
 var countValidWords2 = function (sentence) {
  // 获得token 可能匹配到边界字符
  const tokens = sentence.split(/\s+/);
  console.log(tokens);
  // 上面两个整合成一个reg
  const reg = /^([,.!]|[a-z]+(-[a-z]+)?[,.!]?)$/;
  let ans = 0;
  // 遍历tokens
  for (let v of tokens) {
    if (reg.test(v)) {
      console.log(v);
      ans++;
    }
  }
  console.log(ans);
  return ans;
};
countValidWords2(
  " !g 3 !sy a-z s-v -asc- a-c. a-c! . !! , ,, ,sa 9a sss-s. ss-"
);