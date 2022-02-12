/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-11 17:22:17                                                  *
 * @LastModifiedDate: 2022-02-11 17:30:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 人类可读的时间格式

// 参数以秒为单位的非负整数，返回人类可读时间格式
// 当seconds === 0 时，表示现在，返回 now
// 当seconds === 62 时，返回1 minute and 2 seconds
// 当seconds === 120 时，返回2 minutes
// 当seconds === 3662 时，返回1 hour, 1 minute and 2 seconds

// 规则：
/**
 * 1.使用years days hours minutes 和 seconds 进行表示
 * 2.区分单复数形式
 * 3.每个用逗号隔开（和一个空格），最后一个间隔使用 and
 * 4.不显示0的时钟，如1 year and 2 seconds (中间的hour，minute不显示)
 */
/**
 * @description 人类可读的时间格式
 * @param {Number} seconds 非负整数
 * @returns 人类可读的格式（英文）
 */
function formatDuration(seconds) {
  if (seconds === 0) {
    return 'now';
  }
  // 首先需要计算年，日，小时，分钟
  const second = seconds % 60;
  const minutes = Math.floor(seconds / 60);
  const minute = minutes % 60;
  const hours = Math.floor(minutes / 60);
  const hour = hours % 24;
  const days = Math.floor(hours / 24);
  const day = days % 365;
  const year = Math.floor(days / 365);
  let ans = '';
  // 开始合成
  const arr = [['year', year], ['day', day], ['hour', hour], ['minute', minute], ['second', second]];
  for (const date of arr) {
    if (date[1] > 0) {
      if(date[1] > 1) {
        ans+=date[1] + ' ' + date[0] + 's, ';
      } else {
        ans+=date[1] + ' ' + date[0] + ', ';
      }
    }
  }
  // console.log(ans);
  // 减去最后的两个
  ans = ans.substring(0, ans.length - 2);
  // 找到最后一个逗号
  const idx = ans.lastIndexOf(',');
  if (idx !== -1) {
    ans = ans.substring(0, idx) + ' and' + ans.substring(idx + 1);  
  }
  // console.log(ans);
  // Complete this function
  return ans;
}
formatDuration(0);
formatDuration(62);
formatDuration(130);
formatDuration(3662);
formatDuration(31578008);