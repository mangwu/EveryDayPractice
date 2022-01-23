// 给你一支股票价格的数据流。数据流中每一条记录包含一个 时间戳 和该时间点股票对应的 价格 。

// 不巧的是，由于股票市场内在的波动性，股票价格记录可能不是按时间顺序到来的。某些情况下，有的记录可能是错的。如果两个有相同时间戳的记录出现在数据流中，前一条记录视为错误记录，后出现的记录 更正 前一条错误的记录。

// 请你设计一个算法，实现：

// 更新 股票在某一时间戳的股票价格，如果有之前同一时间戳的价格，这一操作将 更正 之前的错误价格。
// 找到当前记录里 最新股票价格 。最新股票价格 定义为时间戳最晚的股票价格。
// 找到当前记录里股票的 最高价格 。
// 找到当前记录里股票的 最低价格 。
// 请你实现 StockPrice 类：

// StockPrice() 初始化对象，当前无股票价格记录。
// void update(int timestamp, int price) 在时间点 timestamp 更新股票价格为 price 。
// int current() 返回股票 最新价格 。
// int maximum() 返回股票 最高价格 。
// int minimum() 返回股票 最低价格 。


var StockPrice = function() {
	this.hash = new Map();
	this.currentTime = Number.MIN_VALUE;
	this.currentPrice = null;
	this.pq = new P
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
	if (timestamp >= this.currentTime) {
		// 更新目前价格
		this.currentPrice = price;
		this.currentTime = timestamp;
	}
	// 如果是新的序列
	if (!this.hash.has(timestamp)) {
		// 新的序列，直接添加
		this.hash.set(timestamp, price);
		// 如果data中已经存在以price为属性的
		if (this.data[price] !== undefined) {
			this.data[price].push(timestamp);
		} else {
			this.data[price] = [timestamp];
		}
	} else {
		// 不是新序列
		// 获取之前的序列
		const oldPrice = this.hash.get(timestamp);
		// 更新hash
		this.hash.set(timestamp, price);
		// 查看之前价格,删除其中相同的timestamp
		const newTime = this.data[oldPrice].filter((v) => v !== timestamp);
		// 不存在时间点
		if (newTime.length === 0) {
			// 删除老的，设置新的
			delete this.data[oldPrice];
			// 如果这个price已经存在就会有问题
			// 如果data中已经存在price为属性的
			if (this.data[price] !== undefined) {
				this.data[price].push(timestamp);
			} else {
				this.data[price] = [timestamp];
			}
		} else {
			this.data[price] = newTime;
		}
	}
	console.log(this.data);
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
	return this.currentPrice;
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
	const arr = Object.keys(this.data);
	return Number(arr[arr.length - 1]);
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
	return Number(Object.keys(this.data)[0]);
};

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */


 var StockPrice = function() {
	this.maxData = new PriorityQueue((a, b) => a[0] - a[1] < 0);
	this.minData = new PriorityQueue((a, b) => a[0] - a[1] < 0);
	this.hash = new Map();
	this.currentTime = Number.MIN_VALUE;
	this.currentPrice = null;
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
	if (timestamp >= this.currentTime) {
		// 更新目前价格
		this.currentPrice = price;
		this.currentTime = timestamp;
	}
	this.hash.set(timestamp, price);
	this.maxData.offer([price, timestamp]);
	this.minData.offer([price, timestamp]);
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
	return this.currentPrice;
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
	while (true) {
		// statement
		// 获取最大
		const max = this.maxData.tail();
		if (this.hash.get(max[1]) !== max[0]) {
			// 不相等
			// 出队
			this.maxData.peek();
		} else {
			return max[1];
		}
	}
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
	while (true) {
		// statement
		// 获取最大
		const min = this.minData.head();
		if (this.hash.get(min[1]) !== min[0]) {
			// 不相等出队
			// 出队
			this.data.poll();
		} else {
			return min[1];
		}
	}
};


class PriorityQueue {
  constructor(compare = (a, b) => a - b < 0) {
    this.data = [];
    this.size = 0;
    this.compare = compare;
  }
  // 队首元素
  head() {
    return this.size > 0 ? this.data[0] : null;
  }
  // 队尾元素
  tail() {
    return this.size > 0 ? this.data[this.size - 1] : null;
  }
  // 出队
  poll() {
    if (this.size > 0) {
      this.size--;
      return this.data.shift();
    }
    return null;
  }
  // 队尾出队
  peek() {
  	if (this.size > 0) {
      this.size--;
      return this.data.pop();
    }
    return null;
  }
  // 入队
  offer(val) {
    this.binaryInsert(this.size++, val);
  }
  binaryInsert(idx, val) {
    // 声明搜索区域 [0, idx)
    let left = 0;
    let right = idx;
    while (left < right) {
      // 中间索引
      const mid = Math.floor((left + right) / 2);
      // 比较
      if (this.compare(this.data[mid], val)) {
        // val比mid大，选取右边区域 [mid + 1, right)
        left = mid + 1;
      } else {
        // 左边区域 [left, right)
        right = mid;
      }
    }
    // 插入
    this.data.splice(left, 0, val);
  }
}