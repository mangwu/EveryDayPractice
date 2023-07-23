/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-22 19:41:46                                                  *
 * @LastModifiedDate: 2023-07-22 22:04:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。

// 每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。

// 注意，一开始你手头没有任何零钱。

// 给你一个整数数组 bills ，其中 bills[i] 是第 i 位顾客付的账。如果你能给每位顾客正确找零，返回 true ，否则返回 false 。

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const hash = new Map();
  for (const bill of bills) {
    if (bill === 5) {
      hash.set(5, (hash.get(5) || 0) + 1);
    } else if (bill === 10) {
      if (hash.has(5)) {
        const cur = hash.get(5);
        cur === 1 ? hash.delete(5) : hash.set(5, cur - 1);
        hash.set(10, (hash.get(10) || 0) + 1);
      } else return false;
    } else {
      if (hash.has(10) && hash.has(5)) {
        let cur = hash.get(5);
        cur === 1 ? hash.delete(5) : hash.set(5, cur - 1);
        cur = hash.get(10);
        cur === 1 ? hash.delete(10) : hash.set(10, cur - 1);
      } else if (hash.has(5)) {
        const cur = hash.get(5);
        if (cur < 3) return false;
        else if (cur === 3) hash.delete(5);
        else hash.set(5, cur - 3);
      } else return false;
    }
  }
  return true;
};
