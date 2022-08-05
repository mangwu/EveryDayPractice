/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-05 09:14:00                                                  *
 * @LastModifiedDate: 2022-08-05 14:16:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个二叉树的根 root 和两个整数 val 和 depth ，在给定的深度 depth 处添加一个值为 val 的节点行。

// 注意，根节点 root 位于深度 1 。

// 加法规则如下:

// 给定整数 depth，对于深度为 depth - 1 的每个非空树节点 cur ，
// 创建两个值为 val 的树节点作为 cur 的左子树根和右子树根。
// cur 原来的左子树应该是新的左子树根的左子树。
// cur 原来的右子树应该是新的右子树根的右子树。
// 如果 depth == 1 意味着 depth - 1 根本没有深度，那么创建一个树节点，值 val 作为整个原始树的新根，
// 而原始树就是新根的左子树

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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  if (depth == 1) {
    const newNode = new TreeNode(val, root);
    return newNode;
  }
  // bfs
  let queue = [root];
  depth -= 2;
  while (queue.length) {
    const nxt = [];
    if (depth == 0) {
      // 开始插入
      for (const q of queue) {
        let left = q.left;
        q.left = new TreeNode(val, left);
        let right = q.right;
        q.right = new TreeNode(val, null, right);
      }
      break;
    }
    for (const q of queue) {
      if (q.left) {
        nxt.push(q.left);
      }
      if (q.right) {
        nxt.push(q.right);
      }
    }
    depth--;
    queue = nxt;
  }
  return root;
};
