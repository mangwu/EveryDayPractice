// 设计一个算法收集某些股票的每日报价，并返回该股票当日价格的 跨度 。

// 当日股票价格的 跨度 被定义为股票价格小于或等于今天价格的最大连续日数（从今天开始往回数，包括今天）。

// 例如，如果未来 7 天股票的价格是 [100,80,60,70,60,75,85]，那么股票跨度将是 [1,1,1,2,1,4,6] 。

// 实现 StockSpanner 类：

// StockSpanner() 初始化类对象。
// int next(int price) 给出今天的股价 price ，返回该股票当日价格的 跨度 。

var StockSpanner = function () {
  this.data = [];
  this.lastIndex = 0;
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  const n = this.data.length;
  this.data.push(price);
  if (n === 0) {
    return 1;
  }
  if (this.data[n - 1] > price) {
    this.lastIndex = n;
    return 1;
  } else {
    // price大于等于this.data[n-1]的情况
    while (this.lastIndex > 0 && this.data[this.lastIndex - 1] <= price) {
      this.lastIndex--;
    }
    return n - this.lastIndex + 1;
  }
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

var StockSpanner = function () {
  this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  // 单调栈
  // 求解price的下一个更大的元素
  let ans = 1;
  while (
    this.stack.length > 0 &&
    price >= this.stack[this.stack.length - 1][0]
  ) {
    ans += this.stack.pop()[1];
  }
  this.stack.push([price, ans]);
  return ans;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
