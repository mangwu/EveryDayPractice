/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-13 16:21:05                                                  *
 * @LastModifiedDate: 2022-11-13 16:23:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个四舍五入到两位小数的非负浮点数 celsius 来表示温度，以 摄氏度（Celsius）为单位。

// 你需要将摄氏度转换为 开氏度（Kelvin）和 华氏度（Fahrenheit），并以数组 ans = [kelvin, fahrenheit] 的形式返回结果。

// 返回数组 ans 。与实际答案误差不超过 10-5 的会视为正确答案。

/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  return [celsius + 273.15,celsius * 1.80 + 32.00];
};
