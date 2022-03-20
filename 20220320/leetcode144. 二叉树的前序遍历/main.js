/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-20 00:27:54                                                  *
 * @LastModifiedDate: 2022-03-20 01:44:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

// 前序遍历，即中左右节点的遍历方式

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
var preorderTraversal = function (root) {
  // 使用迭代可以很容易遍历出来
  let ans = [];
  if (!root) {
    return ans;
  }
  ans.push(root.val);
  ans = ans.concat(preorderTraversal(root.left));
  ans = ans.concat(preorderTraversal(root.right));
  return ans;
};

// 迭代的方式，使用栈保存值

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // 使用迭代可以很容易遍历出来,用栈优先保存左节点，当没有入栈时就回退
  if (!root) {
    return [];
  }
  const set = new Set();
  set.add(root);
  const ans = [root.val];
  const stack = [root];
  let isPush;
  while (stack.length > 0) {
    // 栈顶元素
    const top = stack[stack.length - 1];
    isPush = false;
    if (top.left && !set.has(top.left)) {
      ans.push(top.left.val);
      set.add(top.left);
      stack.push(top.left);
      isPush = true;
    } else if (top.right && !set.has(top.right)) {
      ans.push(top.right.val);
      set.add(top.right);
      stack.push(top.right);
      isPush = true;
    }
    // 没有push就要出栈了
    if (!isPush) {
      stack.pop();
    }
  }
  return ans;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // 使用迭代可以很容易遍历出来,用栈优先保存左节点，当没有入栈时就回退
  // 不使用set
  if (!root) {
    return [];
  }
  const ans = [];
  const stack = [];
  let node = root;
  while (stack.length > 0 || node !== null) {
    while (node !== null) {
      // 遍历到左边底部
      stack.push(node);
      ans.push(node.val);
      node = node.left;
    }
    // 回溯
    const top = stack.pop();
    node = top.right;
  }
  return ans;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // morries遍历
  // 不使用额外空间的跌代 => 左节点为空，val加入答案，遍历右节点
  // 左节点不为空，在当前节点左子树中找到当前节点中序遍历下的前驱节点
  // 将前驱节点的右节点设置为当前节点，如果前驱节点右节点不为空，则将其设为空
  const ans = [];
  if (!root) {
    return null;
  }
  let p1 = root;
  let p2 = null;
  while (p1) {
    p2 = p1.left;
    // 右左节点
    if (p2) {
      // 找到前驱节点（最右边节点，让它指向当前节点）
      while (p2.right && p2.right !== p1) {
        p2 = p2.right;
      }
      if (p2.right == null) {
        // 第一次找到前驱节点
        ans.push(p1.val);
        p2.right = p1;
        p1 = p1.left;
        continue;
      } else {
        // 第二次找到，设置为kong
        p2.right = null;
      }
    } else {
      ans.push(p1.val);
    }
    // 这个时候已经没有左节点可以遍历
    p1 = p1.right;
  }
  return ans;
};
