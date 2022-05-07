/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-07 08:47:16                                                  *
 * @LastModifiedDate: 2022-05-07 10:25:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 基因序列可以表示为一条由 8 个字符组成的字符串，其中每个字符都是 'A'、'C'、'G' 和 'T' 之一。

// 假设我们需要调查从基因序列 start 变为 end 所发生的基因变化。一次基因变化就意味着这个基因序列中的一个字符发生了变化。

// 例如，"AACCGGTT" --> "AACCGGTA" 就是一次基因变化。
// 另有一个基因库 bank 记录了所有有效的基因变化，只有基因库中的基因才是有效的基因序列。

// 给你两个基因序列 start 和 end ，以及一个基因库 bank ，请你找出并返回能够使 start 变化为 end 所需的最少变化次数。如果无法完成此基因变化，返回 -1 。

// 注意：起始基因序列 start 默认是有效的，但是它并不一定会出现在基因库中。

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  // 要么返回[0-8]中的变化数字，要么返回-1
  // bank中不存在end
  const set = new Set(bank);
  if (!set.has(end)) {
    return -1;
  }
  // 不同之处
  let ans = 0;
  let diff = [];
  for (let i = 0; i < 8; i++) {
    if (start[i] !== end[i]) {
      diff.push(i);
      ans++;
    }
  }
  // 最少变化之处一定小于bank长度
  if (ans > bank.length) {
    return -1;
  }
  console.log(diff, ans);
  // dfs查找是否有有效的元素
  const dfs = (s, i, d) => {
    let e = s.substring(0, i) + end[i] + s.substring(i + 1);
    if (set.has(e)) {
      if (d.length == 0) {
        return true;
      } else {
        for (let i = 0; i < d.length; i++) {
          let copy = d.slice();
          copy.splice(i, 1);
          if (dfs(e, d[i], copy)) {
            return true;
          }
        }
      }
    }
    return false;
  };
  for (let i = 0; i < diff.length; i++) {
    let d = diff.slice();
    d.splice(i, 1);
    if (dfs(start, diff[i], d)) {
      return ans;
    }
  }
  return -1;
};
// minMutation("AACCGGTT", "AAACGGTA", [
//   "AACCGATT",
//   "AACCGATA",
//   "AAACGATA",
//   "AAACGGTA",
// ]);

// 上述解答错误，diff是理论的最小直接变化，但是实际上可能最小的变化不是diff的长度，如上一行的调用
const WORDS = ["A", "C", "G", "T"];
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  // 根据
  // bank中不存在end
  const set = new Set(bank);
  if (!set.has(end)) {
    return -1;
  }
  // 不同之处
  let diff = 0;
  for (let i = 0; i < 8; i++) {
    if (start[i] !== end[i]) {
      diff++;
    }
  }
  // 最少变化之处一定小于bank长度
  if (diff > bank.length) {
    return -1;
  }
  const visited = new Set();
  visited.add(start);
  let ans = Infinity;
  const dfs = (k, n) => {
    // 已经遍历过或者不是已存在的
    if (visited.has(k)) {
      return;
    }
    // 找到end
    if (k == end) {
      console.log(n);
      ans = Math.min(ans, n);
      return;
    }
    // 词库中存在这种变化
    if (set.has(k)) {
      for (let i = 0; i < 8; i++) {
        for (const w of WORDS) {
          if (k[i] !== w) {
            visited.add(k);
            dfs(k.substring(0, i) + w + k.substring(i + 1), n + 1);
            visited.delete(k);
          }
        }
      }
    } else {
      visited.add(k);
    }
  };
  for (let i = 0; i < 8; i++) {
    for (const w of WORDS) {
      if (start[i] !== w) {
        dfs(start.substring(0, i) + w + start.substring(i + 1), 1);
      }
    }
  }
  return ans !== Infinity ? ans : -1;
};
// minMutation("AACCGGTT", "AAACGGTA", [
//   "AACCGATT",
//   "AACCGATA",
//   "AAACGATA",
//   "AAACGGTA",
// ]);
minMutation("AAAAAAAA", "AAAAAAGG", [
  "CAAAAAAA",
  "AAAAAAAA",
  "AGAAAAAA",
  "AAGAAAAA",
  "AAACAAAA",
  "AAAACAAA",
  "AAAAAGAA",
  "AAAAAAGA",
  "AAAAAAAG",
  "AAAAAAGG",
  "AAAAATAA",
  "AAAATAAA",
]);
