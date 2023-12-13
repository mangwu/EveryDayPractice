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

