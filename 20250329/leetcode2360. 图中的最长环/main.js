// 给你一个 n 个节点的 有向图 ，节点编号为 0 到 n - 1 ，其中每个节点 至多 有一条出边。

// 图用一个大小为 n 下标从 0 开始的数组 edges 表示，节点 i 到节点 edges[i] 之间有一条有向边。如果节点 i 没有出边，那么 edges[i] == -1 。

// 请你返回图中的 最长 环，如果没有任何环，请返回 -1 。

// 一个环指的是起点和终点是 同一个 节点的路径。

/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function (edges) {
  const n = edges.length;
  const pos = new Array(n).fill(-1);
  let res = -1;
  for (let i = 0; i < n; i++) {
    if (pos[i] === -1) {
      // 开始进行遍历
      const set = new Set();
      let curNode = i;
      set.add(curNode);
      let steps = 0;
      pos[i] = steps;
      while (edges[curNode] !== -1) {
        curNode = edges[curNode];
        if (pos[curNode] === -1) {
          pos[curNode] = ++steps;
        } else {
          // 已经访问过的元素
          if (set.has(curNode)) {
            res = Math.max(res, steps - pos[curNode] + 1);
          }
          break;
        }
        set.add(curNode);
      }
    }
  }
  return res;
};
