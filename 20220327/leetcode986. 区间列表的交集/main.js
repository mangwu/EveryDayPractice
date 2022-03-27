/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-27 03:52:15                                                  *
 * @LastModifiedDate: 2022-03-27 06:04:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  // 双指针 指向两个数组中的元素，一个元素没有利用价值了就移动指针
  let i = 0;
  let j = 0;
  let ans = [];
  const len1 = firstList.length;
  const len2 = secondList.length;
  while (i < len1 || j < len2) {
    if (i == len1) {
      break;
    }
    if (j == len2) {
      break;
    }
    if (
      firstList[i][1] >= secondList[j][0] &&
      firstList[i][0] <= secondList[j][1]
    ) {
      // 具有交集
      let start = Math.max(firstList[i][0], secondList[j][0]);
      let end;
      if (firstList[i][1] > secondList[j][1]) {
        // 第一个列表的后续大
        end = secondList[j][1];
        ans.push([start, end]);
        j++;
      } else if (firstList[i][1] == secondList[j][1]) {
        // 一样大
        end = secondList[j][1];
        ans.push([start, end]);
        i++;
        j++;
      } else {
        // 第二个大
        end = firstList[i][1];
        ans.push([start, end]);
        i++;
      }
    } else if (firstList[i][1] < secondList[j][0]) {
      // 第一个完全在第二个前面
      i++;
    } else if (secondList[j][1] < firstList[i][0]) {
      // 第二个完全在第一个前面
      j++;
    }
  }
  return ans;
};
