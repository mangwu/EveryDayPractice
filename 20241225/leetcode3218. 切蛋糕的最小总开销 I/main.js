// 有一个 m x n 大小的矩形蛋糕，需要切成 1 x 1 的小块。

// 给你整数 m ，n 和两个数组：

// horizontalCut 的大小为 m - 1 ，其中 horizontalCut[i] 表示沿着水平线 i 切蛋糕的开销。
// verticalCut 的大小为 n - 1 ，其中 verticalCut[j] 表示沿着垂直线 j 切蛋糕的开销。
// 一次操作中，你可以选择任意不是 1 x 1 大小的矩形蛋糕并执行以下操作之一：

// 沿着水平线 i 切开蛋糕，开销为 horizontalCut[i] 。
// 沿着垂直线 j 切开蛋糕，开销为 verticalCut[j] 。
// 每次操作后，这块蛋糕都被切成两个独立的小蛋糕。

// 每次操作的开销都为最开始对应切割线的开销，并且不会改变。

// 请你返回将蛋糕全部切成 1 x 1 的蛋糕块的 最小 总开销。

/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} horizontalCut
 * @param {number[]} verticalCut
 * @return {number}
 */
var minimumCost = function (m, n, horizontalCut, verticalCut) {
  // verticalCut[i]  x = i的垂直切割 x轴方向向右
  // horizontalCut[j] y = j的水平切割 y轴方向向下
  // m n构成的矩形是以[-1,-1]为左上角，[n - 1, m - 1]为右下角的矩形
  // 为了更好的记录矩形的切割情况，可以把原点向左上角移动
  // m n构成的矩形是以[0,0]为左上角，[n, m]为右下角的矩形
  // 那么:verticalCut[i] 是 x = i + 1 的垂直切换
  // horizontalCut[j] 是 y = j + 1 的水平切割
  m++;
  n++;
  const cache = new Array(m * n).fill(0).map((v) => new Array(m * n).fill(-1));
  // cache[p1][p2]是左上角点p1和右下角点p2构成的矩形切割成独立方块的最小开销
  // 其中坐标点p的坐标计算方式为 x = p % n; y = Math.floor(p / n);
  const dfs = (p1, p2) => {
    const x1 = p1 % n;
    const y1 = Math.floor(p1 / n);
    const x2 = p2 % n;
    const y2 = Math.floor(p2 / n);
    if (y2 - y1 === 1 && x2 - x1 === 1) return 0;
    if (cache[p1][p2] !== -1) return cache[p1][p2];
    let res = Infinity;
    // 垂直切割
    for (let i = x1 + 1; i < x2; i++) {
      // x = i 的垂直切割，开销verticalCut[i-1];
      res = Math.min(
        res,
        dfs(p1, y2 * n + i) + dfs(y1 * n + i, p2) + verticalCut[i - 1]
      );
    }
    // 水平切割
    for (let j = y1 + 1; j < y2; j++) {
      // y = j 的水平切割，开销horizontalCut[j-1];
      res = Math.min(
        res,
        dfs(p1, j * n + x2) + dfs(j * n + x1, p2) + horizontalCut[j - 1]
      );
    }
    cache[p1][p2] = res;
    return res;
  };
  const res = dfs(0, m * n - 1);
  return res;
};
minimumCost(3, 2, [1, 3], [5]);
// m = 3 ; n = 2
// 4 3
// 0 1  2
// 3 4  5
// 6 7  8
// 9 10 11

// (1,2) => 2 * 3 + 1 = 7
// 7 => (7 % 3, 7 / 3)
