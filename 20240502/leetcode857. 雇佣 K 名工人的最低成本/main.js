// 有 n 名工人。 给定两个数组 quality 和 wage ，其中，quality[i] 表示第 i 名工人的工作质量，其最低期望工资为 wage[i] 。

// 现在我们想雇佣 k 名工人组成一个工资组。在雇佣 一组 k 名工人时，我们必须按照下述规则向他们支付工资：

// 对工资组中的每名工人，应当按其工作质量与同组其他工人的工作质量的比例来支付工资。
// 工资组中的每名工人至少应当得到他们的最低期望工资。
// 给定整数 k ，返回 组成满足上述条件的付费群体所需的最小金额 。在实际答案的 10-5 以内的答案将被接受。。

class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.items = [];
    this.compareFn = compareFn;
  }
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }
  compare(a, b) {
    return this.compareFn(this.items[a], this.items[b]);
  }
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  getLeftIdx(idx) {
    return idx * 2 + 1;
  }
  getRightIdx(idx) {
    return idx * 2 + 2;
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) return;
    return this.items[0];
  }
  insert(value) {
    if (value == null) return false;
    this.items.push(value);
    this.shiftUp();
    return true;
  }
  shiftUp() {
    let idx = this.size() - 1;
    let parentIdx = this.getParentIdx(idx);
    while (parentIdx >= 0 && this.compare(idx, parentIdx) < 0) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  }
  poll() {
    if (this.isEmpty()) return;
    const size = this.size();
    if (size === 1) return this.items.pop();
    this.swap(0, size - 1);
    const res = this.items.pop();
    this.shiftDown();
    return res;
  }
  shiftDown() {
    let idx = 0;
    const size = this.size();
    let temp = idx;
    while (idx < size) {
      const leftIdx = this.getLeftIdx(idx);
      const rightIdx = this.getRightIdx(idx);
      if (leftIdx < size && this.compare(idx, leftIdx) > 0) idx = leftIdx;
      if (rightIdx < size && this.compare(idx, rightIdx) > 0) idx = rightIdx;
      if (temp !== idx) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}
/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function (quality, wage, k) {
  const n = quality.length;
  // 按照每质量薪资和质量数降序排列
  const idxes = new Array(n)
    .fill(0)
    .map((v, i) => i)
    .sort(
      (a, b) =>
        wage[b] * quality[a] - wage[a] * quality[b] || quality[b] - quality[a]
    );
  const pq = new PQ((a, b) => b - a);
  let qSum = 0; // 质量之和
  for (let i = n - 1; i >= n - k; i--) {
    qSum += quality[idxes[i]];
    pq.insert(quality[idxes[i]]);
  }
  // 当前的每质量薪资比
  let q2WRate = wage[idxes[n - k]] / quality[idxes[n - k]];
  let res = qSum * q2WRate;
  console.log("质量之和 ，质量薪资比，总薪资", qSum, q2WRate, res);
  for (let i = n - k - 1; i >= 0; i--) {
    // 更新薪资比
    q2WRate = wage[idxes[i]] / quality[idxes[i]];
    pq.insert(quality[idxes[i]]);
    qSum += quality[idxes[i]];
    qSum -= pq.poll(); // 去除一个最大的质量
    res = Math.min(res, qSum * q2WRate);
    console.log("质量之和 ，质量薪资比，总薪资", qSum, q2WRate, res);
  }
  return res;
};
