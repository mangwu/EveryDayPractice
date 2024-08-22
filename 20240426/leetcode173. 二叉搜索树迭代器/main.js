// 实现一个二叉搜索树迭代器类BSTIterator ，表示一个按中序遍历二叉搜索树（BST）的迭代器：
// BSTIterator(TreeNode root) 初始化 BSTIterator 类的一个对象。BST 的根节点 root 会作为构造函数的一部分给出。指针应初始化为一个不存在于 BST 中的数字，且该数字小于 BST 中的任何元素。
// boolean hasNext() 如果向指针右侧遍历存在数字，则返回 true ；否则返回 false 。
// int next()将指针向右移动，然后返回指针处的数字。
// 注意，指针初始化为一个不存在于 BST 中的数字，所以对 next() 的首次调用将返回 BST 中的最小元素。

// 你可以假设 next() 调用总是有效的，也就是说，当调用 next() 时，BST 的中序遍历中至少存在一个下一个数字。

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
 */
var BSTIterator = function (root) {
  // 中序遍历
  this.stack = [];
  this.root = root;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  while (this.root) {
    this.stack.push(this.root);
    this.root = this.root.left;
  }
  this.root = this.stack.pop();
  const res = this.root.val;
  this.root = this.root.right;
  return res;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return Boolean(this.root || this.stack.length);
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

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
 */
var BSTIterator = function (root) {
  // MORRIS算法
  this.root = root;
  this.prodecessor = null;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  let res = -1;
  // 遍历找到下一个节点
  while (res === -1) {
    if (this.root.left) {
      // 有左子树
      this.prodecessor = this.root.left;
      while (
        this.prodecessor &&
        this.prodecessor.right &&
        this.prodecessor.right !== this.root
      ) {
        this.prodecessor = this.prodecessor.right;
      }
      if (this.prodecessor.right) {
        // 已经遍历过了
        res = this.root.val;
        this.root = this.root.right;
        this.prodecessor.right = null;
      } else {
        // 没有遍历过
        this.prodecessor.right = this.root;
        this.root = this.root.left;
      }
    } else {
      // 没有左子树
      res = this.root.val;
      this.root = this.root.right;
    }
  }
  return res;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return Boolean(this.root);
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */


[7,3,15,null,null,9,20,8,13,17,25,null,null,12,14,16,null,23]

