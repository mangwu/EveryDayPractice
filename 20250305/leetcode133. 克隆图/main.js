// 给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。

// 图中的每个节点都包含它的值 val（int） 和其邻居的列表（list[Node]）。

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

// 测试用例格式：

// 简单起见，每个节点的值都和它的索引相同。例如，第一个节点值为 1（val = 1），第二个节点值为 2（val = 2），以此类推。该图在测试用例中使用邻接列表表示。

// 邻接列表 是用于表示有限图的无序列表的集合。每个列表都描述了图中节点的邻居集。

// 给定节点将始终是图中的第一个节点（值为 1）。你必须将 给定节点的拷贝 作为对克隆图的引用返回。

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  const linkList = [];
  let n = 0;
  const dfs = (node) => {
    if (!node) return;
    const { val, neighbors } = node;
    n = Math.max(n, val);
    if (linkList[val]) return;
    linkList[val] = [];
    for (const neighbor of neighbors) {
      linkList[val].push(neighbor.val);
      dfs(neighbor);
    }
  };
  dfs(node);
  if (n === 0) return null;
  const nodes = new Array(n + 1).fill(0).map((_v, i) => new _Node(i));
  for (let i = 1; i <= n; i++) {
    for (const item of linkList[i]) {
      nodes[i].neighbors.push(nodes[item]);
    }
  }
  return nodes[1];
};
