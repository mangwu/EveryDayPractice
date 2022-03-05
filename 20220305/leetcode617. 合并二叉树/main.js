/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-05 21:33:33                                                  *
 * @LastModifiedDate: 2022-03-05 23:30:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两棵二叉树： root1 和 root2 。

// 想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。

// 返回合并后的二叉树。

// 注意: 合并过程必须从两个树的根节点开始。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  // 一同遍历root1和root2，当root1的可以遍历到，root2不能遍历到时就回溯
  // 当root1不能遍历到，root2能遍历到时就赋予然后回溯
  // 将root2移到root1中
  const dfs = (node1, node2) => {
    // 判断两个点的情况
    // 两个点都存在W
    if (node1 && node2) {
      node1.val = node1.val + node2.val;
      // 左右两个点
      if (node1.left && node2.left) {
        dfs(node1.left, node2.left);
      }
      if (node1.right && node2.right) {
        dfs(node1.right, node2.right);
      }
    }
    // node2比node1多的点
    if (node1.left == null) {
      node1.left = node2.left;
    }
    if (node1.right == null) {
      node1.right = node2.right;
    }
  };
  if (root1 && root2) {
    dfs(root1, root2);
  } else {
    return root1 ? root1 : root2;
  }

  return root1;
};
