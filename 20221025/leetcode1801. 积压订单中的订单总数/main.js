/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-25 10:56:41                                                  *
 * @LastModifiedDate: 2022-10-25 13:58:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 优先队列

class PQ {
  constructor(compare = (a, b) => a - b) {
    this.data = [];
    this.compare = compare;
  }
  addItem(val) {
    // 添加
    const idx = this.binarySearch(val);
    this.data.splice(idx, 0, val);
  }
  deleteItem(idx) {
    // 删除订单
    this.data.splice(idx, 1);
  }
  binarySearch(val) {
    let left = 0;
    let right = this.data.length;
    while (left < right) {
      let mid = (left + right) >> 1;
      // 找到第一个比val大的值
      if (this.compare(this.data[mid], val) > 0) {
        // mid 比 val大，应该在前面
        right = mid;
      } else {
        // mid 小于等于 val，应该在后面
        left = mid + 1;
      }
    }
    return left;
  }
}
const MOD = Math.pow(10, 9) + 7;
/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function (orders) {
  // 升序
  const pq_buy = new PQ((a, b) => a[0] - b[0]);
  // 降序
  const pq_sell = new PQ((a, b) => b[0] - a[0]);
  for (const order of orders) {
    if (order[2]) {
      // 销售订单
      // 查找积压的采购订单
      // 查找出第一个低于当前销售价格的订单索引
      const newSell = [order[0], order[1]];

      while (pq_buy.data.length) {
        let curBuy = pq_buy.data.pop();
        if (curBuy[0] < newSell[0]) {
          // 积压订单
          pq_buy.data.push(curBuy);
          break;
        } else if (curBuy[1] <= newSell[1]) {
          // 进行差价销售
          newSell[1] -= curBuy[1];
        } else {
          // curBuy[1]可以把newSell消耗完毕
          curBuy[1] -= newSell[1];
          pq_buy.data.push(curBuy);
          newSell[1] = 0;
          break;
        }
      }
      if (newSell[1] > 0) {
        pq_sell.addItem(newSell);
      }
    } else {
      // 采购订单
      // 查找积压的销售订单
      // 查找第一个价格大于当前销售价格的订单索引
      const newBuy = [order[0], order[1]];
      while (pq_sell.data.length) {
        let curSell = pq_sell.data.pop();
        if (curSell[0] > newBuy[0]) {
          // 积压订单
          pq_sell.data.push(curSell);
          break;
        } else if (curSell[1] <= newBuy[1]) {
          // 进行差价销售
          newBuy[1] -= curSell[1];
        } else {
          // curSell[1]可以把newBuy消耗完毕
          curSell[1] -= newBuy[1];
          pq_sell.data.push(curSell);
          newBuy[1] = 0;
          break;
        }
      }
      if (newBuy[1] > 0) {
        pq_buy.addItem(newBuy);
      }
    }
    console.log(pq_buy.data, pq_sell.data);
  }
  let ans = 0;
  for (const sell of pq_sell.data) {
    ans += sell[1];
    ans %= MOD;
  }
  for (const buy of pq_buy.data) {
    ans += buy[1];
    ans %= MOD;
  }
  return ans;
};
