/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-23 10:32:15                                                  *
 * @LastModifiedDate: 2023-04-23 10:33:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 给你一个正整数 arrivalTime 表示列车正点到站的时间（单位：小时），另给你一个正整数 delayedTime 表示列车延误的小时数。

// 返回列车实际到站的时间。

// 注意，该问题中的时间采用 24 小时制。

/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
  return (arrivalTime + delayedTime) % 24
};