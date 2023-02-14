/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-14 09:05:58                                                  *
 * @LastModifiedDate: 2023-02-14 11:14:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一份工作时间表 hours，上面记录着某一位员工每天的工作小时数。

// 我们认为当员工一天中的工作小时数大于 8 小时的时候，那么这一天就是「劳累的一天」。

// 所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 大于「不劳累的天数」。

// 请你返回「表现良好时间段」的最大长度。

/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  const n = hours.length;
  const dp = new Array(n + 1).fill(0);
  // 0 0 1 0 0 1 0 3 6 9
  for (let i = 0; i < n; i++) {
    // 计算每个以hours[i]为最后一位的最大表现良好天数
    if (hours[i] > 8) {
      // 劳累的一天
    } else {
      // 不劳累的一天
    }
  }
};

/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  const n = hours.length;
  // 二分法
  let left = 0;
  let right = n;
  const check = (m) => {
    let tired = 0;
    for (let i = 0; i < m; i++) {
      if (hours[i] > 8) tired++;
    }
    let notTired = m - tired;
    if (tired > notTired) return true;
    for (let i = m; i < n; i++) {
      if (hours[i] > 8) tired++;
      else notTired++;
      if (hours[i - m] > 8) tired--;
      else notTired--;
      if (tired > notTired) return true;
    }
    return false;
  };
  while (left <= right) {
    let mid = (left + right) >> 1;
    console.log(check(mid), mid, left, right);
    if (check(mid)) {
      // mid符合条件
      left = mid + 1;
    } else {
      // mid不符合条件
      right = mid - 1;
    }
  }
  return right;
};

// 二分法是错误的解答，因为表现良好的时间段并不是连续的
// 例如可能没有长度为12的表现良好的事件段，但是可能有13的
// 如果检测到12不符合条件，二分法后续就不会检测13了，就错过了正确答案

/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  const n = hours.length;
  let tired = 0;
  for (const hour of hours) {
    if (hour > 8) tired++;
  }
  let notTired = n - tired;
  if (tired > notTired) return n;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    if (hours[left] <= 8) {
      left++;
      notTired--;
    } else if (hours[right] <= 8) {
      right--;
      notTired--;
    } else {
      // 二者都大于等于8 不容易考虑
      left++;
      right--;
      tired -= 2;
    }
    if (tired > notTired) {
      // 进行扩展
    }
  }
  return 0;
};

/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  const n = hours;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    if (hours[i] > 8) {
      prefix[i + 1] = prefix[i] + 1;
    } else {
      prefix[i + 1] = prefix[i] - 1;
    }
  }
  // 选取两个数保证这两个数之差大于0，并且二者的距离最大
  if (prefix[n] > 0) return n;
  const hash = new Map();
  for (let i = 0; i <= n; i++) {}
};
// [0,1,2,3,2,1,0,-1,-2,-3,-2,-1,-2,-1,0,1,0,1,2,3,2,1,0,-1]

/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  const n = hours.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    if (hours[i] > 8) {
      prefix[i + 1] = prefix[i] + 1;
    } else {
      prefix[i + 1] = prefix[i] - 1;
    }
  }
  // 选取两个数保证这两个数之差大于0，并且二者的距离最大
  if (prefix[n] > 0) return n;
  const hash = new Map();
  let res = 0;
  for (let i = 0; i <= n; i++) {
    if (!hash.has(prefix[i])) {
      hash.set(prefix[i], i);
    }
    if (prefix[i] > 0) {
      res = Math.max(res, i);
    } else if (hash.has(prefix[i] - 1)) {
      res = Math.max(res, i - hash.get(prefix[i] - 1));
    }
  }
  return res;
};
// 0 -1 -2 -1 0
// 6 6 8 8

/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  const n = hours.length;
  const prefix = new Array(n + 1).fill(0);
  const hash = new Map();
  let res = 0;
  for (let i = 1; i <= n; i++) {
    prefix[i] = prefix[i - 1] + (hours[i - 1] > 8 ? 1 : -1);
    if (!hash.has(prefix[i])) hash.set(prefix[i], i);
    if (prefix[i] > 0) res = Math.max(res, i);
    else if (hash.has(prefix[i] - 1))
      res = Math.max(res, i - hash.get(prefix[i] - 1));
  }
  return res;
};
