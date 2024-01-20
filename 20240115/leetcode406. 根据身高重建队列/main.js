/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-15 17:04:23                                                  *
 * @LastModifiedDate: 2024-01-15 17:33:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 假设有打乱顺序的一群人站成一个队列，数组 people 表示队列中一些人的属性（不一定按顺序）。每个 people[i] = [hi, ki] 表示第 i 个人的身高为 hi ，前面 正好 有 ki 个身高大于或等于 hi 的人。

// 请你重新构造并返回输入数组 people 所表示的队列。返回的队列应该格式化为数组 queue ，其中 queue[j] = [hj, kj] 是队列中第 j 个人的属性（queue[0] 是排在队列前面的人）。

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  // 可以根据前面人的位置确定身高最短人的位置的索引
  // 确定后，确定身高第二短的人的索引
  const n = people.length;
  people.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return b[1] - a[1];
  });
  const ans = new Array(n).fill(-1);
  for (const item of people) {
    // 前面要有item[1]个空位留给他高的人
    let cur = 0;
    for (let i = 0; i < n; i++) {
      if (cur === item[1] && ans[i] === -1) {
        // 确认位置
        ans[i] = item;
        break;
      }
      if (ans[i] === -1 || ans[i][0] >= item[0]) cur++;
    }
  }
  return ans;
};

// 7 4  8 6 4 5 9

// [7,0] [4,1] [8,0] [6,2] [4,4] [5,3] [9,0]

// [7,0] [4,1] [6,2] [5,3] [4,4]
