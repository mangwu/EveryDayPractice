/*
 * @Author: mangwu                                                             *
 * @File: mian.js                                                              *
 * @Date: 2022-01-18 16:11:54                                                  *
 * @LastModifiedDate: 2022-01-18 17:22:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  // 暴力解法，排序后求差值，找到最小差值
  timePoints.sort();
  console.log(timePoints);
  // 数组长度
  const len = timePoints.length;
  // 第一个元素
  let pre = timePoints[0];
  // 声明最小值 以第一个和最后一个的到减值为初始值
  let ans = 1440 - HHMMSub(timePoints[len - 1], pre);
  // 遍历数组
  for (let i = 1; i < len; i++) {
    const newAns = HHMMSub(timePoints[i], pre);
    pre = timePoints[i];
    if (newAns < ans) {
      ans = newAns;
    }
    if (ans === 0) {
      // console.log(ans);
      return ans;
    }
  }
  console.log(ans);
  return ans;
};
// 一个时间差减法
function HHMMSub(time1, time2) {
  const newA = time1.split(":");
  const newB = time2.split(":");
  return (newA[0] - newB[0]) * 60 + (newA[1] - newB[1]);
}
findMinDifference(["12:25", "00:12", "14:25", "23:12", "02:01", "12:59", "12:12", "23:59", "23:59"]);

/**
 * @param {string[]} timePoints
 * @return {number}
 */
 var findMinDifference2 = function (timePoints) {
   // 数组长度
  const len = timePoints.length;
  // 雀巢原理
  // 如果len > 1440 则必然有相同的时间元素（总共有1440个分钟点）
  if (len > 1440) return 0;
  // 暴力解法，排序后求差值，找到最小差值
  timePoints.sort();
  // 第一个元素
  let pre = timePoints[0];
  // 声明最小值 以第一个和最后一个的到减值为初始值
  let ans = 1440 - HHMMSub(timePoints[len - 1], pre);
  // 遍历数组
  for (let i = 1; i < len; i++) {
    const newAns = HHMMSub(timePoints[i], pre);
    pre = timePoints[i];
    if (newAns < ans) {
      ans = newAns;
    }
    if (ans === 0) {
      // console.log(ans);
      return ans;
    }
  }
  console.log(ans);
  return ans;
};