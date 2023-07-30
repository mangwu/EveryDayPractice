/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-30 10:30:25                                                  *
 * @LastModifiedDate: 2023-07-30 10:32:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 公司里共有 n 名员工，按从 0 到 n - 1 编号。每个员工 i 已经在公司工作了 hours[i] 小时。

// 公司要求每位员工工作 至少 target 小时。

// 给你一个下标从 0 开始、长度为 n 的非负整数数组 hours 和一个非负整数 target 。

// 请你用整数表示并返回工作至少 target 小时的员工数。

/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  return hours.reduce((pre, cur) => {
    if (cur >= target) pre++;
    return pre
  }, 0);
};
