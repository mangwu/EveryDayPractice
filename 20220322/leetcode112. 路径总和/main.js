/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-22 15:09:58                                                  *
 * @LastModifiedDate: 2022-03-22 16:27:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // dfs遍历获得所有根节点然后一一比对即可
  // 迭代法
  if (!root) {
    return false;
  }
  let sum = 0;
  const stack = [];
  while (stack.length > 0 || root) {
    while (root) {
      sum += root.val;
      stack.push(root);
      root = root.left;
    }

    // 出队
    let top = stack.pop();
    if (top.right) {
      root = top.right;
    } else {
      // 是叶子节点
      // 判断是否相等
      if (sum == targetSum) {
        return true;
      }
      sum -= top.val;
    }
  }
  return false;
};

// 上述解答错误,因为每次节点无论有没有右节点都会弹出来,此时的
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // dfs遍历获得所有根节点然后一一比对即可
  // 迭代法
  // 迭代法
  if (!root) {
    return false;
  }
  let sum = root.val;
  const stack = [root];
  const set = new Set();
  set.add(root);
  let isPush;
  while (stack.length > 0) {
    const top = stack[stack.length - 1];
    isPush = false;
    if (top.left && !set.has(top.left)) {
      set.add(top.left);
      stack.push(top.left);
      sum += top.left.val;
      isPush = true;
    } else if (top.right && !set.has(top.right)) {
      set.add(top.right);
      stack.push(top.right);
      sum += top.right.val;
      isPush = true;
    }

    if (!isPush) {
      // 回退不一定是叶子节点,需要判断是否有左右节点
      // 没有push,说明是叶子节点,需要比较然后出栈,删除值
      if (sum == targetSum && !top.left && !top.right) {
        return true;
      }
      sum -= top.val;
      stack.pop();
    }
  }
  return false;
};
