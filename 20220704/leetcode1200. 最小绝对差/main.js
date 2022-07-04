/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-04 08:55:39                                                  *
 * @LastModifiedDate: 2022-07-04 09:02:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你个整数数组 arr，其中每个元素都 不相同。

// 请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let min = Infinity;
  let ans = null;
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    if (arr[i] - arr[i - 1] < min) {
      ans = [[arr[i - 1], arr[i]]];
      min = arr[i] - arr[i - 1];
    } else if (arr[i] - arr[i - 1] == min) {
      ans.push([arr[i - 1], arr[i]]);
    }
  }
  return ans;
};
