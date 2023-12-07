// n 座城市，从 0 到 n-1 编号，其间共有 n-1 条路线。因此，要想在两座不同城市之间旅行只有唯一一条路线可供选择（路线网形成一颗树）。去年，交通运输部决定重新规划路线，以改变交通拥堵的状况。

// 路线用 connections 表示，其中 connections[i] = [a, b] 表示从城市 a 到 b 的一条有向路线。

// 今年，城市 0 将会举办一场大型比赛，很多游客都想前往城市 0 。

// 请你帮助重新规划路线方向，使每个城市都可以访问城市 0 。返回需要变更方向的最小路线数。

// 题目数据 保证 每个城市在重新规划路线方向后都能到达城市 0 。

const FORWARD_DIR = 0;
const BACKWARD_DIR = 1;

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const hash = new Map();
  for (const [a, b] of connections) {
    hash.has(a)
      ? hash.get(a).push([b, FORWARD_DIR])
      : hash.set(a, [[b, FORWARD_DIR]]);
    hash.has(b)
      ? hash.get(b).push([a, BACKWARD_DIR])
      : hash.set(b, [[a, BACKWARD_DIR]]);
  }
  // 层序遍历
  let queue = [0];
  const visited = new Array(n).fill(false);
  visited[0] = true;
  let ans = 0;
  while (queue.length) {
    const nxt = [];
    for (const q of queue) {
      const arr = hash.get(q);
      if (arr) {
        for (const [city, dir] of arr) {
          if (!visited[city]) {
            visited[city] = true;
            if (dir === FORWARD_DIR) ans++;
            nxt.push(city);
          }
        }
      }
    }
    queue = nxt;
  }
  return ans;
};
