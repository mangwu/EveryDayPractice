/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-06 17:18:35                                                  *
 * @LastModifiedDate: 2022-10-06 18:08:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个由 0 和 1 组成的数组 arr ，将数组分成  3 个非空的部分 ，
// 使得所有这些部分表示相同的二进制值。

// 如果可以做到，请返回任何 [i, j]，其中 i+1 < j，这样一来：

// arr[0], arr[1], ..., arr[i] 为第一部分；
// arr[i + 1], arr[i + 2], ..., arr[j - 1] 为第二部分；
// arr[j], arr[j + 1], ..., arr[arr.length - 1] 为第三部分。
// 这三个部分所表示的二进制值相等。
// 如果无法做到，就返回 [-1, -1]。

// 注意，在考虑每个部分所表示的二进制时，应当将其看作一个整体。
// 例如，[1,1,0] 表示十进制中的 6，而不会是 3。此外，前导零也是被允许的，
// 所以 [0,1,1] 和 [1,1] 表示相同的值。

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var threeEqualParts = function (arr) {
  // 可以确定三个部分的1的数量是相等的(否则不可能相同)
  // 计算得出1的数量，如果不是3的倍数，直接返回[-1,-1]
  // 然后分别计算三个1构成的数字是否具有相同结构
  let oneNums = 0;
  for (const item of arr) {
    if (item) {
      oneNums++;
    }
  }
  let oneNum = 0;
  if (oneNums === 0) {
    // 全是0的i情况
    return [0, arr.length - 1];
  }
  if (oneNums % 3 !== 0) {
    return [-1, -1];
  }
  oneNum = oneNums / 3;
  // 倒叙便利
  // 记录0的个数
  let zeroNum = 0;
  // 记录结构
  const structure = [];
  let idx = arr.length - 1;
  let curOneNums = 0;
  for (; idx >= 0; idx--) {
    if (structure.length == 0 && arr[idx] == 0) {
      zeroNum++;
    } else {
      structure.push(arr[idx]);
      if (arr[idx] == 1) {
        curOneNums++;
      }
      if (curOneNums == oneNum) {
        idx--;
        break;
      }
    }
  }
  const ans = [];
  while (idx >= 0) {
    let curOneNums = 0;
    let start = -1;
    let curZeroNum = 0;
    for (; idx >= 0; idx--) {
      if (start == -1 && arr[idx] == 0) {
        curZeroNum++;
      } else if (start == -1) {
        start = idx;
        curOneNums++;
      } else {
        // 比较结构
        console.log(arr[idx], structure[start - idx]);
        if (arr[idx] !== structure[start - idx]) {
          return [-1, -1];
        }
        if (arr[idx] == 1) {
          curOneNums++;
        }
      }
      if (curOneNums == oneNum) {
        idx--;
        break;
      }
    }
    // 判断0是否满足要求
    if (curZeroNum < zeroNum) {
      return [-1, -1];
    }
    ans.unshift(start + zeroNum + 1);
    if (ans.length == 2) {
      ans[0]--;
      return ans;
    }
  }
};
