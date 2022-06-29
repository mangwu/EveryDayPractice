/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-29 08:52:50                                                  *
 * @LastModifiedDate: 2022-06-29 10:10:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// TinyURL 是一种 URL 简化服务， 比如：当你输入一个 URL https://leetcode.com/problems/design-tinyurl 时，
// 它将返回一个简化的URL http://tinyurl.com/4e9iAk 。请你设计一个类来加密与解密 TinyURL 。

// 加密和解密算法如何设计和运作是没有限制的，你只需要保证一个 URL 可以被加密成一个 TinyURL ，
// 并且这个 TinyURL 可以用解密方法恢复成原本的 URL 。

// 实现 Solution 类：

// Solution() 初始化 TinyURL 系统对象。
// String encode(String longUrl) 返回 longUrl 对应的 TinyURL 。
// String decode(String shortUrl) 返回 shortUrl 原本的 URL 。
// 题目数据保证给定的 shortUrl 是由同一个系统对象加密的。

// [a-zA-Z0-9] 共有26 * 2 + 10 = 62种编码
// 将每个字符作为一种数字表示可构造62进制
// a-0
// b-1
// 0-52
// 61-9
// 每编码一个长URL就增加一个
// 初始为0 ，即 aaaaaa

var idx = 0;
const hash = new Map();
const sixteenTwo =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  if (hash.has(longUrl)) {
    return hash.get(longUrl);
  }
  // 编码10进制到62进制的6位值
  let start = idx;
  let ans = "";
  for (let i = 0; i < 6; i++) {
    let k = start % 62;
    ans = sixteenTwo[k] + ans;
    start = Math.floor(start / 62);
  }
  ans = "http://tinyurl.com/" + ans;
  hash.set(longUrl, ans);
  hash.set(ans, longUrl);
  idx++;
  return ans;
};
// 62 aaaaba

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  // 解码
  return hash.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
