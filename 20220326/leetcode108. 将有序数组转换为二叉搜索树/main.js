/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-26 23:22:43                                                  *
 * @LastModifiedDate: 2022-03-26 23:28:52                                      *
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
  // 半分数组
  const len = nums.length;
  if (len == 0) {
    return null;
  }
  if (len == 1) {
    return new TreeNode(nums[0]);
  }
  let mid = Math.floor(len / 2);
  const ans = new TreeNode(nums[mid]);
  ans.left = sortedArrayToBST(nums.slice(0, mid));
  ans.right = sortedArrayToBST(nums.slice(mid + 1));
  return ans;
};
