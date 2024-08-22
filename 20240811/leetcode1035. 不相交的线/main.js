// 在两条独立的水平线上按给定的顺序写下 nums1 和 nums2 中的整数。

// 现在，可以绘制一些连接两个数字 nums1[i] 和 nums2[j] 的直线，这些直线需要同时满足：

//  nums1[i] == nums2[j]
// 且绘制的直线不与任何其他连线（非水平线）相交。
// 请注意，连线即使在端点也不能相交：每个数字只能属于一条连线。

// 以这种方法绘制线条，并返回可以绘制的最大连线数。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const dp = new Array(m).fill(0).map((v) => new Array(n).fill(0));
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = Math.max(i > 0 ? dp[i - 1][j] : 0, j > 0 ? dp[i][j - 1] : 0);
      if (nums1[i] === nums2[j]) {
        dp[i][j] = Math.max(
          dp[i][j],
          i > 0 && j > 0 ? dp[i - 1][j - 1] + 1 : 1
        );
      }
      res = Math.max(res, dp[i][j]);
    }
  }
  return res;
};
