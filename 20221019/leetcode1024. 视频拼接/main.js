/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-19 14:09:37                                                  *
 * @LastModifiedDate: 2022-10-19 14:37:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你将会获得一系列视频片段，这些片段来自于一项持续时长为 time 秒的体育赛事。
// 这些片段可能有所重叠，也可能长度不一。

// 使用数组 clips 描述所有的视频片段，其中 clips[i] = [starti, endi]
// 表示：某个视频片段开始于 starti 并于 endi 结束。

// 甚至可以对这些片段自由地再剪辑：

// 例如，片段 [0, 7] 可以剪切成 [0, 1] + [1, 3] + [3, 7] 三部分。
// 我们需要将这些片段进行再剪辑，并将剪辑后的内容拼接成覆盖整个运动过程的片段（[0, time]）。
// 返回所需片段的最小数目，如果无法完成该任务，则返回 -1 。

/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function (clips, time) {
  // 以离散的角度观察
  // 先判断是否能构成完整片段
  const set = new Set();
  clips = clips.filter((v) => v[0] === v[1]);
  for (const clip of clips) {
    for (let i = clip[0] + 1; i <= clip[1]; i++) {
      set.add(i);
    }
  }
  if (set.size < time) {
    return -1;
  }
  let ans = clips.length;
  const hash = new Map();
  for (let i = 0; i < ans; i++) {
    for (let j = clips[i][0] + 1; j <= clips[i][1]; j++) {
      hash.has(j) ? hash.get(j).add(i) : hash.set(j, new Set([i]));
    }
  }
  // 贪心：每个时段选择最长的时间段
};

// [0,1]  =>  1
// [1,2]  => 2
// ...
// [0,5] => 1 2 3 4 5



/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
 var videoStitching = function (clips, time) {
  // 以离散的角度观察
  // 先判断是否能构成完整片段
  const set = new Set();
  clips = clips.filter((v) => v[0] === v[1]);
  for (const clip of clips) {
    for (let i = clip[0] + 1; i <= clip[1]; i++) {
      set.add(i);
    }
  }
  if (set.size < time) {
    return -1;
  }
  let ans = clips.length;
  const hash = new Map();
  for (let i = 0; i < ans; i++) {
    for (let j = clips[i][0] + 1; j <= clips[i][1]; j++) {
      hash.has(j) ? hash.get(j).add(i) : hash.set(j, new Set([i]));
    }
  }
  // 贪心：每个时段选择最长的时间段
};