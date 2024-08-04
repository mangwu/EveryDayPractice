// 给你两棵二叉树 root 和 subRoot 。检验 root 中是否包含和 subRoot 具有相同结构和节点值的子树。如果存在，返回 true ；否则，返回 false 。

// 二叉树 tree 的一棵子树包括 tree 的某个节点和这个节点的所有后代节点。tree 也可以看做它自身的一棵子树。

const isSame = (root, subRoot) => {
  if (!root && !subRoot) return true;
  if (!root || !subRoot) return false; // 存在一个空
  if (root.val !== subRoot.val) return false;
  return isSame(root.left, subRoot.left) && isSame(root.right, subRoot.right);
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
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (isSame(root, subRoot)) return true;
  if (!root) return false;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
