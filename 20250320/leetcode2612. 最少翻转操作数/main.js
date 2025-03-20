// 给你一个整数 n 和一个在范围 [0, n - 1] 以内的整数 p ，它们表示一个长度为 n 且下标从 0 开始的数组 arr ，数组中除了下标为 p 处是 1 以外，其他所有数都是 0 。

// 同时给你一个整数数组 banned ，它包含数组中的一些位置。banned 中第 i 个位置表示 arr[banned[i]] = 0 ，题目保证 banned[i] != p 。

// 你可以对 arr 进行 若干次 操作。一次操作中，你选择大小为 k 的一个 子数组 ，并将它 翻转 。在任何一次翻转操作后，你都需要确保 arr 中唯一的 1 不会到达任何 banned 中的位置。换句话说，arr[banned[i]] 始终 保持 0 。

// 请你返回一个数组 ans ，对于 [0, n - 1] 之间的任意下标 i ，ans[i] 是将 1 放到位置 i 处的 最少 翻转操作次数，如果无法放到位置 i 处，此数为 -1 。

// 子数组 指的是一个数组里一段连续 非空 的元素序列。
// 对于所有的 i ，ans[i] 相互之间独立计算。
// 将一个数组中的元素 翻转 指的是将数组中的值变成 相反顺序 。

class DQueue {
  constructor() {
    this.items = {};
    this.lowest = 0;
    this.highest = 1;
  }
  size() {
    return this.highest - this.lowest - 1;
  }
  isEmpty() {
    return this.size() == 0;
  }
  peekFront() {
    return this.items[this.lowest + 1];
  }
  peekBack() {
    return this.items[this.highest - 1];
  }
  enqueueFront(value) {
    this.items[this.lowest--] = value;
  }
  enqueueBack(value) {
    this.items[this.highest++] = value;
  }
  dequeueFront() {
    if (this.isEmpty()) return;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  dequeueBack() {
    if (this.isEmpty()) return;
    const res = this.items[--this.highest];
    delete this.items[this.highest];
    return res;
  }
}

/**
 * @param {number} n
 * @param {number} p
 * @param {number[]} banned
 * @param {number} k
 * @return {number[]}
 */
var minReverseOperations = function (n, p, banned, k) {
  const ans = new Array(n).fill(-1);
  ans[p] = 0;
  if (k === 1) return ans;
  const set = new Set(banned);
  // 单调队列递增，向右进行翻转
  const oddDq = new DQueue(); // 奇数队列
  const evenDq = new DQueue(); // 偶数队列
  if (p % 2 === 1) oddDq.enqueueBack(p);
  else evenDq.enqueueBack(p);
  for (let i = p + 1; i < n; i++) {
    if (!set.has(i)) {
      // 可以是1，找到可以交互的dq
      let dq = null;
      if (i % 2 === 1) {
        // k为奇数，相差应该是偶数
        dq = k % 2 === 1 ? oddDq : evenDq;
      } else {
        dq = k % 2 === 1 ? evenDq : oddDq;
      }
      while (!dq.isEmpty()) {
        let left = dq.peekFront();
        if (i - left >= k) {
          dq.dequeueFront();
          continue;
        }
        const add = (k - 1 - (i - left)) / 2;
        const start = left - add;
        const end = i + add;
        if (start < 0 || end > n) {
          dq.dequeueFront();
        } else break;
      }
      if (!dq.isEmpty()) {
        ans[i] = ans[dq.peekFront()] + 1;
      }
      if (ans[i] !== -1) {
        // 入队操作
        while (ans[dq.peekBack()] > ans[i]) {
          dq.dequeueBack();
        }
        dq.enqueueBack(i);
      }
    }
  }
  return ans;
};

// 上述解答错误，无法确定单调队列中的队顶元素就是最优的交换元素

