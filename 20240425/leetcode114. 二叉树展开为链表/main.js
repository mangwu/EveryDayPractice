// 给你二叉树的根结点 root ，请你将它展开为一个单链表：

const { TreeNode } = require("../../publicFunc/TreeNode/TreeNode");

// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // 迭代写法
  const stack = [];
  const nodes = [];
  while (root || stack.length) {
    while (root) {
      nodes.push(root);
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }
  for (let i = 1; i < nodes.length; i++) {
    nodes[i - 1].right = nodes[i];
    nodes[i - 1].left = null;
  }
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // dfs
  const nodes = [];
  const dfs = (node) => {
    if (!node) return;
    nodes.push(node);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  for (let i = 1; i < nodes.length; i++) {
    nodes[i].right = nodes[i];
    nodes[i].left = null;
  }
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // 迭代过程中连接
  const stack = [];
  const header = new TreeNode();
  let pre = header;
  while (root || stack.length) {
    if (!root) {
      root = stack.pop();
    }
    pre.right = root;
    pre = root;
    if (root.right) {
      stack.push(root.right);
    }
    if (root.left) {
      const left = root.left;
      root.left = null;
      root = left;
    } else root = null;
  }
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // morris算法，前序
  let prodecessor = null;
  const nodes = [];
  while (root) {
    if (root.left) {
      // 有左节点
      prodecessor = root.left;
      while (prodecessor && prodecessor.right && prodecessor.right !== root) {
        prodecessor = prodecessor.right;
      }
      if (prodecessor.right) {
        // 已经遍历过了
        prodecessor.right = null;
        root = root.right;
      } else {
        // 还没遍历过
        prodecessor.right = root;
        nodes.push(root);
        root = root.left;
      }
    } else {
      // 没有左子节点
      nodes.push(root);
      root = root.right;
    }
  }
  for (let i = 1; i < nodes.length; i++) {
    nodes[i - 1].right = nodes[i];
    nodes[i - 1].left = null;
  }
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // morris算法，前序
  let prodecessor = null;
  while (root) {
    if (root.left) {
      // 有左节点
      const next = root.left;
      prodecessor = root.left;
      while (prodecessor && prodecessor.right) {
        prodecessor = prodecessor.right;
      }
      prodecessor.right = root.right;
      root.left = null;
      root.right = next;
    }
    root = root.right;
  }
};
