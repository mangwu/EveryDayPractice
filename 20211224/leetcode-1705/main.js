/**
 * @description leetcode1705吃苹果的最大数目
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-24 18:49:33
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

//  有一棵特殊的苹果树，一连 n 天，每天都可以长出若干个苹果。在第 i 天，树上会长出 apples[i] 个苹果，这些苹果将会在 days[i] 天后（也就是说，第 i + days[i] 天时）腐烂，变得无法食用。也可能有那么几天，树上不会长出新的苹果，此时用 apples[i] == 0 且 days[i] == 0 表示。

//  你打算每天 最多 吃一个苹果来保证营养均衡。注意，你可以在这 n 天之后继续吃苹果。

//  给你两个长度为 n 的整数数组 days 和 apples ，返回你可以吃掉的苹果的最大数目。

/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function (apples, days) {
  // 1. apples数组和days数组的长度是相等的，其索引表示天数
  // 2. apples数组表示苹果树每天产生的苹果，days表示该天产生的苹果在多少天后腐烂（不能吃）
  // 3. 如今天生产了2个苹果，今天吃一个，如果days中的天数为1，那么第二天就吃不到昨天的苹果了
  // 4. 为了吃到最多的苹果，保证每次吃的都是快腐烂的苹果即可（贪心算法）
  // 5. 使用小扎堆保存苹果和对应腐烂天数的数组对，每次吃一个就到第二天，给每天的苹果保质期减一，去除过期苹果后再选择快过期苹果

  // 声明吃的苹果数量
  let ans = 0;
  // 声明至少要吃的次数
  let n = days.length;
  // 声明保存苹果保质期的小扎堆数组
  let shelfDate = new PriorityQueue();
  // 声明天数
  let i = 0;
  // 循环吃苹果,至少循环n天
  // while (shelfDate.size > 0 || i < n) {
  //   // 获得苹果
  //   if (i < n && apples[i] !== 0) {
  //     shelfDate.push([apples[i], days[i]]);
  //     // 排序,按照保质期天数排序
  //     shelfDate.sort((a, b) => a[1] - b[1]);
  //   }
  //   // 吃掉一个苹果,如果没有苹果可吃就进入下一天
  //   if (shelfDate.length > 0) {
  //     shelfDate[0][0] -= 1;
  //     ans++;
  //     i++;
  //     // 判断苹果是否吃完
  //     if (shelfDate[0][0] === 0) {
  //       // 清除吃完的苹果
  //       shelfDate.shift();
  //     }
  //   } else {
  //     // 否则直接返回
  //     i++;
  //     continue;
  //   }
  //   // 如果有苹果，就全部减去一天的保证期并过滤保质期为0的苹果
  //   shelfDate = shelfDate
  //     .map((item) => {
  //       return [item[0], item[1] - 1];
  //     })
  //     .filter((item) => {
  //       return item[1] > 0;
  //     });
  // }
  while (i < n || shelfDate.size > 0) {
    while (shelfDate.size > 0 && shelfDate.peek()[0] <= i) shelfDate.poll();
    if (i < n && apples[i] > 0) shelfDate.offer([i + days[i], apples[i]]);
    if (shelfDate.size > 0) {
      ans++;
      if (--shelfDate.peek()[1] == 0) shelfDate.poll();
    }
    i++;
  }
  return ans;
};
// 声明一个优先队列
class PriorityQueue {
  constructor(compare = (a, b) => a[0] < b[0]) {
    this.data = [];
    this.size = 0;
    this.compare = compare;
  }

  peek() {
    return this.size === 0 ? null : this.data[0];
  }

  offer(val) {
    this.data.push(val);
    this._shifUp(this.size++);
  }

  poll() {
    if (this.size === 0) {
      return null;
    }
    this._swap(0, --this.size);
    this._shifDown(0);
    return this.data.pop();
  }

  _parent(index) {
    return (index - 1) >> 1;
  }

  _child(index) {
    return (index << 1) + 1;
  }

  _shifDown(index) {
    while (this._child(index) < this.size) {
      let child = this._child(index);
      if (
        child + 1 < this.size &&
        this.compare(this.data[child + 1], this.data[child])
      ) {
        child = child + 1;
      }
      if (this.compare(this.data[index], this.data[child])) {
        break;
      }
      this._swap(index, child);
      index = child;
    }
  }

  _shifUp(index) {
    while (
      this._parent(index) >= 0 &&
      this.compare(this.data[index], this.data[this._parent(index)])
    ) {
      this._swap(index, this._parent(index));
      index = this._parent(index);
    }
  }

  _swap(a, b) {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
  }
}
console.log(eatenApples([1, 2, 3, 5, 2], [3, 2, 1, 4, 2]));
