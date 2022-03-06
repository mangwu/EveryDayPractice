/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-06 17:17:48                                                  *
 * @LastModifiedDate: 2022-03-06 21:14:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你和一群强盗准备打劫银行。给你一个下标从 0 开始的整数数组 security ，其中 security[i] 是第 i 天执勤警卫的数量。日子从 0 开始编号。同时给你一个整数 time 。

// 如果第 i 天满足以下所有条件，我们称它为一个适合打劫银行的日子：

// 第 i 天前和后都分别至少有 time 天。
// 第 i 天前连续 time 天警卫数目都是非递增的。
// 第 i 天后连续 time 天警卫数目都是非递减的。
// 更正式的，第 i 天是一个合适打劫银行的日子当且仅当：security[i - time] >= security[i - time + 1] >= ... >= security[i] <= ... <= security[i + time - 1] <= security[i + time].

// 请你返回一个数组，包含 所有 适合打劫银行的日子（下标从 0 开始）。返回的日子可以 任意 顺序排列。
/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function (security, time) {
  // 即返回元素索引数组
  // 该元素索引所在位置处于前面time个元素的最最小值，处于后面time个元素的最大值
  // 遍历一遍security，从递减处开始计算,记录开头
  const len = security.length;
  if (time == 0) {
    return new Array(len).fill(0).map((_v, i) => i);
  }
  if (len <= time * 2) {
    return [];
  }
  // 记录开头，从0开始
  let start = 0;
  // 记录最低处相同的个数
  let same = 0;
  // 记录最低处值
  let low = -1;
  // 答案
  let ans = [];
  // 开始遍历
  for (let i = 1; i < security.length; i++) {
    // console.log(i, start, same, low);
    // 在time内
    if (i - start < time) {
      if (security[i] <= security[i - 1]) {
        continue;
      } else {
        start = i;
      }
      continue;
    }
    // 最低处
    if (i - start == time) {
      if (security[i] <= security[i - 1]) {
        low = security[i];
        continue;
      } else {
        start = i;
        low = -1;
      }
      continue;
    }
    // [time + 1, 2 * time]处
    if (i - start >= time + 1 && i - start <= 2 * time) {
      // 判断是否符合条件
      if (security[i] < security[i - 1]) {
        // 不符合条件 这里的start更新有两种情况
        // 如果正好是中点处的下一个，就只能右移动一位
        if (i - start == time + 1) {
          start = start + 1;
        } else if (security[i - 1] == low) {
          // console.log("--");
          start = i - time;
        } else {
          start = i - 1;
        }
        // 同时更新low
        low = security[start + time];
      } else {
        // 符合条件
        // 查看是否相等
        if (security[i] == security[i - 1] && security[i] == low) {
          same++;
        }
        // 查看是否是最后一个
        if (i - start == 2 * time) {
          // console.log(i, start);
          //是就push答案进去
          ans.push(start + time);
          // 查看中间是否有相同的值
          if (same) {
            // 有就start加1
            start = start + 1;
            low = security[start + time];
            same--;
          } else {
            // 完成一轮，更新start
            //不能简单等于i，需要判断前面n个是具有相同的元素
            let pre = security[i];
            let j = i;
            for (; i - j < time; j--) {
              if (security[j] !== pre) {
                break;
              }
            }
            // console.log(j, i);
            start = j + 1;
          }
        }
      }
    }
  }
  // console.log(ans);
  return ans;
};

goodDaysToRobBank([1,1,1,2,2,0,1,1], 2);
