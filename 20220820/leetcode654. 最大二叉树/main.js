/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-20 12:35:48                                                  *
 * @LastModifiedDate: 2022-08-21 16:30:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个不重复的整数数组 nums 。 最大二叉树 可以用下面的算法从 nums 递归地构建:

// 创建一个根节点，其值为 nums 中的最大值。
// 递归地在最大值 左边 的 子数组前缀上 构建左子树。
// 递归地在最大值 右边 的 子数组后缀上 构建右子树。
// 返回 nums 构建的 最大二叉树 。
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
var constructMaximumBinaryTree = function (nums) {
  const n = nums.length;
  if (n == 0) {
    return null;
  }
  if (n == 1) {
    return new TreeNode(nums[0]);
  }
  let max = -Infinity;
  let maxIdx = -1;
  for (let i = 0; i < n; i++) {
    if (nums[i] > max) {
      max = nums[i];
      maxIdx = i;
    }
  }
  const root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIdx));
  root.right = constructMaximumBinaryTree(nums.slice(maxIdx + 1));
  return root;
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const dfs = (start, end) => {
    if (start == end) {
      return new TreeNode(nums[start]);
    }
    if (start > end) {
      return null;
    }
    let max = -Infinity;
    let maxIdx = start - 1;
    for (let i = start; i <= end; i++) {
      if (nums[i] > max) {
        max = nums[i];
        maxIdx = i;
      }
    }
    const root = new TreeNode(max);
    root.left = dfs(start, maxIdx - 1);
    root.right = dfs(maxIdx + 1, end);
    return root;
  };
  return dfs(0, nums.length - 1);
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  // 单调栈
  const n = nums.length;
  const left = new Array(n).fill(-1);
  const right = new Array(n).fill(-1);
  const stackLeft = [];
  const stackRight = [];
  const trees = new Array(n).fill(0);
  // 找出每个元素的下一个更大元素
  for (let i = n - 1; i >= 0; i--) {
    trees[i] = new TreeNode(nums[i]);
    while (
      stackRight.length > 0 &&
      nums[stackRight[stackRight.length - 1]] < nums[i]
    ) {
      stackRight.pop();
    }
    if (stackRight.length > 0) {
      right[i] = stackRight[stackRight.length - 1];
    }
    stackRight.push(i);
  }
  for (let i = 0; i < n; i++) {
    while (
      stackLeft.length > 0 &&
      nums[stackLeft[stackLeft.length - 1]] < nums[i]
    ) {
      stackLeft.pop();
    }
    if (stackLeft.length > 0) {
      left[i] = stackLeft[stackLeft.length - 1];
    }
    stackLeft.push(i);
  }
  let root = null;
  // 遍历left和right，将trees中的节点进行连接
  for (let i = 0; i < n; i++) {
    if (left[i] == -1 && right[i] == -1) {
      root = trees[i];
    } else if (
      right[i] == -1 ||
      (left[i] !== -1 && nums[left[i]] < nums[right[i]])
    ) {
      trees[left[i]].right = trees[i];
    } else {
      trees[right[i]].left = trees[i];
    }
  }
  return root;
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  // 一次获得两个单调栈
  // 下一个最大和上一个最大
  const stack = [];
  const n = nums.length;
  const left = new Array(n).fill(-1);
  const right = new Array(n).fill(-1);
  const trees = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    trees[i] = new TreeNode(nums[i]);
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      right[stack.pop()] = i;
    }
    if (stack.length > 0) {
      left[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
  let root = null;
  for (let i = 0; i < n; i++) {
    if (left[i] == -1 && right[i] == -1) {
      root = trees[i];
    } else if (
      right[i] == -1 ||
      (left[i] !== -1 && nums[left[i]] < nums[right[i]])
    ) {
      trees[left[i]].right = trees[i];
    } else {
      trees[right[i]].left = trees[i];
    }
  }
  return root;
};

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  // 一次获得两个单调栈
  // 下一个最大和上一个最大
  const stack = [];
  const n = nums.length;
  const trees = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    trees[i] = new TreeNode(nums[i]);
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      // 当前元素大于栈顶元素，栈顶元素的下一个更大的元素索引就是当前元素
      // 所以当前元素的左子节点就是栈中的元素节点
      trees[i].left = trees[stack.pop()];
    }
    if (stack.length > 0) {
      // 栈顶元素是当前元素的左边界
      trees[stack[stack.length - 1]].right = trees[i];
    }
    stack.push(i);
  }
  // 单调栈中第一个元素一定是最大值的索引
  return trees[stack[0]];
};
