// 给你一个下标从 0 开始的整数数组 nums 。

// 你可以执行任意次操作。每次操作中，你需要选择一个 子数组 ，并将这个子数组用它所包含元素的 和 替换。比方说，给定数组是 [1,3,5,6] ，你可以选择子数组 [3,5] ，用子数组的和 8 替换掉子数组，然后数组会变为 [1,8,6] 。

// 请你返回执行任意次操作以后，可以得到的 最长非递减 数组的长度。

// 子数组 指的是一个数组中一段连续 非空 的元素序列。

class Dqueue {
  constructor() {
    this.items = {};
    this.lowest = 0;
    this.highest = 1;
  }
  size() {
    return this.highest - this.lowest - 1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowest + 1];
  }
  peekBack() {
    if (this.isEmpty()) return undefined;
    return this.items[this.highest - 1];
  }
  dequeueFront() {
    if (this.isEmpty()) return undefined;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  dequeueBack() {
    if (this.isEmpty()) return undefined;
    const res = this.items[--this.highest];
    delete this.items[this.highest];
    return res;
  }
  enqueueFront(value) {
    this.items[this.lowest--] = value;
  }
  enqueueBack(value) {
    this.items[this.highest++] = value;
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumLength = function (nums) {
  const n = nums.length;
  // 1. f[i] 表示操作nums[0]到nums[i]得到的最长非递减数组的长度
  const f = new Array(n).fill(0);
  // 2. last[i]表示在保证f[i]最长的情况下，nums[0]到nums[i]操作后的最后一个数的最小值
  const last = new Array(n).fill(0);
  // 3. 最小值有利于进行动态转移，在计算f[j]时，转移上一个时是否能加1取决于如下条件
  //    nums[j] + nums[j-1] + ... + nums[i+1] >= last[i]，那么
  //    f[j] = max(f[i] + 1/0) 如果符合条件就加1，否则就加0
  // 4. f数组一定是非递减的，因为f[i]一定可以通过操作至少和f[i-1]相等
  // 5. last数组没有规律性，last[i]取决于通过比较决定的f[j]对应的last[j]
  // 6. 为了快速计算nums[j] + nums[j-1] + ... + nums[i+1]，
  //    可以提前计算出nums的前缀和preffix
  const preffix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) preffix[i + 1] = preffix[i] + nums[i];
  // 7. 那么转移加1条件就变成了 preffix[j+1] - preffix[i+1] >= last[i]
  //    变形得到 preffix[j+1] >= preffix[i+1] + last[i]
  //    在满足 preffix[j+1] >= preffix[i+1] + last[i] 的情况下，i 越大，
  //    last[j] 就越小（因为这种情况下last[j] = preffix[j+1] - preffix[i+1]）
  //    现在要考虑的是要快速获取到f[j]最大时对应的最大下标i
  // 8. 考虑现在有两个转移来源，分别是k和p，k < p，它们是作为当前f[j]的可选转移源
  //    如果preffix[k] + last[k] >= preffix[p] + last[p]，且能从f[k]转移（加1）到f[j]
  //    那么一定也能从f[p]转移（加1）到f[j]（因为preffix[j+1]是已知大小的）
  //    又因为f[p] >= f[k]，所以一定选择f[p]（这种情况对应的last[j]也更小）而不是f[k]
  //    所以可以使用单调队列来维护k，满足从队首（出口）到队尾的k和
  //    preffix[k+1] + last[k]是严格递增的
  const dqIncrement = new Dqueue();
  // 初始化数据
  f[0] = 1;
  last[0] = nums[0];
  dqIncrement.enqueueBack(0);
  for (let i = 1; i < n; i++) {
    // 转移之前去除队首无用数据移出不满足preffix[i+1] >= preffix[j+1] + last[j]
    // 的数据，且只留下最后一个满足加1转移条件的元素（但是至少要留下一个）
    while (
      dqIncrement.size() > 1 &&
      preffix[i + 1] >=
        preffix[dqIncrement.items[dqIncrement.lowest + 2] + 1] +
          last[dqIncrement.items[dqIncrement.lowest + 2]]
    ) {
      dqIncrement.dequeueFront();
    }
    // 从单调队列中找到队首，查看是否满足条件
    const header = dqIncrement.peekFront();
    if (preffix[i + 1] >= preffix[header + 1] + last[header]) {
      f[i] = f[header] + 1;
      last[i] = preffix[i + 1] - preffix[header + 1];
    } else {
      // 不满足条件
      f[i] = f[i - 1];
      last[i] = nums[i] + last[i - 1];
    }
    // 弹出preffix[j+1] + last[j] >= preffix[i+1] + last[i]的
    while (
      !dqIncrement.isEmpty() &&
      preffix[dqIncrement.peekBack() + 1] + last[dqIncrement.peekBack()] >=
        preffix[i + 1] + last[i]
    ) {
      dqIncrement.dequeueBack();
    }
    dqIncrement.enqueueBack(i);
  }
  console.log(f);
  console.log(last);
  return f[n - 1];
};

// [6,5,1,9]

// i nums[i] f[i] last[i]
// 0 6       1    6
// 1 5       1    11
// 2 1       2    6
// 3 9       3    9

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumLength = function (nums) {
  const n = nums.length;
  // 1. f[i] 表示操作前i个数组元素得到的最长非递减数组的长度
  // 预留第一个元素，作为初始状态给f[1]进行转移，也方便计算前缀和之差以及条件计算
  const f = new Array(n + 1).fill(0);
  // 2. last[i]表示在保证f[i]最长的情况下，操作前i个数组元素后的最后一个数的最小值
  const last = new Array(n + 1).fill(0);
  const preffix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) preffix[i + 1] = preffix[i] + nums[i];
  const dqIncrement = new Dqueue();
  // 初始化数据
  f[0] = 0;
  last[0] = 0; // 前0个元素的最后一个的最小值可以设置成0（因为所有元素大于0）
  dqIncrement.enqueueBack(0); // 这里保存的不是数组元素的下表，而是数元素个数
  for (let i = 1; i <= n; i++) {
    // 转移之前去除队首无用数据移出不满足preffix[i+1] >= preffix[j+1] + last[j]
    // 的数据，且只留下最后一个满足加1转移条件的元素（但是至少要留下一个）
    while (
      dqIncrement.size() > 1 &&
      preffix[i] >=
        preffix[dqIncrement.items[dqIncrement.lowest + 2]] +
          last[dqIncrement.items[dqIncrement.lowest + 2]]
    ) {
      dqIncrement.dequeueFront();
    }
    // 从单调队列中找到队首，查看是否满足条件
    const header = dqIncrement.peekFront();
    f[i] = f[header] + 1;
    last[i] = preffix[i] - preffix[header];
    // 弹出preffix[j+1] + last[j] >= preffix[i+1] + last[i]的
    while (
      !dqIncrement.isEmpty() &&
      preffix[dqIncrement.peekBack()] + last[dqIncrement.peekBack()] >=
        preffix[i] + last[i]
    ) {
      dqIncrement.dequeueBack();
    }
    dqIncrement.enqueueBack(i);
  }
  console.log(f);
  console.log(last);
  return f[n];
};
