/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-03 20:12:45                                                  *
 * @LastModifiedDate: 2022-07-03 20:41:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数 n ，请你找出符合条件的最小整数，
// 其由重新排列 n 中存在的每位数字组成，并且其值大于 n 。如果不存在这样的正整数，
// 则返回 -1 。

// 注意 ，返回的整数应当是一个 32 位整数 ，
// 如果存在满足题意的答案，但不是 32 位整数 ，同样返回 -1 。

const max = Math.pow(2, 31) - 1;

/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  // 单个的没有结果
  if (n <= 11) {
    return -1;
  }
  // 将结果分离
  const numArr = n.toString().split("");
  // 找到第一个后面有更大值的位置
  const stack = [];
  const len = numArr.length;
  let start = -1;
  for (let i = len - 1; i >= 0; i--) {
    let hasFind = false;
    for (const ele of stack) {
      if (ele > numArr[i]) {
        hasFind = true;
        break;
      }
    }
    stack.push(numArr[i]);
    if (hasFind) {
      start = i;
      break;
    }
  }
  if (start == -1) {
    // 没有找到
    return -1;
  }
  // 有结果，将start处开始的进行交换
  // 把大于start的最小元素放在start处，其他的按照从小到大的顺序进行排序
  const res = numArr[start];
  const newArr = numArr.slice(start + 1);
  let secondMin = Infinity;
  let secondeMinIdx = -1;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > res) {
      if (newArr[i] < secondMin) {
        secondMin = newArr[i];
        secondeMinIdx = i;
      }
    }
  }
  // 将res与secondeMinIdx位置的元素交换
  numArr[start] = newArr[secondeMinIdx];
  newArr[secondeMinIdx] = res;
  newArr.sort((a, b) => a - b);
  for (let i = start + 1; i < len; i++) {
    numArr[i] = newArr[i - start - 1];
  }
  let ans = parseInt(numArr.join(""));
  if (ans > max) {
    return -1;
  }
  return ans;
};
