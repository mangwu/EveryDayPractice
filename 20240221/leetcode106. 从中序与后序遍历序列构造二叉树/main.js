// 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const n = inorder.length;
  const hash = new Map();
  for (let i = 0; i < n; i++) hash.set(inorder[i], i);
  const dfs = (inLeft, inRight, postLeft, postRight) => {
    if (postLeft > postRight) return null;
    if (postLeft === postRight) return new TreeNode(postorder[postRight]);
    const node = new TreeNode(postorder[postRight]);
    const middle = hash.get(node.val);
    node.left = dfs(
      inLeft,
      middle - 1,
      postLeft,
      postLeft + middle - inLeft - 1
    );
    node.right = dfs(
      middle + 1,
      inRight,
      postLeft + middle - inLeft,
      postRight - 1
    );
    return node;
  };
  return dfs(0, n - 1, 0, n - 1);
};


//    1
//  2   3
//   4    7
//  8 9 10 11