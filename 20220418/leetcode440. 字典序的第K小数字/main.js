/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-18 15:35:11                                                  *
 * @LastModifiedDate: 2022-04-18 17:23:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定整数 n 和 k，返回  [1, n] 中字典序第 k 小的数字。

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  // 这一题作为字典序排序的后置题目，需要做到的是再dfs迭代过程中，当i == k时将cur值返回
  let cur = 1;
  for (let i = 1; i <= n; i++) {
    if (k == i) {
      return cur;
    }
    if (cur * 10 <= n) {
      cur = cur * 10;
    } else {
      while (cur + 1 > n || cur % 10 == 9) {
        // 回溯
        cur = Math.floor(cur / 10);
      }
      cur++;
    }
  }
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  // 递归解法O(k)
  let idx = 0;
  const dfs = (cur, k) => {
    if (cur > n) {
      idx--;
      return;
    }
    if (idx == k) {
      return cur;
    }
    let ans = null;
    for (let i = 0; i <= 9; i++) {
      idx++;
      ans = ans || dfs(cur * 10 + i, k);
    }
    return ans;
  };
  let ans = null;
  for (let i = 1; i <= 9; i++) {
    idx++;
    ans = ans || dfs(i, k);
  }
  return ans;
};

// 上面两种的解法时间复杂度都是O(k)，k的范围过大，都会超时

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  // curr是当前节点数字，n是总数
  const getSteps = (curr, n) => {
    let steps = 0;
    let first = curr;
    let last = curr;
    // 从当前节点开始计算
    // 层序遍历，时间复杂度O(logn)
    while (first <= n) {
      // last - first + 1 因为last有可能超过n，所以取二者小值
      steps += Math.min(last, n) - first + 1;
      first = first * 10;
      last = last * 10 + 9;
    }
    return steps;
  };
  let curr = 1;
  k--; // 当前curr为1也记一次节点数
  //
  while (k > 0) {
    // 获取当前节点的数量
    const steps = getSteps(curr, n);
    if (steps <= k) {
      // 不在当前节点中，curr遍历到兄弟节点中
      k -= steps;
      curr++;
    } else {
      // 在当前节点的子节点中，从当前节点的子节点的第一个左节点开始遍历
      curr = curr * 10;
      k--;
    }
  }
  return curr;
};
