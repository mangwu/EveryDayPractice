/**
 * @description 截断句子
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-06 19:01:14
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
//  句子 是一个单词列表，列表中的单词之间用单个空格隔开，且不存在前导或尾随空格。每个单词仅由大小写英文字母组成（不含标点符号）。

//  例如，"Hello World"、"HELLO" 和 "hello world hello world" 都是句子。
//  给你一个句子 s​​​​​​ 和一个整数 k​​​​​​ ，请你将 s​​ 截断 ​，​​​使截断后的句子仅含 前 k​​​​​​ 个单词。返回 截断 s​​​​​​ 后得到的句子。

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  // 简单题目，使用split函数可以快速得出结果
  return s.split(" ").slice(0, k).join(" ");
  // 也可以使用字符串遍历，当出现空格时k--，直到k为0
};
console.log(truncateSentence("How are you", 2));
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence2 = function (s, k) {
  // 也可以使用字符串遍历，当出现空格时k--，直到k为0
  let idx = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      k--;
    }
    if (k === 0) {
      // 如果k次数用完，则此时的i极为需要的索引值
      idx = i;
      break;
    }
  }
  // 如果k与单词数量相同，那么最终值会减为1，idx不会变，此时直接返回s即可
  // substr 不包括最后一个值
  console.log(idx);
  return idx === -1 ? s : s.substr(0, idx);
};
console.log(truncateSentence2("How are you", 2));