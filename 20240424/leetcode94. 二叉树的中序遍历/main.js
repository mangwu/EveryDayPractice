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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 使用栈迭代，使用一个变量保存栈顶元素
  // 栈顶元素的遍历就是中序遍历的顺序
  if (!root) return [];
  const stack = [];
  const ans = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop(); // 当前栈顶元素，将其弹出是因为其左子节点已经遍历过了
    ans.push(root.val);
    root = root.right; // 中序遍历最后才遍历右节点
  }
  return ans;
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return [];
  // morris遍历法，不需要栈保存
  let ans = [];
  let prodecessor = null; // 记录当前遍历节点的左子树的最后遍历的一个节点
  while (root) {
    if (root.left) {
      // 有左孩子，获取左子树的最后一个节点
      prodecessor = root.left;
      // 因为后面会把prodecessor的右节点赋值为当前节点，所以需要第二个判断条件
      while (prodecessor.right && prodecessor.right !== root) {
        prodecessor = prodecessor.right;
      }
      if (!prodecessor.right) {
        // 当前节点没有遍历过左子树
        prodecessor.right = root;
        root = root.left;
      } else {
        // 当前节点的左子树已经遍历完成了
        ans.push(root.val);
        prodecessor.right = null;
        root = root.right;
      }
    } else {
      // 没有左子树
      ans.push(root.val);
      root = root.right; // 这一步可以算是出栈，因为right记录的可能是当前节点父节点
    }
  }
  return ans;
};
