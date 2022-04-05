/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-03 20:46:16                                                  *
 * @LastModifiedDate: 2022-04-03 23:10:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用 一次 。

// 注意：解集不能包含重复的组合。

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  if (target == 0 || candidates.length == 0) {
    return [];
  }
  const subSet = [];
  for (const can of candidates) {
    if (can <= target) {
      subSet.push(can);
    }
  }
  const len = subSet.length;
  if (len == 0) {
    return [];
  }
  const set = new Set();
  for (let i = 0; i < len; i++) {
    const newArr = subSet.slice();
    newArr.splice(i, 1);
    console.log(newArr, target);
    if (newArr.length == 0) {
      continue;
    }
    const subAns = combinationSum2(newArr, target - subSet[i]);
    if (subAns.length == 0 && subSet[i] == target) {
      set.add(JSON.stringify([subSet[i]]));
    }
    if (subAns.length > 0) {
      for (const subele of subAns) {
        set.add(
          JSON.stringify(subele.concat([subSet[i]]).sort((a, b) => a - b))
        );
      }
    }
  }
  return [...set].map((v) => JSON.parse(v));
};
combinationSum2([1, 1, 1, 1, 1, 1, 1, 1], 27);

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const ans = [];
  const sequence = [];
  // condidates中的不同数的个数
  const freq = [];
  // dfs遍历
  const dfs = (pos, rest) => {
    // pos表示当前元素位置,rest表示剩下的目标值
    if (rest == 0) {
      // 找到了一个答案
      ans.push(sequence.slice());
      return;
    }
    // 如果当前数的个数等于freq长度，说明无法组成一个target了
    // 如果rest小于freq中的第一个数，说明剩下的数比freq中的然后数都小，无法构成target了
    if (pos == freq.length || rest < freq[pos][0]) {
      return;
    }
    // 可以继续递归,选择下一个数
    dfs(pos + 1, rest);
    let most = Math.min(rest / freq[pos][0], freq[pos][1]);
    for (let i = 0; i <= most; i++) {
      sequence.push(freq[pos][0]);
      dfs(pos + 1, rest - i * freq[pos][0]);
    }
    for (let i = 0; i <= most; i++) {
      sequence.pop();
    }
  };
  for (const num of candidates) {
    let len = freq.length;
    if (len == 0 || num !== freq[len - 1][0]) {
      freq.push([num, 1]);
    } else {
      freq[len - 1][1]++;
    }
  }
  dfs(0, target);
  return ans;
};
