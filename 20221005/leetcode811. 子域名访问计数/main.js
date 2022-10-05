/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-05 19:16:15                                                  *
 * @LastModifiedDate: 2022-10-05 19:38:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 网站域名 "discuss.leetcode.com" 由多个子域名组成。顶级域名为 "com" ，
// 二级域名为 "leetcode.com" ，最低一级为 "discuss.leetcode.com" 。
// 当访问域名 "discuss.leetcode.com" 时，
// 同时也会隐式访问其父域名 "leetcode.com" 以及 "com" 。

// 计数配对域名 是遵循 "rep d1.d2.d3" 或 "rep d1.d2" 格式的一个域名表示，
// 其中 rep 表示访问域名的次数，d1.d2.d3 为域名本身。

// 例如，"9001 discuss.leetcode.com" 就是一个 计数配对域名 ，
// 表示 discuss.leetcode.com 被访问了 9001 次。
// 给你一个 计数配对域名 组成的数组 cpdomains ，
// 解析得到输入中每个子域名对应的 计数配对域名 ，并以数组形式返回。
// 可以按 任意顺序 返回答案。

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const hash = new Map();
  for (const cpdomain of cpdomains) {
    const arr = cpdomain.split(/[\s\.]/);
    let cur = arr[arr.length - 1];
    hash.set(
      cur,
      hash.has(cur) ? hash.get(cur) + parseInt(arr[0]) : parseInt(arr[0])
    );
    for (let i = arr.length - 2; i >= 1; i--) {
      cur = arr[i] + "." + cur;
      hash.set(
        cur,
        hash.has(cur) ? hash.get(cur) + parseInt(arr[0]) : parseInt(arr[0])
      );
    }
  }
  return [...hash].map(([key, val]) => val + " " + key);
};
