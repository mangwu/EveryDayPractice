/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-10-02 22:52:50                                                  *
 * @LastModifiedDate: 2024-10-02 23:07:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个浮点数 hour ，表示你到达办公室可用的总通勤时间。要到达办公室，你必须按给定次序乘坐 n 趟列车。另给你一个长度为 n 的整数数组 dist ，其中 dist[i] 表示第 i 趟列车的行驶距离（单位是千米）。

// 每趟列车均只能在整点发车，所以你可能需要在两趟列车之间等待一段时间。

// 例如，第 1 趟列车需要 1.5 小时，那你必须再等待 0.5 小时，搭乘在第 2 小时发车的第 2 趟列车。
// 返回能满足你准时到达办公室所要求全部列车的 最小正整数 时速（单位：千米每小时），如果无法准时到达，则返回 -1 。

// 生成的测试用例保证答案不超过 107 ，且 hour 的 小数点后最多存在两位数字 。

/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function (dist, hour) {
  const n = dist.length;
  if (hour <= n - 1) return -1;
  const check = (mid) => {
    let res = 0;
    for (let i = 0; i < n; i++) {
      if (i !== n - 1) {
        res += Math.ceil(dist[i] / mid);
      } else {
        res += dist[i] / mid;
      }
    }
    return res <= hour;
  };
  let left = 1;
  let right = 10 ** 7;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid;
    } else left = mid + 1;
  }
  return right;
};
