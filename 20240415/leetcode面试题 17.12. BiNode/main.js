// 二叉树数据结构TreeNode可用来表示单向链表（其中left置空，right为下一个链表节点）。实现一个方法，把二叉搜索树转换为单向链表，要求依然符合二叉搜索树的性质，转换操作应是原址的，也就是在原始的二叉搜索树上直接修改。

// 返回转换后的单向链表的头节点。

// 注意：本题相对原题稍作改动

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function (root) {
  // 中序遍历
  const inorder = [];
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    inorder.push(node);
    dfs(node.right);
  };
  dfs(root);
  const n = inorder.length;
  for (let i = 0; i < n; i++) {
    if (i + 1 < n) {
      inorder[i].left = null;
      inorder[i].right = inorder[i + 1];
    } else {
      inorder[i].left = null;
      inorder[i].right = null;
    }
  }
  return n ? inorder[0] : null;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function (root) {
  if (!root) return null;
  const header = new TreeNode(0);
  let pre = header;
  const stack = [root];
  while (stack.length) {
    let node = stack[stack.length - 1];
    while (node && node.left) {
      stack.push(node.left);
      node = node.left;
    }
    // 当前节点没有左节点了
    let popNode = stack.pop();
    pre.right = popNode;
    pre = popNode;
    pre.left = null;
    if (stack.length) {
      stack[stack.length - 1].left = null;
    }
    if (popNode.right) {
      stack.push(popNode.right);
      popNode.right = null;
    }
  }
  return header.right;
};
