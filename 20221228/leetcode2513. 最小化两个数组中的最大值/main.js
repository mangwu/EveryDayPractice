/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-28 15:24:31                                                  *
 * @LastModifiedDate: 2022-12-28 16:34:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个数组 arr1 和 arr2 ，它们一开始都是空的。你需要往它们中添加正整数，使它们满足以下条件：

// arr1 包含 uniqueCnt1 个 互不相同 的正整数，每个整数都 不能 被 divisor1 整除 。
// arr2 包含 uniqueCnt2 个 互不相同 的正整数，每个整数都 不能 被 divisor2 整除 。
// arr1 和 arr2 中的元素 互不相同 。
// 给你 divisor1 ，divisor2 ，uniqueCnt1 和 uniqueCnt2 ，请你返回两个数组中 最大元素 的 最小值 。

/**
 * @param {number} divisor1
 * @param {number} divisor2
 * @param {number} uniqueCnt1
 * @param {number} uniqueCnt2
 * @return {number}
 */
var minimizeSet = function (divisor1, divisor2, uniqueCnt1, uniqueCnt2) {
  // 手玩
  // d1 = 4, d2 = 6
  // arr1: 1 2 3   5 6 7   9 10 11  13 14 15 ...
  // arr2: 1 2 3 4 5   7 8 9 10 11  13 14 15 ...
  // 有些数只有arr1独占，它们是6的倍数，但是不是4的倍数的数（或者说不能是LCM(6,4) = 12的倍数）
  // 有些数只有arr2独占，它们是4的倍数，但是不是6的倍数的数（或者说不能是LCM(6,4) = 12的倍数）
  // arr1和arr2共享的数：既不是4的倍数，又不是6的倍数，
  // = 所有数的个数减去 - (4的倍数+6的倍数-12的倍数)

  // 答案越大，能选的数越多，就越能组成满足要求的arr1和arr2  => 单调性
  // 答案越小，能选的数越少，就越不能组成满足要求的arr1和arr2
  let left = 1; // 最小值
  let right = (uniqueCnt1 + uniqueCnt2) * 2 - 1; // 最坏情况下，只能选择奇数
  let lcm = getLCM(divisor1, divisor2);
  const check = (d) => {
    // 查看d是否满足条件
    let left1 = Math.max(
      uniqueCnt1 - (Math.floor(d / divisor2) - Math.floor(d / lcm)),
      0
    ); // 计算arr1独占的数量与要求数量之差
    let left2 = Math.max(
      uniqueCnt2 - (Math.floor(d / divisor1) - Math.floor(d / lcm)),
      0
    ); // 计算arr2独占的数量与要求数量之差
    let common =
      d -
      (Math.floor(d / divisor1) +
        Math.floor(d / divisor2) -
        Math.floor(d / lcm)); // 共享的个数
    return common >= left1 + left2;
  };
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // 检查mid是否满足题目条件
    if (check(mid)) {
      // 满足那就说明可能还有更小的
      right = mid - 1;
    } else {
      // 不满足，
      left = mid + 1;
    }
  }
  return left;
};

/**
 * @description 求最小公倍数
 * @param {number} d1 数1
 * @param {number} d2 数2
 */
var getLCM = function (d1, d2) {
  // 两整数的乘积/最大公约数
  let divisor = gcd(d1, d2);
  return (d1 * d2) / divisor;
};

/**
 * @description 辗转相除法求最大公约数
 * @param {number} d1 数1
 * @param {number} d2 数2
 */
var gcd = function (d1, d2) {
  if (d1 < d2) [d2, d1] = [d1, d2]; // 交换位置，保证d1大于等于d2
  while (d2 !== 0) {
    [d1, d2] = [d2, d1 % d2];
  }
  return d1;
};
