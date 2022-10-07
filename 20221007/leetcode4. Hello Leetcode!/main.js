/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-07 15:37:54                                                  *
 * @LastModifiedDate: 2022-10-07 16:17:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 力扣嘉年华同样准备了纪念品展位，参观者只需要集齐 helloleetcode
// 的 13 张字母卡片即可获得力扣纪念章。

// 在展位上有一些由字母卡片拼成的单词，words[i][j] 表示第 i 个单词的第 j 个字母。

// 你可以从这些单词中取出一些卡片，但每次拿取卡片都需要消耗游戏代币，规则如下：

// 从一个单词中取一个字母所需要的代币数量，为该字母左边和右边字母数量之积

// 可以从一个单词中多次取字母，每个字母仅可被取一次

// 例如：从 example 中取出字母 a，需要消耗代币 2*4=8，字母取出后单词变为 exmple；
// 再从中取出字母 m，需要消耗代币 2*3=6，字母取出后单词变为 exple；

// 请返回取得 helloleetcode 这些字母需要消耗代币的 最少 数量。如果无法取得，返回 -1。

const REF = [
  [0],
  [0, 0],
  [0, 1, 0],
  [0, 2, 2, 0],
  [0, 3, 4, 3, 0],
  [0, 4, 6, 6, 4, 0],
  [0, 5, 8, 9, 8, 5, 0],
  [0, 6, 10, 12, 12, 10, 6, 0],
];

const helloleetcode = new Map([
  ["h", 1],
  ["e", 4],
  ["l", 3],
  ["o", 2],
  ["t", 1],
  ["c", 1],
  ["d", 1],
]);

/**
 * @param {string[]} words
 * @return {number}
 */
var Leetcode = function (words) {
  // 判断是否能构成helloleetcode
  const hash = new Map();
  for (const word of words) {
    for (ch of word) {
      hash.has(ch) ? hash.set(ch, hash.get(ch) + 1) : hash.set(ch, 1);
    }
  }
  for (const [key, value] of helloleetcode) {
    if (!hash.has(key) || hash.get(key) < value) {
      return -1;
    }
  }
  words = words.map((v) => v.split(""));
  // 贪心算法
  const copy = new Map(helloleetcode);
  let ans = 0;
  while (copy.size > 0) {
    let min = Infinity;
    let cost = null;
    for (const [key, _value] of copy) {
      const res = getMinCost(key, words);
      if (res[2] < min) {
        min = res[2];
        cost = res;
      }
    }
    ans += min;
    words[cost[0]].splice(cost[1], 1);
    if (copy.get(cost[3]) === 1) {
      copy.delete(cost[3]);
    } else {
      copy.set(cost[3], copy.get(cost[3]) - 1);
    }
  }
  return ans;
};

var getMinCost = function (ch, words) {
  const m = words.length;
  let cost = Infinity;
  let ans = null;
  for (let i = 0; i < m; i++) {
    const idx = words[i].indexOf(ch);
    if (idx == -1) {
      continue;
    }
    if (cost > REF[words[i].length - 1][idx]) {
      cost = REF[words[i].length - 1][idx];
      ans = [i, idx, cost, ch];
    }
  }
  return ans;
};

try {
  console.log(Leetcode(["hold", "engineer", "cost", "level"]));
} catch (error) {
  console.log();
}
