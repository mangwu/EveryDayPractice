// 有 n 个人前来排队买票，其中第 0 人站在队伍 最前方 ，第 (n - 1) 人站在队伍 最后方 。

// 给你一个下标从 0 开始的整数数组 tickets ，数组长度为 n ，其中第 i 人想要购买的票数为 tickets[i] 。

// 每个人买票都需要用掉 恰好 1 秒 。一个人 一次只能买一张票 ，如果需要购买更多票，他必须走到  队尾 重新排队（瞬间 发生，不计时间）。如果一个人没有剩下需要买的票，那他将会 离开 队伍。

// 返回位于位置 k（下标从 0 开始）的人完成买票需要的时间（以秒为单位）。

class Q {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowest = 0;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowest];
  }
  enqueue(value) {
    if (value == null) return false;
    this.items[this.lowest + this.count++] = value;
    return true;
  }
  dequeue() {
    if (this.isEmpty()) return undefined;
    const res = this.items[this.lowest++];
    this.count--;
    delete this.items[this.lowest - 1];
    return res;
  }
}

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  const q = new Q();
  tickets.forEach((v, i) => q.enqueue([i, v]));
  let ans = 0;
  while (!q.isEmpty()) {
    const cur = q.dequeue();
    ans++;
    if (cur[1] > 1) {
      cur[1]--;
      q.enqueue(cur);
    } else {
      if (cur[0] === k) return ans;
    }
  }
};

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let ans = 0;
  // 利用队列性质进行一次遍历
  // 在k之前的人(包括k)最多买tickets[k]张票，考虑到自身的需求，取Math.min(tickets[i], tickets[k])
  // 在k之后的人，最多买tickets[k]-1张票
  for (let i = 0; i < tickets.length; i++) {
    ans +=
      i <= k
        ? Math.min(tickets[i], tickets[k])
        : Math.min(tickets[i], tickets[k] - 1);
  }
  return ans;
};
