/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-18 09:06:33                                                  *
 * @LastModifiedDate: 2022-05-18 13:41:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 几乎每一个人都用 乘法表。但是你能在乘法表中快速找到第k小的数字吗？

// 给定高度m 、宽度n 的一张 m * n的乘法表，以及正整数k，你需要返回表中第k 小的数字。

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
  // 需要考虑重复数字
  // m <= 30000 n <= 30000 k <= m * n
  // 所以构造一个二维数组再选取是不太可能的

  // [1,1] [1,2] [2,1] [1,3] [3,1] [1,4] [4,1] [2,2] [2,3]
  if (m > n) {
    return findKthNumber(n, m, k);
  }
  let num = 0;
  let sqrt = Math.floor(Math.sqrt(m));
  for (let i = 1; i <= sqrt; i++) {
    num += 2 * (Math.floor((sqrt * sqrt) / i) - i + 1) - 1;
  }
  console.log(num);
  if (k == num) {
    return sqrt * sqrt;
  }
  if (k > num) {
    // 计算其它（正确） 但会导致超时
    let idx = sqrt * sqrt + 1;
    while (idx <= m * n && num < k) {
      num += numsOfNumber(idx, m, n);
      idx++;
    }
    return idx - 1;
  }
  // 小于num 说明值小于m
  while (num > k) {
    sqrt--;
    num = 0;
    for (let i = 1; i <= sqrt; i++) {
      num += 2 * (Math.floor((sqrt * sqrt) / i) - i + 1) - 1;
    }
  }
  if (k == num) {
    return sqrt * sqrt;
  }
  if (k > num) {
    // 计算其它（正确） 但会导致超时
    let idx = sqrt * sqrt + 1;
    while (idx <= m * n && num < k) {
      num += numsOfNumber(idx, m, n);
      idx++;
    }
    return idx - 1;
  }
};
const numsOfNumber = (num, m, n) => {
  // m 是最大遍历数， n是最大长度
  let ans = 0;
  for (let i = 1; i <= m; i++) {
    if (num % i == 0) {
      if (num / i <= n) {
        ans++;
      }
    }
  }
  return ans;
};

// 1 => 2 - 1 = 1
// 4 => 8 - 1 + 2 - 1 = 8
// 16 => 32 - 1 + 14 - 1 + 6 - 1 + 2 - 1 = 50
// 25 => 50 - 1 + 22 - 1 + 12 - 1 + 6 - 1 + 2 - 1 = 87
// 1	2	 3  4  5  6  7  8 9 10 11 12 13 14 15 16
// 2	4	 6  8  10 12 14 16
// 3	6	 9  12 15
// 4  8  12 16
// 5  10 15
// 6  12
// 7  14
// 8  16
// 9
// 10
// 12
// 13
// 14
// 15
// 16

// n ^ 2 => 2 * n^2 - 1 + 2 * (n^2 / 2 - 1) - 1 + 2 * (n^2 / 3 - 1) - 1 + ... 2 * (n / n) - 1;
findKthNumber(2, 3, 5);
findKthNumber(30, 30, 5);
findKthNumber(4000, 4000, 5);
findKthNumber(5000, 5000, 5);

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
  // 二分查找
  let left = 1;
  let right = m * n;
  // [left, right]
  while (left < right) {
    const mid = (left + right) >> 1;
    // 计算数字不超过mid的个数
    let cnt = Math.floor(mid / n) * n;
    for (let i = Math.floor(mid / n) + 1; i <= m; i++) {
      cnt += Math.floor(mid / i);
    }
    // 个数与k比较
    if (cnt >= k) {
      // 不超过mid的个数比k多，mid太大了,在左区间
      right = mid;
    } else {
      // 不超过mid的个数比k少，mid小了，在右区间
      left = mid + 1;
    }
  }
  return left;
};
