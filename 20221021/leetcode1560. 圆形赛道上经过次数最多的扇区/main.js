/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-21 21:48:11                                                  *
 * @LastModifiedDate: 2022-10-21 21:58:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n 和一个整数数组 rounds 。有一条圆形赛道由 n 个扇区组成，扇区编号从 1 到 n 。现将在这条赛道上举办一场马拉松比赛，该马拉松全程由 m 个阶段组成。其中，第 i 个阶段将会从扇区 rounds[i - 1] 开始，到扇区 rounds[i] 结束。举例来说，第 1 阶段从 rounds[0] 开始，到 rounds[1] 结束。

// 请你以数组形式返回经过次数最多的那几个扇区，按扇区编号 升序 排列。

// 注意，赛道按扇区编号升序逆时针形成一个圆（请参见第一个示例）。

/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
  n++;
  const arr = new Array(n).fill(0);
  arr[rounds[0]]++;
  let pre = rounds[0];
  const m = rounds.length;
  for (let i = 1; i < m; i++) {
    let end = rounds[i];
    if (end < pre) {
      end += n;
    }
    for (let start = pre + 1; start <= end; start++) {
      arr[start % n]++;
    }
    pre = end % n;
  }
  let max = -1;
  let ans = null;
  for (let i = 1; i <= n; i++) {
    if (arr[i] == max) {
      ans.push(i);
    } else if (arr[i] > max) {
      max = arr[i];
      ans = [i];
    }
  }
  return ans.sort((a, b) => a - b);
};
