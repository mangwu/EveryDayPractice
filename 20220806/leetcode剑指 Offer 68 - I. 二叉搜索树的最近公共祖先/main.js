/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-06 20:02:59                                                  *
 * @LastModifiedDate: 2022-08-06 21:33:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，
// 最近公共祖先表示为一个结点 x，
// 满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

// 例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 最近搜索祖先
  // 利用二叉搜索树特性
  if (root == p || root == q) {
    return root;
  }
  if (p.val > q.val) {
    return lowestCommonAncestor(root, q, p);
  }
  // p的值比q的小
  if (root.val > p.val && root.val < q.val) {
    // p root q
    return root;
  }
  if (root.val < p.val) {
    // root p q
    return lowestCommonAncestor(root.right, p, q);
  }
  return lowestCommonAncestor(root.left, p, q);
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 最近搜索祖先
  // 利用二叉搜索树特性
  if (root == p || root == q) {
    return root;
  }
  if (p.val > q.val) {
    return lowestCommonAncestor(root, q, p);
  }
  // p的值比q的小
  while (root) {
    if (root.val >= p.val && root.val <= q.val) {
      return root;
    }
    if (root.val < p.val) {
      // root p q
      root = root.right;
    }
    if (root.val > q.val) {
      root = root.left;
    }
  }
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root == p || root == q) {
    return root;
  }
  // 不利用二叉搜索树的特性
  const dfs = (node) => {
    if (node == p || node == q) {
      return node;
    }
    let leftP = hasNode(node.left, p);
    let leftQ = hasNode(node.left, q);
    if (leftP ^ leftQ) {
      // 异或
      return node;
    }
    if (leftP && leftQ) {
      // 都在左边
      return dfs(node.left);
    }
    // 都在右边
    return dfs(node.right);
  };
  const hasNode = (node, target) => {
    if (!node) {
      return false;
    }
    if (node == target) {
      return true;
    }
    return hasNode(node.left, target) || hasNode(node.right, target);
  };

  return dfs(root);
};
