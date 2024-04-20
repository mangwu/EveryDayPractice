// 给出了一个由 n 个节点组成的网络，用 n × n 个邻接矩阵图 graph 表示。在节点网络中，当 graph[i][j] = 1 时，表示节点 i 能够直接连接到另一个节点 j。

// 一些节点 initial 最初被恶意软件感染。只要两个节点直接连接，且其中至少一个节点受到恶意软件的感染，那么两个节点都将被恶意软件感染。这种恶意软件的传播将继续，直到没有更多的节点可以被这种方式感染。

// 假设 M(initial) 是在恶意软件停止传播之后，整个网络中感染恶意软件的最终节点数。

// 如果从 initial 中移除某一节点能够最小化 M(initial)， 返回该节点。如果有多个节点满足条件，就返回索引最小的节点。

// 请注意，如果某个节点已从受感染节点的列表 initial 中删除，它以后仍有可能因恶意软件传播而受到感染。

/**
 * @param {number[][]} graph
 * @param {number[]} initial
 * @return {number}
 */
var minMalwareSpread = function (graph, initial) {
  const hash = new Map();
  const n = graph.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (graph[i][j] === 1) {
        hash.has(i) ? hash.get(i).push(j) : hash.set(i, [j]);
        hash.has(j) ? hash.get(j).push(i) : hash.set(j, [i]);
      }
    }
  }
  const m = initial.length;
  let ans = initial[0];
  let mInitial = Infinity;
  for (let i = 0; i < m; i++) {
    const copy = initial.slice();
    copy.splice(i, 1);
    const res = bfs(copy, hash, n).length;
    if (res < mInitial) {
      ans = initial[i];
      mInitial = res;
    } else if (res === mInitial) {
      ans = Math.min(ans, initial[i]);
    }
  }
  return ans;
};

const bfs = (initial, hash, n) => {
  let queue = initial;
  const visited = new Array(n).fill(false);
  for (const item of initial) {
    visited[item] = true;
  }
  while (queue.length) {
    const nxt = [];
    for (const q of queue) {
      const nxtNodes = hash.get(q);
      for (const nxtNode of nxtNodes || []) {
        if (!visited[nxtNode]) {
          visited[nxtNode] = true;
          nxt.push(nxtNode);
        }
      }
    }
    queue = nxt;
  }
  return visited.map((v, i) => (v ? i : v)).filter((v) => v !== false);
};

const random = require("../../publicFunc/random/random");

const generateGraph = (n) => {
  const graph = new Array(n).fill(-1).map((v) => new Array(n).fill(-1));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        graph[i][j] = 1;
      } else if (graph[j][i] !== -1) {
        graph[i][j] = graph[j][i];
      } else graph[i][j] = random.randomNum();
    }
  }
  return graph;
};
const {
  recordInOutContent,
} = require("../../publicFunc/recordInOutContent/recordInOutContent");
recordInOutContent(minMalwareSpread, generateGraph(20), [
  ...new Set(random.randomArr(random.randomNum(1, 20))),
]);

