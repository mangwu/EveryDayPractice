/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-16 09:09:50                                                  *
 * @LastModifiedDate: 2022-08-16 10:07:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  // 多项合并
  const ans = [1];
  let cur1 = 2;
  let cur2 = 3;
  let cur3 = 5;
  let idx1 = 1;
  let idx2 = 1;
  let idx3 = 1;

  while (ans.length !== n) {
    let pre = ans[ans.length - 1];
    if (cur1 <= cur2 && cur1 <= cur3) {
      if (pre < cur1) {
        ans.push(cur1);
      }
      cur1 = ans[idx1] * 2;
      idx1++;
      continue;
    }
    if (cur2 <= cur1 && cur2 <= cur3) {
      if (pre < cur2) {
        ans.push(cur2);
      }
      cur2 = ans[idx2] * 3;
      idx2++;
      continue;
    }
    if (cur3 <= cur1 && cur3 <= cur2) {
      if (pre < cur3) {
        ans.push(cur3);
      }
      cur3 = ans[idx3] * 5;
      idx3++;
      continue;
    }
  }
  return ans[ans.length - 1];
};

// 2 4 6 8 10 12 16 18
// 3 6 9 12 15
// 5 10 15 20 25 30

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  // 三项合并
  const pq = new PriorityQueue2();
  pq.addVal(1);
  let idx = 0;
  while (idx < n) {
    const cur = pq.getVal(idx);
    pq.addVal(cur * 2);
    pq.addVal(cur * 3);
    pq.addVal(cur * 5);
    idx++;
  }
  return pq.getVal(n - 1);
};
class PriorityQueue2 {
  constructor(compare = (a, b) => a - b) {
    this.compare = compare;
    this.data = [];
  }
  binarySearch(target) {
    let left = 0;
    let right = this.data.length;
    while (left < right) {
      // 找到第一个比val大的索引
      let mid = (left + right) >> 1;
      if (this.data[mid] == target) {
        // 已添加，不用在加了
        return false;
      } else if (this.compare(this.data[mid], target) > 0) {
        // mid比target大
        right = mid;
      } else {
        // mid比target小
        left = mid + 1;
      }
    }
    return right;
  }
  addVal(val) {
    let res = this.binarySearch(val);
    // 不用添加
    if (res === false) {
      return;
    }
    this.data.splice(res, 0, val);
  }
  getVal(idx) {
    // 获取指定索引的值
    if (idx >= this.data.length) {
      return -1;
    }
    return this.data[idx];
  }
}
