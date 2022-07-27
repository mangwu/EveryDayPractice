/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-27 11:06:36                                                  *
 * @LastModifiedDate: 2022-07-27 14:09:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

// 给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。
// 请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为 1。

// 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  return Math.min.apply(null, numbers);
};

/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  // 二分查找
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (numbers[mid] > numbers[right]) {
      // 最小值一定在右边
      left = mid + 1;
    } else if (numbers[mid] < numbers[right]) {
      // 最小值一定在左边 (包括right)
      right = mid;
    } else {
      // 相等的情况，不能确定在左边还是右边，就直接改变left或right的值
      // 因为本身升序，所以不能修改left值（初始0可能就是最小值）
      right--;
    }
  }
  return numbers[left];
};

// 5 6 7 8 9 1 2 3
// 8 9 1 2 3 5 6 7
