/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-16 16:20:47                                                  *
 * @LastModifiedDate: 2024-12-16 17:12:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个酒店里有 n 个房间，这些房间用二维整数数组 rooms 表示，其中 rooms[i] = [roomIdi, sizei] 表示有一个房间号为 roomIdi 的房间且它的面积为 sizei 。每一个房间号 roomIdi 保证是 独一无二 的。

// 同时给你 k 个查询，用二维数组 queries 表示，其中 queries[j] = [preferredj, minSizej] 。第 j 个查询的答案是满足如下条件的房间 id ：

// 房间的面积 至少 为 minSizej ，且
// abs(id - preferredj) 的值 最小 ，其中 abs(x) 是 x 的绝对值。
// 如果差的绝对值有 相等 的，选择 最小 的 id 。如果 没有满足条件的房间 ，答案为 -1 。

// 请你返回长度为 k 的数组 answer ，其中 answer[j] 为第 j 个查询的结果。

/**
 * @param {number[][]} rooms
 * @param {number[][]} queries
 * @return {number[]}
 */
var closestRoom = function (rooms, queries) {
  // 排序
  const ids = [];
  const n = rooms.length;
  const m = queries.length;
  const idxes = new Array(m)
    .fill(0)
    .map((v, i) => i)
    .sort((a, b) => queries[b][1] - queries[a][1]);
  const res = new Array(m).fill(-1);
  rooms.sort((a, b) => b[1] - a[1]);
  console.log(rooms);
  let left = 0;
  for (const idx of idxes) {
    const [preffer, minSize] = queries[idx];
    // 将满足minSize的房间记录在hash中
    while (left < n) {
      const [id, size] = rooms[left];
      if (size >= minSize) {
        insertId(ids, id);
        left++;
      } else break;
    }
    if (ids.length) {
      let left = 0;
      let right = ids.length;
      while (left <= right) {
        // 查找：第一个大于preffer的索引
        const mid = Math.floor((left + right) / 2);
        if (ids[mid] < preffer) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      if (left === ids.length) {
        res[idx] = ids[left - 1];
      } else if (left === 0) {
        res[idx] = ids[left];
      } else {
        const diff1 = Math.abs(ids[left - 1] - preffer);
        const diff2 = Math.abs(ids[left] - preffer);
        if (diff2 < diff1) {
          res[idx] = ids[left];
        } else res[idx] = ids[left - 1];
      }
    }
    console.log(ids);
  }
  return res;
};
// 维护ids的有序性
function insertId(ids, id) {
  const n = ids.length;
  let left = 0;
  let right = n;
  while (left <= right) {
    // 找打第一个比id大的值的索引
    const mid = Math.floor((left + right) / 2);
    if (ids[mid] < id) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  ids.splice(left, 0, id);
}
