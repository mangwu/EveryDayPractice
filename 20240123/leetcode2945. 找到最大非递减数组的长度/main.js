// 给你一个下标从 0 开始的整数数组 nums 。

// 你可以执行任意次操作。每次操作中，你需要选择一个 子数组 ，并将这个子数组用它所包含元素的 和 替换。比方说，给定数组是 [1,3,5,6] ，你可以选择子数组 [3,5] ，用子数组的和 8 替换掉子数组，然后数组会变为 [1,8,6] 。

// 请你返回执行任意次操作以后，可以得到的 最长非递减 数组的长度。

// 子数组 指的是一个数组中一段连续 非空 的元素序列。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumLength = function (nums) {
  // 二分查找
  const n = nums.length;
  let left = 1;
  let right = n;
  const check = (num) => {
    // 顺序遍历nums，如果遇到nums[i+1] < nums[i]的情况，就要进行合并操作了
    // 合并方式有两种
    //  1. 向前合并m个，保证nums[i+2]大于等于nums[i+1] + nums[i] + ... nums[i+2-m]
    //  2. 先后合并m个，保证nums[i+1] + nums[i+2] ... + nums[i+m] 大于等于nums[i]
    for (let i = 0; i < n; i++) {}
  };
  while (left <= right) {}
};

// 4 2 7 8
// 1 4 2 5 8 9 8 4 2 4 5
// 65
// 1 4 7 8 9 12

// 1 4 7 8 9 12 13

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumLength = function (nums) {
  const n = nums.length;
  const arr = [nums[0]];
  let prefix = [0];
  const check = (mid, add, last) => {
    return last + prefix[mid] <= add + prefix[prefix.length - 1] - prefix[mid];
  };
  const binarySearch = (add, last) => {
    // 二分查找分配，保证找到最大的mid，使得last + prefix[mid] <= nums[i] + sum - prefix[mid]
    let left = 0;
    let right = prefix.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (check(mid, add, last)) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return right;
  };
  for (let i = 1; i < n; i++) {
    const last = arr[arr.length - 1];
    let sum = prefix[prefix.length - 1];
    if (nums[i] >= last) {
      if (sum !== 0) {
        // 二分查找分配，保证找到最大的mid，使得last + prefix[mid] <= nums[i] + sum - prefix[mid]
        const resIdx = binarySearch(nums[i], last);
        // right就是合法的中间索引保证当前插入的值最小
        arr[arr.length - 1] = last + prefix[resIdx];
        arr.push(nums[i] + sum - prefix[resIdx]);
        prefix = [0];
      } else arr.push(nums[i]);
    } else {
      sum += nums[i];
      prefix.push(sum);
      if (sum >= last) {
        // 二分查找分配
        const resIdx = binarySearch(0, last);
        arr[arr.length - 1] = last + prefix[resIdx];
        arr.push(sum - prefix[resIdx]);
        prefix = [0];
      }
    }
  }
  // 如果遍历完成后，prefix长度大于1，
  // 说明数组最后的几个小数之和小于数组最后一个数，
  // 只能加入大最后一个数中，数组长度不会变化所以无需关心
  return arr.length;
};

// 5 2 2 7

// [5,2,2,8,5,4,1,2,3,6,9]
// [ 7, 10, 12, 9, 9 ]

// [418,421,309,442,80,305,166,884,791,353]
// 418 730 827 1050 1144

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumLength = function (nums) {
  const n = nums.length;
  // 动态规划
  const dp = new Array(n).fill(-1).map((v) => new Array(2).fill(-1));
  // dp[i][0] 以当前i为底的数组的最长非递减数组长度
  // dp[i][1] 数组长度
  dp[0][0] = 1;
  dp[0][1] = nums[0];
  // 前缀和
  const prefix = [0];
  for (let i = 0; i < n; i++) {
    prefix.push(prefix[prefix.length - 1] + nums[i]);
  }
  for (let i = 1; i < n; i++) {
    let resLen = 0;
    let last = 0;
    for (let j = i - 1; j >= 0; j--) {
      let curLen = dp[j][0];
      let curLast = dp[j][1];
      if (prefix[i + 1] - prefix[j + 1] >= curLast) {
        curLen++;
        curLast = prefix[i + 1] - prefix[j + 1];
      } else {
        curLast += prefix[i + 1] - prefix[j + 1];
      }
      if (curLen > resLen) {
        resLen = curLen;
        last = curLast;
      } else if (curLen === resLen && last > curLast) {
        last = curLast;
      }
    }
    dp[i][0] = resLen;
    dp[i][1] = last;
  }
  console.log(dp);
  return dp[n - 1][0];
};
findMaximumLength([418, 421, 309, 442, 80, 305, 166, 884, 791, 353]);

[
  [1, 418],
  [2, 421],
  [2, 730],
  [3, 751],
  [3, 831],
  [3, 827],
  [3, 993],
  [4, 1050],
  [4, 1675],
  [5, 1144],
];
// 上面的解法中需要嵌套遍历，时间复杂度为O(n^2)超时
// 在内部遍历dp寻找最小值时，可以使用单调队列

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
  // 动态规划
  const dp = new Array(n).fill(-1).map((v) => new Array(2).fill(-1));
  dp[0][0] = 1;
  dp[0][1] = nums[0];
  // dp[i][0]表示递增结果数组的长度
  // dp[i][1]表示递增结果数组最后一个元素的值
  // 通过前缀和可以快速求得nums最后几个数之和
  const prefix = [0];
  for (let i = 0; i < n; i++) {
    prefix.push(prefix[prefix.length - 1] + nums[i]);
  }
  const dq = new Dqueue();
  dq.enqueueBack(0);
  for (let i = 1; i < n; i++) {
    while (
      dq.size() > 1 &&
      prefix[i + 1] - prefix[dq.peekFront() + 1] < dp[dq.peekFront()][1]
    ) {
      dq.dequeueFront();
    }
    // 通过单调队列获取到的最适合dp[i]的上一个元素索引
    const curIdx = dq.peekFront();
    let curLen = dp[curIdx][0];
    let curLast = dp[curIdx][1];
    if (prefix[i + 1] - prefix[curIdx + 1] >= curLast) {
      curLen++;
      curLast = prefix[i + 1] - prefix[curIdx + 1];
    } else {
      curLast += prefix[i + 1] - prefix[curIdx + 1];
    }
    dp[i][0] = curLen;
    dp[i][1] = curLast;
    while (
      !dq.isEmpty() &&
      prefix[dq.peekBack() + 1] + dp[dq.peekBack()][1] >=
        prefix[i + 1] + curLast
    ) {
      dq.dequeueBack();
    }
    dq.enqueueBack(i);
  }
  return dp[n - 1][0];
};
