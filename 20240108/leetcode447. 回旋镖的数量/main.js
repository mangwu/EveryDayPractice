// 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组 ，其中 i 和 j 之间的距离和 i 和 k 之间的欧式距离相等（需要考虑元组的顺序）。

// 返回平面上所有回旋镖的数量。

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  const n = points.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const distanceHash = new Map();
    const [x1, y1] = points[i];
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const [x2, y2] = points[j];
      const distance = Math.pow(y1 - y2, 2) + Math.pow(x1 - x2, 2);
      if (distanceHash.has(distance)) {
        ans += distanceHash.get(distance) * 2;
      }
      distanceHash.set(distance, (distanceHash.get(distance) | 0) + 1);
    }
  }
  return ans;
};


