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
  // 暴力解法，遍历maxHeights，以其为山脉顶点计算
  const n = maxHeights.length;
  let ans = maxHeights[0];
  for (let i = 0; i < n; i++) {
    // 以maxHeights[i]作为山脉顶点
    let sum = maxHeights[i];
    let leftPre = maxHeights[i];
    let rightPre = maxHeights[i];
    for (let j = i - 1; j >= 0; j--) {
      leftPre = Math.min(leftPre, maxHeights[j]);
      sum += leftPre;
    }
    for (let j = i + 1; j < n; j++) {
      rightPre = Math.min(rightPre, maxHeights[j]);
      sum += rightPre;
    }
    ans = Math.max(ans, sum);
  }
  return ans;
};
