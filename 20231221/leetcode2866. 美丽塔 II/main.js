// 给你一个长度为 n 下标从 0 开始的整数数组 maxHeights 。

// 你的任务是在坐标轴上建 n 座塔。第 i 座塔的下标为 i ，高度为 heights[i] 。

// 如果以下条件满足，我们称这些塔是 美丽 的：

// 1 <= heights[i] <= maxHeights[i]
// heights 是一个 山脉 数组。
// 如果存在下标 i 满足以下条件，那么我们称数组 heights 是一个 山脉 数组：

// 对于所有 0 < j <= i ，都有 heights[j - 1] <= heights[j]
// 对于所有 i <= k < n - 1 ，都有 heights[k + 1] <= heights[k]
// 请你返回满足 美丽塔 要求的方案中，高度和的最大值 。

/**
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function (maxHeights) {
  // 先找到最小值，经过最小值左边或者右边的数一定是相同的最小值
  // 同时，最小值可能有多个
  const n = maxHeights.length;
  // 最小值排序+索引记录
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    hash.has(maxHeights[i])
      ? hash.get(maxHeights[i]).push(i)
      : hash.set(maxHeights[i], [i]);
  }
  let copy = maxHeights.slice().sort((a, b) => a - b);
  copy = [...new Set(copy)];
  const dfs = (start, end, idx) => {
    if (start > end) return 0;
    if (idx >= copy.length) return 0;
    if (start === end) return maxHeights[start];
    const arr = hash.get(copy[idx]);
    // 遍历arr，选择下一个区间
    const m = arr.length;
    let res = 0;
    for (let i = 0; i <= m; i++) {
      let cur = arr[i];
      if (i === 0) {
        if (cur < start) continue;
        // 第一个区间
        if (cur >= start && cur <= end) {
          res = Math.max(
            res,
            dfs(start, cur - 1, idx + 1) + copy[idx] * (end - cur + 1)
          );
        } else if (cur > end) {
          // 后面的都会超过end，可以直接退出
          res = Math.max(res, dfs(start, end, idx + 1));
          break;
        }
      } else if (i === m) {
        // 最后一个区间
        let pre = arr[i - 1];
        if (pre < start) res = Math.max(res, dfs(start, end, idx + 1));
        else {
          // pre一定不大于end，否则不会遍历到这里
          res = Math.max(
            res,
            dfs(pre + 1, end, idx + 1) + copy[idx] * (pre - start + 1)
          );
        }
      } else {
        if (cur < start) continue; //
        // pre一定不大于end，否则不会遍历到这里
        // 中间区间 [pre, cur]
        let pre = Math.max(arr[i - 1] + 1, start);
        if (cur >= start && cur <= end) {
          res = Math.max(
            res,
            dfs(pre, cur - 1, idx + 1) +
              copy[idx] * (end - cur + 1 + pre - start)
          );
        } else if (cur > end) {
          res = Math.max(
            res,
            dfs(pre, end, idx + 1) + copy[idx] * (pre - start)
          );
          break; // 后面的都会找过，直接退出
        }
      }
    }
    return res;
  };
  return dfs(0, n - 1, 0);
};

const random = require("../../publicFunc/random/random");
const current = new Date().getTime();
console.log(maximumSumOfHeights(random.randomArr(5000, 1)));
console.log(new Date().getTime() - current + "ms");
