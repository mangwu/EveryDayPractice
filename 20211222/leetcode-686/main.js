/**
 * @description  leetcode-686
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-22 19:12:01
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

//  给定两个字符串 a 和 b，寻找重复叠加字符串 a 的最小次数，使得字符串 b 成为叠加后的字符串 a 的子串，如果不存在则返回 -1。

//  注意：字符串 "abc" 重复叠加 0 次是 ""，重复叠加 1 次是 "abc"，重复叠加 2 次是 "abcabc"。

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
  // 1.首先要判断b是否由a的字符顺序构成，否则无论如何叠加匹配都不会使得b是a的子串
  // 2.b如果包含a中不含有的字符，b不能构成a的重复叠加子串
  // 3.考虑使用双指针顺序遍历b, 然后同步遍历a，找出相同的字符,然后同步移动直到a的末尾
  // 4.之后a重新开始遍历
  // a字符串长度
  const m = a.length;
  // b字符串长度
  const n = b.length;
  let ans = -1;
  // b字符串的指针
  let i = 0;
  // 找到b的第一个字符在a中的所有索引
  let k = [];
  for (let q = 0; q < m; q++) {
    if (a[q] === b[0]) {
      k.push(q);
    }
  }
  if (k.length === 0) {
    return ans;
  }
  // console.log(k);
  // 遍历b字符串

  // 以每个k开始
  for (let kindex of k) {
    // 重置
    i = 0;
    ans = -1;
    while (true) {
      // 指针右移动
      kindex = (kindex + 1) % m;
      i++;
      // 判断i是否已经匹配完成,完成既可以返回结果
      if (i === n) {
        return ans + 2;
      }
      if (kindex === 0) {
        ans++;
      }
      if (a[kindex] === b[i]) {
        continue;
      } else {
        break;
      }
    }
  }
  return -1;
};

console.log(repeatedStringMatch("abaabaa", "abaababaab"));

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch2 = function (a, b) {
  // 1.首先要判断b是否由a的字符顺序构成，否则无论如何叠加匹配都不会使得b是a的子串
  // 2.b如果包含a中不含有的字符，b不能构成a的重复叠加子串
  // 3.通过分析上下届次数得知，如果a重复上届次数可以匹配b，那么匹配次数就是上届或者下届

  // 声明重复次数,默认一次，即字符串a
  let ans = 1;
  // 声明重复字符串
  let str = a;
  // 获得下届数
  while (str.length < b.length) {
    ans++;
    str += a;
  }
  // 获得上届次数的字符
  str += a;
  // 判断是否为子字符串
  let idx = str.indexOf(b);
  // 如果不是子字符串，直接返回-1
  if (idx === -1) return -1;
  // 是字符串判断长度重复下界次的字符从idx开始的长度是否大于b
  const sub = idx + b.length;
  if (sub > a.length * ans) return ans + 1;
  return ans;
};

console.log(repeatedStringMatch2("abaabaa", "abaababaab"));
