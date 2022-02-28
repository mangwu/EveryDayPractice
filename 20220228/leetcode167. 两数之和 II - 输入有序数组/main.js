/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-28 13:54:35                                                  *
 * @LastModifiedDate: 2022-02-28 17:04:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。
// 如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。

// 以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。

// 你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。

// 你所设计的解决方案必须只使用常量级的额外空间。

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // 与两数之和的唯一区别在于，numbers是有序的,而之前的是无序的
  // 如果使用hash，时间复杂度为O(n)空间复杂度为O(n)
  const hash = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const other = target - numbers[i];
    if (hash.has(other)) {
      return [hash.get(other), i + 1];
    }
    hash.set(numbers[i], i + 1);
  }
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (numbers, target) {
  // 使用二分查找，不使用hash存储，时间复杂度O(logn n) 空间复杂度O(1)
  for (let i = 0; i < numbers.length; i++) {
    const other = target - numbers[i];
    // 开始二分查找 [i+1, len] [0, i - 1]
    let isRight = other > numbers[i];
    let left = isRight ? i + 1 : 0;
    let right = isRight ? numbers.length - 1 : i - 1;
    let mid;

    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (numbers[mid] === other) {
        return isRight ? [i + 1, mid + 1] : [mid + 1, i + 1];
      } else if (numbers[mid] > other) {
        // 选择左边区域 [left, mid-1]
        right = mid - 1;
      } else {
        // 选择右边区域 [mid + 1, left]
        left = mid + 1;
      }
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));

// 使用双指针 时间复制度O(n) 空间复杂度O(1) 最优解

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum3 = function (numbers, target) {
  // 使用双指针的最优解
  // 因为numbers有序，所以从两头开始相加比较
  // 如果和值比target大，右指针左移，选择一个小一点的数
  // 如果和值比target小，左指针右移动，选择一个大一点的数
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum == target) {
      return [left + 1, right + 1];
    }
    if (sum > target) {
      // 右指针左移
      right--;
    } else {
      left++;
    }
  }
};
