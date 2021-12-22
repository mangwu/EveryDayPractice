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
      console.log(kindex);
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
