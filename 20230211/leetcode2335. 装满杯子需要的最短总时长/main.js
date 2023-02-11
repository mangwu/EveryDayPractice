/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-11 17:12:38                                                  *
 * @LastModifiedDate: 2023-02-11 17:56:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 现有一台饮水机，可以制备冷水、温水和热水。每秒钟，可以装满 2 杯 不同 类型的水或者 1 杯任意类型的水。

// 给你一个下标从 0 开始、长度为 3 的整数数组 amount ，其中 amount[0]、amount[1] 和 amount[2] 分别表示需要装满冷水、温水和热水的杯子数量。返回装满所有杯子所需的 最少 秒数。

/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
  // 取两个小值相加
  amount.sort((a, b) => a - b);
  let sum = amount[0] + amount[1];
  if (sum <= amount[2]) {
    return amount[2];
  } else if (sum > amount[2]) {
    return Math.ceil((sum + amount[2]) / 2);
  }
};
