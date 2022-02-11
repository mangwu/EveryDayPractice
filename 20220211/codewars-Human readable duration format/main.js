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
  // 首先需要计算年，
  // Complete this function
  return seconds;
}
