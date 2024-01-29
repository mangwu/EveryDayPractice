// 电子游戏“辐射4”中，任务 “通向自由” 要求玩家到达名为 “Freedom Trail Ring” 的金属表盘，并使用表盘拼写特定关键词才能开门。

// 给定一个字符串 ring ，表示刻在外环上的编码；给定另一个字符串 key ，表示需要拼写的关键词。您需要算出能够拼写关键词中所有字符的最少步数。

// 最初，ring 的第一个字符与 12:00 方向对齐。您需要顺时针或逆时针旋转 ring 以使 key 的一个字符在 12:00 方向对齐，然后按下中心按钮，以此逐个拼写完 key 中的所有字符。

// 旋转 ring 拼出 key 字符 key[i] 的阶段中：

// 您可以将 ring 顺时针或逆时针旋转 一个位置 ，计为1步。旋转的最终目的是将字符串 ring 的一个字符与 12:00 方向对齐，并且这个字符必须等于字符 key[i] 。
// 如果字符 key[i] 已经对齐到12:00方向，您需要按下中心按钮进行拼写，这也将算作 1 步。按完之后，您可以开始拼写 key 的下一个字符（下一阶段）, 直至完成所有拼写。

/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
  // dfs
  const n = ring.length;
  const m = key.length;
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    hash.has(ring[i]) ? hash.get(ring[i]).push(i) : hash.set(ring[i], [i]);
  }
  const memo = new Array(m).fill(0).map(() => new Array(n).fill(-1));
  // i: 当前要找的key[i]
  // pos: 当前在ring上的位置
  // 返回最短步数
  const dfs = (i, pos) => {
    if (i === m) {
      return 0; // 结束查找
    }
    if (memo[i][pos] !== -1) return memo[i][pos];
    const nextArr = hash.get(key[i]);
    let steps = Infinity;
    for (const idx of nextArr) {
      // 从当前pos到idx需要的步骤(可以顺时针也可以逆时针，取小的哪一个)
      let curSteps = Math.min((idx - pos + n) % n, (pos - idx + n) % n) + 1;
      curSteps += dfs(i + 1, idx);
      steps = Math.min(steps, curSteps);
    }
    memo[i][pos] = steps;
    return memo[i][pos];
  };
  return dfs(0, 0);
};

// pos idx

// n = 5
// idx pos
// 0   4


/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
  // dfs
  const n = ring.length;
  const m = key.length;
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    hash.has(ring[i]) ? hash.get(ring[i]).push(i) : hash.set(ring[i], [i]);
  }
  // 从dfs记忆化搜索倒推动态规划
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(-1));
  // dp[i][j]表示从位置j开始，完成key.slice(i)字符需要
};
