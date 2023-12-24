// 给你一个用无限二维网格表示的花园，每一个 整数坐标处都有一棵苹果树。整数坐标 (i, j) 处的苹果树有 |i| + |j| 个苹果。

// 你将会买下正中心坐标是 (0, 0) 的一块 正方形土地 ，且每条边都与两条坐标轴之一平行。

// 给你一个整数 neededApples ，请你返回土地的 最小周长 ，使得 至少 有 neededApples 个苹果在土地 里面或者边缘上。

// |x| 的值定义为：

// 如果 x >= 0 ，那么值为 x
// 如果 x < 0 ，那么值为 -x

/**
 * @param {number} neededApples
 * @return {number}
 */
var minimumPerimeter = function (neededApples) {
  let cur = 2;
  // preSideSum + preSideLen + 2 * cur
  let sideSum = 0 + (cur - 1) + 2 * cur;
  let sum = 0 + 4 * sideSum - 4 * cur;
  while (sum < neededApples) {
    cur += 2;
    sideSum = sideSum + cur - 1 + 2 * cur;
    sum += 4 * sideSum - 4 * cur;
    console.log(sum);
  }
  return 4 * cur;
};

// 1   0   4
// 2   12  8
// 3   12  16
// 4   60  32
// 5   60  64
// 6   168
// 6 5 4 3 4 5 6
// 5 4 3 2 3 4 5
// 4 3 2 1 2 3 4
// 3 2 1 0 1 2 3
// 4 3 2 1 2 3 4
// 5 4 3 2 3 4 5
// 6 5 4 3 4 5 6
