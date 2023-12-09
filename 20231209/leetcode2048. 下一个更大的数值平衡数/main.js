/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-12-09 22:34:03                                                  *
 * @LastModifiedDate: 2023-12-09 23:26:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 如果整数  x 满足：对于每个数位 d ，这个数位 恰好 在 x 中出现 d 次。那么整数 x 就是一个 数值平衡数 。

// 给你一个整数 n ，请你返回 严格大于 n 的 最小数值平衡数 。
const dp = new Array(8).fill(-1);
dp[0] = [];
dp[1] = ["1"];
const dfs = (i) => {
  if (dp[i] !== -1) return dp[i];
  const res = [i.toString().repeat(i)];
  for (let j = 1; j < i && j < i - j; j++) {
    const pre = dfs(j);
    const next = dfs(i - j);
    for (const item1 of pre) {
      for (const item2 of next) {
        if (!hasSame(item1, item2)) {
          // 获取它们的自由组合结果
          const set = new Set(getCombinationRes(item1 + item2));
          res.push(...set);
        }
      }
    }
  }
  dp[i] = res;
  return res;
};
function hasSame(str1, str2) {
  const set = new Set(str1.split(""));
  for (const ch of str2) if (set.has(ch)) return true;
  return false;
}
function getCombinationRes(str) {
  const n = str.length;
  if (n === 1) return str;
  const res = [];
  for (let i = 0; i < n; i++) {
    const next = getCombinationRes(
      str.substring(0, i) + str.substring(i + 1, n)
    );
    for (const item of next) {
      res.push(str[i] + item);
    }
  }
  return res;
}
dfs(7);
dp.forEach((value, i) => {
  dp[i] = value.map((v) => parseInt(v)).sort((a, b) => a - b);
});
/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function (n) {
  const len = n.toString().length;
  const cur = dp[len];
  if (n >= cur[cur.length - 1]) return dp[len + 1][0];
  return cur.find((value) => value > n);
};

// 个位数：1
// 十位数：22
// 百位数：122 333 212 221
// 千位数：1333 4444 3133 3313 3331
// 万位数：14444 55555 22333 41444 44144 44414 44441 23233 23323 23332 32233 32323 32332 33223 33232 33322
// 十万数： 11
