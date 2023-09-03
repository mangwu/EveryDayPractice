/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-02 22:51:13                                                  *
 * @LastModifiedDate: 2023-09-02 23:32:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s 和一个整数 k 。

// k 子序列指的是 s 的一个长度为 k 的 子序列 ，且所有字符都是 唯一 的，也就是说每个字符在子序列里只出现过一次。

// 定义 f(c) 为字符 c 在 s 中出现的次数。

// k 子序列的 美丽值 定义为这个子序列中每一个字符 c 的 f(c) 之 和 。

// 比方说，s = "abbbdd" 和 k = 2 ，我们有：

// f('a') = 1, f('b') = 3, f('d') = 2
// s 的部分 k 子序列为：
// "abbbdd" -> "ab" ，美丽值为 f('a') + f('b') = 4
// "abbbdd" -> "ad" ，美丽值为 f('a') + f('d') = 3
// "abbbdd" -> "bd" ，美丽值为 f('b') + f('d') = 5
// 请你返回一个整数，表示所有 k 子序列 里面 美丽值 是 最大值 的子序列数目。由于答案可能很大，将结果对 109 + 7 取余后返回。

// 一个字符串的子序列指的是从原字符串里面删除一些字符（也可能一个字符也不删除），不改变剩下字符顺序连接得到的新字符串。

// 注意：

// f(c) 指的是字符 c 在字符串 s 的出现次数，不是在 k 子序列里的出现次数。
// 两个 k 子序列如果有任何一个字符在原字符串中的下标不同，则它们是两个不同的子序列。所以两个不同的 k 子序列可能产生相同的字符串。
const MOD = BigInt(10 ** 9 + 7);
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKSubsequencesWithMaxBeauty = function (s, k) {
  // 计算频率
  const f = new Map();
  for (const ch of s) f.set(ch, (f.get(ch) | 0) + 1);
  const fArr = [...f].sort((a, b) => b[1] - a[1]);
  // 前k个最大的
  let res = 1n;
  const len = fArr.length;
  if (len < k) return 0;
  let lastSelect = fArr[k - 1][1];
  let num = 1;

  for (let i = k; i < len; i++) {
    if (fArr[i][1] === lastSelect) {
      num++;
    } else break;
  }
  for (let i = k - 2; i >= 0; i--) {
    if (fArr[i][1] === lastSelect) {
      num++;
    } else break;
  }
  let flag = lastSelect === fArr[0][1];
  let end = k;
  for (let i = 0; i < end; i++) {
    if (fArr[i][1] > lastSelect || flag) {
      res *= BigInt(fArr[i][1]);
      k--;
    } else break;
  }
  if (flag) {
    // C(end, num)
    k = end;
  } else {
    res *= BigInt(lastSelect ** k);
  }
  // C(k, num) =
  for (let i = 0; i < k; i++) {
    res *= BigInt(num - i);
  }
  for (let i = 2; i <= k; i++) {
    res /= BigInt(i);
  }

  return res % MOD;
};
