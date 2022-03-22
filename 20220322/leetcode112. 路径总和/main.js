/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-22 15:09:58                                                  *
 * @LastModifiedDate: 2022-03-22 21:28:43                                      *
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

// 上述解答错误,因为每次都会
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

// 使用层序遍历

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // 层序遍历需要保存没个元素到根节点的路径和
  if (!root) {
    return false;
  }
  let sum = root.val;
  let queue = [root];
  const sumSet = [sum];
  while (queue.length > 0) {
    const temp = sumSet.shift();
    const top = queue.shift();
    // 判断是否时叶子节点
    if (!top.left && !top.right) {
      if (temp == targetSum) {
        return true;
      }
      // 可以不用push新节点
      continue;
    }
    // 因为入队的节点和和值都是同一时间入队的，所以在数组中的索引是一一对应的
    if (top.left) {
      queue.push(top.left);
      sumSet.push(temp + top.left.val);
    }
    if (top.right) {
      queue.push(top.right);
      sumSet.push(temp + top.right.val);
    }
  }
  return false;
};

// 递归
// 要求路径和，可以先求出当前节点的子节点到叶子节点的距离，路径和满足sum - val
// 如果当前节点值等于sum(减过之前路径的节点值的)且为叶子节点，就存在这条路径
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }
  // 是否是叶子节点
  if (!root.left && !root.right) {
    //  比较值和当前值
    return root.val == targetSum;
  }
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};
