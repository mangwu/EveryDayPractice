/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-30 10:53:49                                                  *
 * @LastModifiedDate: 2022-10-30 11:06:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个字符串数组 creators 和 ids ，和一个整数数组 views ，所有数组的长度都是 n 。平台上第 i 个视频者是 creator[i] ，视频分配的 id 是 ids[i] ，且播放量为 views[i] 。

// 视频创作者的 流行度 是该创作者的 所有 视频的播放量的 总和 。请找出流行度 最高 创作者以及该创作者播放量 最大 的视频的 id 。

// 如果存在多个创作者流行度都最高，则需要找出所有符合条件的创作者。
// 如果某个创作者存在多个播放量最高的视频，则只需要找出字典序最小的 id 。
// 返回一个二维字符串数组 answer ，其中 answer[i] = [creatori, idi] 表示 creatori 的流行度 最高 且其最流行的视频 id 是 idi ，可以按任何顺序返回该结果。

/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function (creators, ids, views) {
  const hash = new Map();
  const n = creators.length;
  let ans = [];
  let max = -1;
  for (let i = 0; i < n; i++) {
    if (hash.has(creators[i])) {
      const arr = hash.get(creators[i]);
      arr[0] += views[i];
      if (views[i] > arr[2]) {
        arr[2] = views[i];
        arr[1] = ids[i];
      } else if (views[i] === arr[2]) {
        if (ids[i] < arr[1]) {
          arr[i] = ids[i];
        }
      }
    } else {
      // 和值，流行度最高 流行度最高的视频播放量
      hash.set(creators[i], [views[i], ids[i], views[i]]);
    }
    const arr = hash.get(creators[i]);
    if (arr[0] > max) {
      ans = [[creators[i], arr[1]]];
      max = arr[0];
    } else if (arr[0] == max) {
      ans.push([creators[i], arr[1]]);
    }
  }
  return ans;
};
