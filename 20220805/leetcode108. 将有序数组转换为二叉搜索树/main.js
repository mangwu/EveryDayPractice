/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-05 20:30:19                                                  *
 * @LastModifiedDate: 2022-08-05 21:02:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

// 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

//
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // 中位数
  const dfs = (pre, start, end) => {
    if (start > end) {
      return;
    }
    let mid = Math.floor((start + end) / 2);
    pre.val = nums[mid];
    console.log(nums[mid]);
    if (start >= mid - 1) {
      pre.left = new TreeNode();
      dfs(pre.left, start, mid - 1);
    }
    if (mid + 1 <= end) {
      pre.right = new TreeNode();
      dfs(pre.right, mid + 1, end);
    }
  };
  const root = new TreeNode();
  const len = nums.length;
  dfs(root, 0, len - 1);
  return root;
};
// [0,null,5,0,9,null,null,0]

// 0
//  5
// 0 9
//  0
