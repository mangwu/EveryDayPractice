/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-31 10:01:30                                                  *
 * @LastModifiedDate: 2022-10-31 10:31:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 神奇字符串 s 仅由 '1' 和 '2' 组成，并需要遵守下面的规则：

// 神奇字符串 s 的神奇之处在于，串联字符串中 '1' 和 '2' 的连续出现次数可以生成该字符串。
// s 的前几个元素是 s = "1221121221221121122……" 。如果将 s 中连续的若干 1 和 2 进行分组，可以得到 "1 22 11 2 1 22 1 22 11 2 11 22 ......" 。每组中 1 或者 2 的出现次数分别是 "1 2 2 1 1 2 1 2 2 1 2 2 ......" 。上面的出现次数正是 s 自身。

// 给你一个整数 n ，返回在神奇字符串 s 的前 n 个数字中 1 的数目。

//
/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function (n) {
  if (n <= 3) {
    return 1;
  }
  let arr = [1, 2, 2];
  let idx = 2;
  let ans = 1;
  while (arr.length < n) {
    let last = arr[arr.length - 1];
    let add = last === 1 ? 2 : 1;
    arr.push(add);
    if (arr[idx] === 2) {
      arr.push(add);
    }
    if (add === 1) {
      ans += arr[idx];
    }
    idx++;
  }
  if (arr.length > n && arr[arr.length - 1] === 1) {
    ans--;
  }
  return ans;
};

// 1 22 11 2 1 22 1 22 11 2 11 22 1 2 11 2 1 22 11 2 11 2 1 22 1 22 11
// 1 2  2  1 1 2  1 2  2  1 2  2  1 1 2  1 1 2  2  1 2  1 1 2  1 2  2

/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function (n) {
  // 实际上可以发现这个数列中1和2的数字近似相等
  // 这是一个Kolakoski序列（sequence）
  ans = 0;
  x = y = -1;
  for (let i = 0; i < n; i++) {
    ans += [2, 1][x & 1] == 1;
    f = y & ~(y + 1);
    x ^= f;
    y = (y + 1) | (f & (x >> 1));
  }
  return ans
};

//
