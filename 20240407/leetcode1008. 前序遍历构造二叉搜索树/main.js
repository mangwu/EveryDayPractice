// 给定一个整数数组，它表示BST(即 二叉搜索树 )的 先序遍历 ，构造树并返回其根。

// 保证 对于给定的测试用例，总是有可能找到具有给定需求的二叉搜索树。

// 二叉搜索树 是一棵二叉树，其中每个节点， Node.left 的任何后代的值 严格小于 Node.val , Node.right 的任何后代的值 严格大于 Node.val。

// 二叉树的 前序遍历 首先显示节点的值，然后遍历Node.left，最后遍历Node.right。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  const n = preorder.length;
  const dfs = (left, right) => {
    if (left > right) return null;
    const node = new TreeNode(preorder[left]);
    if (left === right) return node;
    let i = left + 1;
    for (; i <= right; i++) {
      if (preorder[i] > preorder[left]) break;
    }
    node.left = dfs(left + 1, i - 1);
    node.right = dfs(i, right);
    return node;
  };
  return dfs(0, n - 1);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  const n = preorder.length;
  // 通过中序遍历和前序遍历获取树结构
  const inorder = Array.from(preorder).sort((a, b) => a - b);
  const inHash = new Map();
  for (let i = 0; i < n; i++) {
    inHash.set(inorder[i], i);
  }
  const dfs = (preLeft, preRight, inLeft, inRight) => {
    if (preLeft > preRight) return null;
    if (preLeft === preRight) return new TreeNode(preorder[preLeft]);
    const node = new TreeNode(preorder[preLeft]);
    const mid = inHash.get(preorder[preLeft]);
    node.left = dfs(preLeft + 1, preLeft + mid - inLeft, inLeft, mid - 1);
    node.right = dfs(preLeft + mid - inLeft + 1, preRight, mid + 1, inRight);
    return node;
  };
  return dfs(0, n - 1, 0, n - 1);
};
