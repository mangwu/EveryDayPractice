// 给你一个二维数组 points 和一个字符串 s ，其中 points[i] 表示第 i 个点的坐标，s[i] 表示第 i 个点的 标签 。

// 如果一个正方形的中心在 (0, 0) ，所有边都平行于坐标轴，且正方形内 不 存在标签相同的两个点，那么我们称这个正方形是 合法 的。

// 请你返回 合法 正方形中可以包含的 最多 点数。

// 注意：

// 如果一个点位于正方形的边上或者在边以内，则认为该点位于正方形内。
// 正方形的边长可以为零。

/**
 * @param {number[][]} points
 * @param {string} s
 * @return {number}
 */
var maxPointsInsideSquare = function (points, s) {
  // 二分查找，找到包含最多点数的正方形的边长
  let left = 1;
  let right = 10 ** 9;
  let res = 0;
  const isConform = (len) => {
    const set = new Set();
    for (let i = 0; i < points.length; i++) {
      const [x, y] = points[i];
      // 在正方形内
      if (x <= len && x >= -len && y <= len && y >= -len) {
        if (set.has(s[i])) return false;
        set.add(s[i]);
      }
    }
    res = set.size;
    return true;
  };
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (isConform(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return res;
};
