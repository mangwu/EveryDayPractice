/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-05-03 23:27:57                                                  *
 * @LastModifiedDate: 2024-05-03 23:31:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 salary ，数组里每个数都是 唯一 的，其中 salary[i] 是第 i 个员工的工资。

// 请你返回去掉最低工资和最高工资以后，剩下员工工资的平均值。

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  return (
    (salary.reduce((a, b) => a + b) -
      Math.max.apply(null, salary) -
      Math.min.apply(null, salary)) /
    (salary.length - 2)
  );
};
