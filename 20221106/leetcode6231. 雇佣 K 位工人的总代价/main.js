/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-06 19:16:24                                                  *
 * @LastModifiedDate: 2022-11-06 19:53:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 costs ，其中 costs[i] 是雇佣第 i 位工人的代价。

// 同时给你两个整数 k 和 candidates 。我们想根据以下规则恰好雇佣 k 位工人：

// 总共进行 k 轮雇佣，且每一轮恰好雇佣一位工人。
// 在每一轮雇佣中，从最前面 candidates 和最后面 candidates 人中选出代价最小的一位工人，如果有多位代价相同且最小的工人，选择下标更小的一位工人。
// 比方说，costs = [3,2,7,7,1,2] 且 candidates = 2 ，第一轮雇佣中，我们选择第 4 位工人，因为他的代价最小 [3,2,7,7,1,2] 。
// 第二轮雇佣，我们选择第 1 位工人，因为他们的代价与第 4 位工人一样都是最小代价，而且下标更小，[3,2,7,7,2] 。注意每一轮雇佣后，剩余工人的下标可能会发生变化。
// 如果剩余员工数目不足 candidates 人，那么下一轮雇佣他们中代价最小的一人，如果有多位代价相同且最小的工人，选择下标更小的一位工人。
// 一位工人只能被选择一次。
// 返回雇佣恰好 k 位工人的总代价。

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
  // 优先队列，双指针
  const n = costs.length;
  if (n <= candidates * 2) {
    costs.sort((a, b) => a - b);
    let ans = 0;
    for (let i = 0; i < k; i++) {
      ans += costs[i];
    }
    return ans;
  }
  let header = new PQ((a, b) => {
    if (b[0] !== a[0]) {
      return b[0] - a[0];
    }
    return b[1] - a[1];
  });
  let tailer = new PQ((a, b) => {
    if (b[0] !== a[0]) {
      return b[0] - a[0];
    }
    return b[1] - a[1];
  });
  for (let i = 0; i < candidates; i++) {
    header.addVal([costs[i], i]);
    tailer.addVal([costs[n - i - 1], n - i - 1]);
  }
  let left = candidates;
  let right = n - candidates - 1;
  let ans = 0;
  while (k) {
    let hCur = header.data[header.data.length - 1];
    let tCur = tailer.data[tailer.data.length - 1];
    if (hCur && tCur) {
      // 都有最小值，需要比较
      if (header.compare(hCur, tCur) > 0) {
        ans += header.data.pop()[0];
        if (left <= right) {
          header.addVal([costs[left], left]);
          left++;
        }
      } else {
        // 尾部的比较小
        ans += tailer.data.pop()[0];
        if (left <= right) {
          tailer.addVal([costs[right], right]);
          right--;
        }
      }
    } else if (hCur) {
      // 只有hCur有
      ans += header.data.pop()[0];
    } else {
      // 只有tCur有
      ans += tailer.data.pop()[0];
    }
    k--;
  }
  return ans;
};

class PQ {
  constructor(compare = (a, b) => a - b) {
    this.data = [];
    this.compare = compare;
  }
  addVal(val) {
    const idx = this.binarySearch(val);
    this.data.splice(idx, 0, val);
  }
  binarySearch(val) {
    let left = 0;
    let right = this.data.length;
    while (left < right) {
      // 找到第一位比val大的
      let mid = (left + right) >> 1;
      if (this.compare(this.data[mid], val) > 0) {
        // mid比val大
        right = mid;
      } else {
        // mid不超过val
        left = mid + 1;
      }
    }
    return right;
  }
}

const pq = new PQ();
pq.addVal(8);
pq.addVal(20);
pq.addVal(11);
console.log(pq.data);
