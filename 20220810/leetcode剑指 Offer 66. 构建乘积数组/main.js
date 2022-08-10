/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-10 14:38:08                                                  *
 * @LastModifiedDate: 2022-08-10 15:42:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积,
//  即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。

/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  // 使用除法的解法
  let prod = 1;
  let zerosNum = 0;
  for (const num of a) {
    if (num == 0) {
      zerosNum++;
      continue;
    }
    prod *= num;
  }
  const n = a.length;
  const ans = new Array(n).fill(0);
  if (zerosNum >= 2) {
    return ans;
  }
  if (zerosNum == 1) {
    for (let i = 0; i < n; i++) {
      if (a[i] == 0) {
        ans[i] = prod;
        break;
      }
    }
  }
  if (zerosNum == 0) {
    for (let i = 0; i < n; i++) {
      ans[i] = prod / a[i];
    }
  }
  return ans;
};

/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  let prod = 1;
  let zerosNum = 0;
  for (const num of a) {
    if (num == 0) {
      zerosNum++;
      continue;
    }
    prod *= num;
  }
  const n = a.length;
  const ans = new Array(n).fill(0);
  if (zerosNum >= 2) {
    return ans;
  }
  if (zerosNum == 1) {
    for (let i = 0; i < n; i++) {
      if (a[i] == 0) {
        ans[i] = prod;
        break;
      }
    }
  }
  // 上面都是特殊情况，无需使用除法，当所有数都有不是0的值时需要不使用除法得到结果
  // 后缀积,从末尾开始
  const suffix = new Array(n).fill(0);
  suffix[n - 1] = a[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * a[i];
  }
  suffix.push(1);
  let prod2 = 1;
  for (let i = 0; i < n; i++) {
    ans[i] = prod2 * suffix[i + 1];
    prod2 *= a[i];
  }
  return ans;
};

/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  const n = a.length;
  let zerosNum = a[n - 1] !== 0 ? 0 : 1;
  const suffix = new Array(n).fill(0);
  const ans = new Array(n).fill(0);
  suffix[n - 1] = a[n - 1] !== 0 ? a[n - 1] : 1;
  for (let i = n - 2; i >= 0; i--) {
    if (a[i] == 0) {
      suffix[i] = suffix[i + 1];
      zerosNum++;
    } else {
      suffix[i] = suffix[i + 1] * a[i];
    }
  }
  if (zerosNum >= 2) {
    return ans;
  }
  if (zerosNum == 1) {
    for (let i = 0; i < n; i++) {
      if (a[i] == 0) {
        ans[i] = suffix[0];
        break;
      }
    }
    return ans;
  }
  suffix.push(1);
  let prod = 1;
  for (let i = 0; i < n; i++) {
    ans[i] = prod * suffix[i + 1];
    prod *= a[i];
  }
  return ans;
};

/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  // 继续优化
  const n = a.length;
  if (n <= 1) {
    return a;
  }
  // 前缀积使用ans保存
  const ans = new Array(n).fill(0);
  // 第一个元素左边的乘积为1（因为左边没有元素）
  ans[0] = 1;
  for (let i = 1; i < n; i++) {
    ans[i] = ans[i - 1] * a[i - 1];
  }
  // 然后使用一个变量记录右边的乘积
  let r = 1;
  for (let i = n - 1; i >= 0; i--) {
    // 右边集合就是r，左边集合就是保存在ans中的前缀积
    ans[i] = r * ans[i];
    r *= a[i];
  }
  return ans;
};
