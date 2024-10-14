// 给你 k 枚相同的鸡蛋，并可以使用一栋从第 1 层到第 n 层共有 n 层楼的建筑。

// 已知存在楼层 f ，满足 0 <= f <= n ，任何从 高于 f 的楼层落下的鸡蛋都会碎，从 f 楼层或比它低的楼层落下的鸡蛋都不会破。

// 每次操作，你可以取一枚没有碎的鸡蛋并把它从任一楼层 x 扔下（满足 1 <= x <= n）。如果鸡蛋碎了，你就不能再次使用它。如果某枚鸡蛋扔下后没有摔碎，则可以在之后的操作中 重复使用 这枚鸡蛋。

// 请你计算并返回要确定 f 确切的值 的 最小操作次数 是多少？

/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
  const dp = new Array(k + 1)
    .fill(0)
    .map((v) => new Array(n + 1).fill(Number.MAX_SAFE_INTEGER));
  // dp[k][n]表示在n楼层仍k个鸡蛋，得到f的最小操作次数
  // 假设我们从x楼扔鸡蛋，有如下两种情况
  // 1. 鸡蛋不碎，那么f只能在x楼或以上（剩余的n-x层楼），鸡蛋个数不变，把原问题缩小成了一个(k, n - x)的子问题
  // 2. 鸡蛋碎了，f只能在x楼以下，因为少了一个鸡蛋，所以原问题缩小成了一个(k-1, x-1)的子问题
  // 据此可以列出状态转移方程：
  // dp[k][n] = 1 + min(max(dp[k-1][x-1], dp[k][n-x])) // 遍历x, 1<=x<=n
  // dp[i][j] = 1 + min(max(dp[i-1][x-1], dp[i][j-x])) // 遍历x, 1<=x<=j
  // 直接暴力求解的时间复杂度是O(kn^2)

  // 初始化所有n等于0的场景
  for (let i = 0; i <= k; i++) dp[i][0] = 0;
  // 初始化所有k等于1的场景
  for (let i = 1; i <= n; i++) dp[1][i] = i;
  for (let i = 1; i <= k; i++) {
    // 鸡蛋个数为i
    for (let j = 1; j <= n; j++) {
      // 求解dp[i][j],当前最高楼层是j
      for (let x = 1; x <= j; x++) {
        // 在x楼扔鸡蛋
        dp[i][j] = Math.min(
          dp[i][j],
          Math.max(dp[i - 1][x - 1], dp[i][j - x]) + 1
        );
      }
    }
  }
  return dp[k][n];
};

// 删除解法会超时，因为n的量级在10^4
// 需要优化寻找最小操作次数时x的方法
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
  const dp = new Array(k + 1)
    .fill(0)
    .map((v) => new Array(n + 1).fill(Number.MAX_SAFE_INTEGER));
  // dp[k][n] = 1 + min(max(dp[k-1][x-1], dp[k][n-x])) // 遍历x, 1<=x<=n
  // dp[i][j] = 1 + min(max(dp[i-1][x-1], dp[i][j-x])) // 遍历x, 1<=x<=j

  // 在x为多少时，dp[i][j]取得最小值
  // dp(k,n)是一个关于n的单独递增函数，在鸡蛋k固定的情况下，楼层越多，需要的步数一定不会变少
  // dp[i-1][x-1]是一个随着x增大而递增的函数
  // dp[i][j-x]是一个随着x增大而递减的函数
  // 设T1(x) = dp[i-1][x-1]， T2(x) = dp[i][j-x]
  // T1(x)递增，T2(x)递增，要求1<=x<=j时，Max(T1(x),T2(x))的最小值

  // 想象一下在一个直角坐标系中，横坐标为x，纵坐标为T1(x)和T2(x),要找到一个位置使得它们的最大值最小
  // 那就是二者相交的交点处，但是x是离散的，所以交点不一定存在，那么就需要找到最节点交点的左右两个离散点
  // 左边的离散点是：最大的x，满足T1(x) < T2(x)；右边的离散点是：最小的x，满足T2(x) >= T1(x)
  // 因为T1(x)和T2(x)都是单调的，所以可以通过二分查找找到这两个离散点，然后取更小的Max(T1(x),T2(x))
  // 初始化所有n等于0的场景
  for (let i = 0; i <= k; i++) dp[i][0] = 0;
  // 初始化所有k等于1的场景
  for (let i = 1; i <= n; i++) dp[1][i] = i;
  for (let i = 1; i <= k; i++) {
    // 鸡蛋个数为i
    for (let j = 1; j <= n; j++) {
      // 求解dp[i][j],当前最高楼层是j
      // for (let x = 1; x <= j; x++) {
      //   // 在x楼扔鸡蛋
      //   dp[i][j] = Math.min(
      //     dp[i][j],
      //     Math.max(dp[i - 1][x - 1], dp[i][j - x]) + 1
      //   );
      // }
      let low = 1;
      let hi = j;
      while (low + 1 < hi) {
        const mid = Math.floor((low + hi) / 2);
        const t1 = dp[i - 1][mid - 1];
        const t2 = dp[i][j - mid];
        if (t1 < t2) {
          low = mid;
        } else if (t1 > t2) {
          hi = mid;
        } else {
          low = mid;
          hi = mid;
        }
      }
      dp[i][j] = Math.min(
        dp[i][j],
        Math.max(dp[i - 1][low - 1], dp[i][j - low]) + 1,
        Math.max(dp[i - 1][hi - 1], dp[i][j - hi]) + 1
      );
    }
  }
  return dp[k][n];
};
