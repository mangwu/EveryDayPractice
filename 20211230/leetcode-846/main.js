/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2021-12-30 16:35:31                                                  *
 * @LastModifiedDate: 2021-12-30 20:37:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2021 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Alice 手中有一把牌，她想要重新排列这些牌，分成若干组，使每一组的牌数都是 groupSize ，并且由 groupSize 张连续的牌组成。

// 给你一个整数数组 hand 其中 hand[i] 是写在第 i 张牌，和一个整数 groupSize 。如果她可能重新排列这些牌，返回 true ；否则，返回 false 。

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  // 需要考虑有相同值的情况
  // hand的长度如果不是groupSize的倍数就无法重新排列成功
  if (groupSize === 1) return true;
  let n = hand.length;
  // 不是倍数就无法排列
  if (n % groupSize !== 0) return false;
  // 数组排序
  hand.sort((a, b) => a - b);
  // console.log(hand);
  // 保存符合条件的连续队列
  let queue = [];
  // 遍历数组选出符合要求的队列

  while (hand.length > 0) {
    // 获得四个符合递增加一条件的
    let i = 0;
    // 直接入队第一个元素
    queue.push(hand.shift());
    while (queue.length !== groupSize) {
      let qLen = queue.length;
      // console.log(queue);
      // 如果递增1
      if (queue[qLen - 1] + 1 === hand[i]) {
        // 递增1，// 删除指定索引的元素并入队
        queue.push(hand.splice(i, 1)[0]);
      } else if (queue[qLen - 1] === hand[i] && i + 1 < hand.length) {
        // 相等元素 后续元素可能有递增1的
        i++;
      } else {
        return false;
      }
    }
    // console.log(queue);
    // 获得第一个后情清空queue
    queue = [];
  }
  return true;
};
console.log(isNStraightHand([1, 2, 11, 6, 2, 3, 4, 7, 8, 9, 10, 3], 3));
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand2 = function (hand, groupSize) {
  // 需要考虑有相同值的情况
  // hand的长度如果不是groupSize的倍数就无法重新排列成功
  let n = hand.length;
  // 不是倍数就无法排列
  if (n % groupSize !== 0) return false;
  // 数组排序
  hand.sort((a, b) => a - b);
  let map = new Map();
  // 利用hash表记录每个的个数
  for (let h of hand) {
    map.set(h, map.get(h) !== undefined ? map.get(h) + 1 : 1);
  }
  // 遍历数组，使用贪心算法获取当前数组中最小值的连续增1的groupSize，队列
  for (let h of hand) {
    if (!map.has(h)) {
      // 没有就继续遍历
      continue;
    }
    // 生成该最小值的groupSize的连续队列,使用贪心算法
    for (let i = 0; i < groupSize; i++) {
      let num = h + i;
      // 没有就返回false
      if (!map.has(num)) {
        return false;
      }
      // 有就减去1
      map.set(num, map.get(num) - 1);
      // 如果数量为0就删除
      if (map.get(num) === 0) {
        map.delete(num);
      }
    }
  }

  return true;
};
console.log(isNStraightHand2([1, 2, 11, 6, 2, 3, 4, 7, 8, 9, 10, 3], 3));

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand3 = function (hand, groupSize) {
  // 利用顺子的特性计算
  // hand的每个值mod groupSize的每个值的个数应该是相等的，
  // 其次，hand除以groupSize获得的除数的个数都应该是groupSize的倍数
  // 判断个数
  const n = hand.length;
  if (n % groupSize !== 0) {
    return false;
  }
  // 排序
  hand.sort((a, b) => a - b);
  // 声明保存取余数的数组
  let modArr = new Array(groupSize).fill(0);
  // 声明保存除数的hash结构
  let divisorHash = new Map();
  for (let h of hand) {
    // 余数加一
    modArr[h % groupSize]++;
    // 除数加一
    let divisor = Math.floor(h / groupSize);
    divisorHash.set(divisor, (divisorHash.get(divisor) || 0) + 1);
  }
  console.log(modArr, divisorHash);
  // 余数个数必定相等
  for (let i = 0; i < groupSize - 1; i++) {
    if (modArr[i] !== modArr[i + 1]) {
      return false;
    }
  }
  if (groupSize === 1) {
    return true;
  }
  // 上一个key值
  let lastKey = -1;
  //
  let modValue = 0;
  
  // 除数必定是
  for (let [key, value] of divisorHash) {
    if (lastKey === -1) {
      lastKey = key;
      modValue = value % groupSize;
      continue;
    }
    if (key !== lastKey + 1 && modValue !== 0) {
      return false;
    } else {
      lastKey = key;
      modValue = (modValue + value) % groupSize;
    }
  }
  console.log(modValue);
  return true;
};
console.log(isNStraightHand3([8, 10, 12], 3));
