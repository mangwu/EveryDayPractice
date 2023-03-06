/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-06 08:38:20                                                  *
 * @LastModifiedDate: 2023-03-06 10:10:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s ，它仅包含字符 'a' 和 'b'​​​​ 。

// 你可以删除 s 中任意数目的字符，使得 s 平衡 。当不存在下标对 (i,j) 满足 i < j ，且 s[i] = 'b' 的同时 s[j]= 'a' ，此时认为 s 是 平衡 的。

// 请你返回使 s 平衡 的 最少 删除次数。

/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  // 平衡：保证a全部在b之前
  // 计算b的后面有多少a，a的前面有多少b
  // 计算保留连续的ab前后两边需要删除的b和a的最小值
  // 可以这样想：
  // 1. 检查字符串s中是否存在一个a的索引在b之前，如果没有，按照a，b数量的小值进行删除，如果有：
  // 2. 在字符中选一个a和一个b，其中a的索引在b之前
  //    那么保留这个a和b的方式就是删除a之前的b，和b之后的a
  //    a和b中间的字符选择多的进行保留，删除少的
  // 3. 将这种方式所有a,b组合求出一个解，取最小值即可
  // 4. 优化：a和b应该是连续的而不是间隔的，可以这样想，
  //    如果a，b之间有字符，例如a bbaaa b ，当然是保留中间的a
  //    但是保留中间的a实际上就是选择后面的ab进行上述操作
  //    也就是说，每个间隔的ab组合实际上都有一个最优的连续ab组合
  //    所以我们把每个连续的ab组合进行删除值计算即可，无需遍历所有可选组合
  // 5. 额外需要注意，可能有单独的b组合和单独的a组合
  //    如果b字符前面没有a，那么这个字符可以组成单独的b组合（s开头的b）
  //    如果a字符后面没有b，那么这个字符可以组成单独的a组合（s结尾的a）
  const n = s.length;
  const assit = new Array(n).fill(-1);
  let B = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "b") B++;
    else assit[i] = B;
  }
  let A = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === "a") A++;
    else assit[i] = A;
  }
  // 检查单独的b，a
  let res = Infinity;
  if (s[0] === "b") res = Math.min(res, assit[0]);
  if (s[n - 1] === "a") res = Math.min(res, assit[n - 1]);
  // 遍历连续的a,b
  for (let i = 0; i < n; i++) {
    if (s[i] === "a") {
      while (s[i] === "a") {
        i++;
      }
      if (i < n) {
        res = Math.min(res, assit[i - 1] + assit[i]);
      }
    }
  }
  return res;
};

// baaabbaaabaaabbbabab
// b的后面有多少个a
// a的前面有多少个b
// 11 1 1 1 8 8 3 3 3 5 4 4 4 2 2 2 8 1

// abbbaaababababbababab

// 0 9 9 9 3 3 3 6 4 5 5

// 上面的分析想复杂了，遍历间隔，删除间隔左边的b和右边的a，比较大小即可
/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  const n = s.length;
  let a = 0; // 右边的a
  for (const ch of s) if (ch === "a") a++;
  let b = 0; // 左边的b
  let res = Math.min(a, n - a);
  for (let i = 0; i < n; i++) {
    if (s[i] === "a") a--;
    else b++;
    res = Math.min(res, a + b);
  }
  return res;
};
