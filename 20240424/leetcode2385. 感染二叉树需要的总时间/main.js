// 给你一棵二叉树的根节点 root ，二叉树中节点的值 互不相同 。另给你一个整数 start 。在第 0 分钟，感染 将会从值为 start 的节点开始爆发。

// 每分钟，如果节点满足以下全部条件，就会被感染：

// 节点此前还没有感染。
// 节点与一个已感染节点相邻。
// 返回感染整棵树需要的分钟数。

const { TreeNode } = require("../../publicFunc/TreeNode/TreeNode");
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
  let ans = 0;
  const hash = new Map();
  // 先找到start为值的节点
  const dfs = (preNode, node) => {
    if (!node) return;
    const arr = [];
    if (preNode) arr.push(preNode.val);
    if (node.left) arr.push(node.left.val);
    if (node.right) arr.push(node.right.val);
    hash.set(node.val, arr);
    dfs(node, node.left);
    dfs(node, node.right);
  };
  dfs(null, root);
  let queue = [start];
  const visited = new Set([start]);
  while (queue.length) {
    let nxt = [];
    for (const q of queue) {
      const nxtArr = hash.get(q);
      for (const nxtNode of nxtArr || []) {
        if (!visited.has(nxtNode)) {
          visited.add(nxtNode);
          nxt.push(nxtNode);
        }
      }
    }
    ans++;
    queue = nxt;
  }
  return ans;
};
