/**
 * @description leetcode1154
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-21 18:54:07
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

//  给你一个字符串 date ，按 YYYY-MM-DD 格式表示一个 现行公元纪年法 日期。请你计算并返回该日期是当年的第几天。

//  通常情况下，我们认为 1 月 1 日是每年的第 1 天，1 月 2 日是每年的第 2 天，依此类推。每个月的天数与现行公元纪年法（格里高利历）一致。

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  // 唯一需要注意的就是闰年，2月为29天
  // 闰年规则是：四年一闰；百年不闰，四百年再闰

  // 声明ans
  let ans = 0;
  // 声明普通的月份天数数组
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // 获得date的年月日
  const breakDate = date.split("-");
  // 判断是否为闰年
  if (
    (breakDate[0] % 4 === 0 && breakDate[0] % 100 !== 0) ||
    breakDate[0] % 400 === 0
  ) {
    monthDays[1] = 29;
  }
  // 求和
  for (let i = 0; i < breakDate[1] - 1; i++) {
    ans += monthDays[i];
  }
  return ans + Number(breakDate[2]);
};

console.log(dayOfYear("1900-03-01"));
