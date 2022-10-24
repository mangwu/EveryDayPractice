/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-24 13:36:40                                                  *
 * @LastModifiedDate: 2022-10-24 13:41:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有一个餐厅，只有一位厨师。你有一个顾客数组 customers ，其中 customers[i] = [arrivali, timei] ：

// arrivali 是第 i 位顾客到达的时间，到达时间按 非递减 顺序排列。
// timei 是给第 i 位顾客做菜需要的时间。
// 当一位顾客到达时，他将他的订单给厨师，厨师一旦空闲的时候就开始做这位顾客的菜。
// 每位顾客会一直等待到厨师完成他的订单。厨师同时只能做一个人的订单。厨师会严格按照 订单给他的顺序 做菜。

// 请你返回所有顾客需要等待的 平均 时间。与标准答案误差在 10-5 范围以内，都视为正确结果。

//
/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  // 保存每做完一道菜后的时间即可
  let pre = customers[0][0];
  // 等待时间
  let waitTime = 0;
  for (const customer of customers) {
    // 注意这里需要选取做完一道菜和customer[0]之间的大值
    let cur = customer[1] + Math.max(pre, customer[0]);
    waitTime += cur - customer[0];
    pre = cur;
  }
  return waitTime / customers.length;
};
