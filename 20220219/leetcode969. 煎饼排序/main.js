/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-19 01:38:21                                                  *
 * @LastModifiedDate: 2022-02-19 02:28:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 arr ，请使用 煎饼翻转 完成对数组的排序。

// 一次煎饼翻转的执行过程如下：

// 选择一个整数 k ，1 <= k <= arr.length
// 反转子数组 arr[0...k-1]（下标从 0 开始）
// 例如，arr = [3,2,1,4] ，选择 k = 3 进行一次煎饼翻转，反转子数组 [3,2,1] ，得到 arr = [1,2,3,4] 。

// 以数组形式返回能使 arr 有序的煎饼翻转操作所对应的 k 值序列。
// 任何将数组排序且翻转次数在 10 * arr.length 范围内的有效答案都将被判断为正确。

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  // 每次翻转把最大的值，翻转到最后即可
  // 即时数组长度，也是翻转的最大值
  let len = arr.length;
  // 记录翻转
  const ans = [];
  while (len > 1) {
    for (let i = 0; i < len; i++) {
      // 找到最大值
      if (arr[i] == len) {
        if (i + 1 == len) {
          // 本身就在最后，不用转化直接退出
          len--;
          arr = arr.slice(0, len);
          break;
        }
        // 不是最后一个就需要进行两次翻转到达最后一位
        // 前i+1个进行翻转
        // 如果就在第一个，就不用翻转额外
        if (i !== 0) {
          arr = arr
          .slice(0, i + 1)
          .reverse()
          .concat(arr.slice(i + 1));
          ans.push(i + 1);
        }
        // 整体进行翻转 把最大值放置到最后一位
        ans.push(len);
        len--;
        arr = arr.reverse().slice(0, len);
        break;
      }
    }
  }
  return ans;
};
