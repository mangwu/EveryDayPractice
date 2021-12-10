/**
 * @description 最短补全词
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-10 18:46:02
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
//  给你一个字符串 licensePlate 和一个字符串数组 words ，请你找出并返回 words 中的 最短补全词 。

//  补全词 是一个包含 licensePlate 中所有的字母的单词。在所有补全词中，最短的那个就是 最短补全词 。

//  在匹配 licensePlate 中的字母时：

//  忽略 licensePlate 中的 数字和空格 。
//  不区分大小写。
//  如果某个字母在 licensePlate 中出现不止一次，那么该字母在补全词中的出现次数应当一致或者更多。
//  例如：licensePlate = "aBc 12c"，那么它的补全词应当包含字母 'a'、'b' （忽略大写）和两个 'c' 。可能的 补全词 有 "abccdef"、"caaacab" 以及 "cbca" 。

//  请你找出并返回 words 中的 最短补全词 。题目数据保证一定存在一个最短补全词。当有多个单词都符合最短补全词的匹配条件时取 words 中 最靠前的 那个。

/**
 * @description 查看容器字符串能否包含子字符串
 * @param {String} ransomNote 被包含的字符串
 * @param {String} magazine 容器字符串
 * @returns {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  const c = new Array(26).fill(0);
  for (let m of magazine) {
    c[m.charCodeAt() - "a".charCodeAt()]++;
  }
  for (let n of ransomNote) {
    c[n.charCodeAt() - "a".charCodeAt()]--;
    if (c[n.charCodeAt() - "a".charCodeAt()] < 0) {
      return false;
    }
  }
  return true;
};
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  /**
   * 1. 理解题意，就是包含licensePlate所有字母字符的 word， 而这个word在words中且是长度最短的那一个
   * 2. licensePlate的组成为字母，数字和空格words全为小写字符， 匹配时忽略大小写
   * 3. 可以先将licensePlate做小写处理
   * 4. 遍历words，查看是否匹配，查看word是否符合licensePlate要求
   * 5. 符合就判断长度是否满足小于当前的ans，满足就替换，否则继续遍历
   */
  // 转化为小写字母
  let lower = "";
  // 匹配字母数据
  // 保存结果
  let ans = "";
  for (let i of licensePlate.toLocaleLowerCase()) {
    const num = i.charCodeAt() - "a".charCodeAt();
    if (num >= 0 && num < 26) {
      // 遍历words
      lower += i;
    }
  }
  // 是否匹配的方法
  for (let word of words) {
    if (canConstruct(lower, word)) {
      if (ans === "") {
        ans = word;
      }
      if (ans.length > word.length) {
        ans = word;
      }
    }
  }
  return ans;
};
console.log(
  shortestCompletingWord("Ah71752", [
    "suggest",
    "letter",
    "of",
    "husband",
    "easy",
    "education",
    "drug",
    "prevent",
    "writer",
    "old",
  ])
);

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord2 = function (licensePlate, words) {
  // 使用canConstruct可能额外占内存，在获取到licensePlate的单词个数后
  // 遍历words时需要判断它是否满足条件 => 如果word单词中每个单词出现次数均不小于LicensePlate单词出现次数，则是一个补全词

  // 声明保存26位字母的licensePlate
  let alpha = Array(26).fill(0);
  // 匹配字母数据
  for (let i of licensePlate.toLocaleLowerCase()) {
    const num = i.charCodeAt() - "a".charCodeAt();
    if (num >= 0 && num < 26) {
      // 遍历words
      alpha[num]++;
    }
  }
  // 保存结果
  let ans = "";
  for (let word of words) {
    // 获取当前word的字母表
    const c = Array(26).fill(0);
    for (let i of word) {
      c[i.charCodeAt() - "a".charCodeAt()]++;
    }
    // 是否符合
    let ok = true;
    for (let j = 0; j < 26; j++) {
      // 只要有一个字母小于就不符合
      if (c[j] < alpha[j]) {
        ok = false;
        break;
      }
    }
    console.log(ok);
    if (ok) {
      if (ans === "") {
        ans = word;
        continue;
      }
      if (ans.length > word.length) {
        ans = word;
      }
    }
  }
  return ans;
};

console.log(
  shortestCompletingWord2("1s3 456", ["looks","pest","stew","show"])
);