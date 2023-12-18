// 给你一个整数数组 nums 和一个整数 k ，找出 nums 中和至少为 k 的 最短非空子数组 ，并返回该子数组的长度。如果不存在这样的 子数组 ，返回 -1 。

// 子数组 是数组中 连续 的一部分。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  // 包括当前元素的最小非空子数组
  const n = nums.length;
  const dp = new Array(n).fill(0).map(() => new Array(3).fill(-1));
  // dp[i] = [len, start, sum]
  // len是最小非空子数组长度，可以为-1，表示没有
  // start是子数组的开始索引，即使没有也是当前sum最大时的开始索引
  // sum时子数组之和
  dp[0][1] = 0;
  dp[0][2] = nums[0];
  let ans = Infinity;
  if (nums[0] >= k) return 1;
  for (let i = 1; i < n; i++) {
    const [preLen, preStart, preSum] = dp[i - 1];
    if (nums[i] >= k) return 1;
    if (nums[i] >= 0) {
      if (preLen !== -1) {
        let curSum = preSum + nums[i];
        let curLen = preLen + 1;
        let curStart = preStart;
        let sum = curSum;
        for (let j = curStart; j < i; j++) {
          sum -= nums[j];
          if (sum >= k) {
            curSum = sum;
            curStart = j + 1;
            curLen = i - j;
          }
        }
        dp[i] = [curLen, curStart, curSum];
      } else {
        let curSum = preSum + nums[i];
        let curStart = preStart;
        if (curSum >= k) {
          let curLen = i - curStart + 1;
          let sum = curSum;
          for (let j = curStart; j < i; j++) {
            sum -= nums[j];
            if (sum >= k) {
              curSum = sum;
              curStart = j + 1;
              curLen = i - j;
            }
          }
          dp[i] = [curLen, curStart, curSum];
        } else {
          // 仍然没有结果
          dp[i] =
            curSum > nums[i] ? [preLen, curStart, curSum] : [-1, i, nums[i]];
        }
      }
    } else {
      // nums[i]为负数
      if (preLen !== -1) {
        // 向前遍历获取最大值
        let curSum = preSum + nums[i];
        let curLen = preLen + 1;
        let curStart = preStart;
        let sum = curSum;
        for (let j = curStart - 1; j >= 0; j--) {
          sum += nums[j];
          if (sum >= k) {
            curSum = sum;
            curStart = j;
            curLen = i - j + 1;
            break;
          } else {
            // 最大值确定
            if (sum > curSum) {
              curSum = sum;
              curStart = j;
              curLen = i - j + 1;
            }
          }
        }
        if (curSum >= k) {
          dp[i] = [curLen, curStart, curSum];
        } else {
          dp[i] = [-1, curStart, curSum];
        }
      } else {
        // 没有子数组
        let curSum = preSum + nums[i];
        if (nums[i] >= curSum) {
          dp[i] = [-1, i, nums[i]];
        } else {
          dp[i] = [-1, preStart, curSum];
        }
      }
    }
    if (dp[i][0] !== -1) ans = Math.min(ans, dp[i][0]);
  }
  return ans === Infinity ? -1 : ans;
};

//    7  4 8  3   4  0  -2  2   5
//   [3,-4,5, -1, 4, 2, -4, -3, 5];

// [2,-1,2,1,5,2,-4,5,-4,-3,2,1,-4,-5,-1,-2,3,2,4,-4,2,5,-4,-1,2,3,5,-7,8,-4,-3,6,4,5,-8,-4,2,1,-3,5,1]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  // 二分查找，滑动窗口判断当前最小数组长度是否满足条件
  const n = nums.length;
  const checked = (target) => {
    let sum = 0;
    for (let i = 0; i < target; i++) {
      sum += nums[i];
      if (sum >= k) return true;
    }
    for (let i = target; i < n; i++) {
      sum += nums[i];
      sum -= nums[i - target];
      if (sum >= k) return true;
    }
    return false;
  };
  let left = 1;
  let right = nums.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (checked(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left === nums.length + 1 ? -1 : left;
};
// 二分查找错误：数组长度对子数组的和不是单调变化的，因为元素中有负数

class Dqueue {
  constructor() {
    this.items = {};
    this.lowest = 0;
    this.hightest = 1;
  }
  size() {
    return this.hightest - this.lowest - 1;
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
    return this.items[this.hightest - 1];
  }
  enqueueFront(value) {
    this.items[this.lowest--] = value;
  }
  enqueueBack(value) {
    this.items[this.hightest++] = value;
  }
  dequeueFront() {
    if (this.isEmpty()) return undefined;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  dequeueBack() {
    if (this.isEmpty()) return undefined;
    const res = this.items[--this.hightest];
    delete this.items[this.hightest];
    return res;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  // 前缀和 => prefix[j] - prefix[i] 就是区间[i,j]的和
  //   求出以每个i为起点的最短符合要求子数组，求得prefix[j] - prefix[i] >= k
  //   的最小j即可，一般而言，从i开始向右顺序遍历是朴素思想，但是这样会超时。
  //   为此，能否对j只向右遍历一遍，不断更新前面任意i的最短子数组，然后比较
  // 单调双端队列 => 决定使用这种数据结构保存前面的任意i的原因：
  //   1. 队列单调递增，对于为了保存单调而被出队的元素而言，
  //    在它们后面一定有一个更小的元素使得未遍历的j更可能满足条件且子数组更短
  //   2. 在比较匹配最短子数组时，能轻松从队列前端获取可能满足条件的最小元素，且
  //    不会出现这个最小元素不符合当前j的最短子数组的情况，因为j是顺序向右遍历的，
  //    而且已被匹配的i的子数组一定更短
  const dqueue = new Dqueue();
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) prefix[i] = nums[i - 1] + prefix[i - 1];
  let res = Infinity;
  for (let i = 0; i <= n; i++) {
    // 单调队列头部比较
    let curSum = prefix[i];
    while (!dqueue.isEmpty() && curSum - prefix[dqueue.peekFront()] >= k) {
      res = Math.min(res, i - dqueue.dequeueFront());
    }
    // 将大于等于当前和的抛弃
    while (!dqueue.isEmpty() && curSum <= prefix[dqueue.peekBack()]) {
      dqueue.dequeueBack();
    }
    dqueue.enqueueBack(i);
  }
  return res === Infinity ? -1 : res;
};
