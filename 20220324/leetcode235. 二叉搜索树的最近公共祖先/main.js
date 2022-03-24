/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-24 11:07:53                                                  *
 * @LastModifiedDate: 2022-03-24 15:02:24                                      *
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
// 最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

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
  if (
    (p.val <= root.val && q.val >= root.val) ||
    (p.val >= root.val && q.val <= root.val)
  ) {
    return root;
  }
  if (p.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return lowestCommonAncestor(root.right, p, q);
  }
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 使用迭代法，通过寻找路径根节点到p的路径进行搜索
  const getPath = (root, target) => {
    const res = [];
    while (root.val !== target.val) {
      res.push(root);
      if (root.val > target.val) {
        root = root.left;
      } else {
        root = root.right;
      }
    }
    res.push(root);
    return res;
  };
  let ans;
  const pathP = getPath(root, p);
  const pathQ = getPath(root, q);
  for (let i = 0; i < pathP.length && i < pathQ.length; i++) {
    // 分叉点在最后一个
    if (pathP[i] == pathQ[i]) {
      ans = pathP[i];
    } else {
      break;
    }
  }
  return ans;
};
