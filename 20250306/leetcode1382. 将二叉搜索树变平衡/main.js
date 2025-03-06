// 给你一棵二叉搜索树，请你返回一棵 平衡后 的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。如果有多种构造方法，请你返回任意一种。

// 如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是 平衡的 。

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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  // 先中序遍历二叉树
  const nodes = [];
  const inorderDfs = (node) => {
    if (!node) return;
    inorderDfs(node.left);
    nodes.push(node);
    inorderDfs(node.right);
  };
  inorderDfs(root);
  // 遍历nodes，将每个left，right归null
  nodes.forEach((node) => {
    node.left = null;
    node.right = null;
  });
  const balanceDfs = (start, end) => {
    if (start > end) return null;
    if (start === end) return nodes[start];
    const mid = Math.floor((start + end) / 2);
    const root = nodes[mid];
    root.left = balanceDfs(start, mid - 1);
    root.right = balanceDfs(mid + 1, end);
    return root;
  };
  return balanceDfs(0, nodes.length - 1);
};
