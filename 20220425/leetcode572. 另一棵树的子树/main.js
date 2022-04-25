/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-25 13:55:30                                                  *
 * @LastModifiedDate: 2022-04-25 14:07:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两棵二叉树 root 和 subRoot 。检验 root 中是否包含和 subRoot 具有相同结构和节点值的子树。
// 如果存在，返回 true ；否则，返回 false 。

// 二叉树 tree 的一棵子树包括 tree 的某个节点和这个节点的所有后代节点。
// tree 也可以看做它自身的一棵子树。
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const checkSame = (tree1, tree2) => {
    let queue1 = [tree1];
    let queue2 = [tree2];
    while (queue1.length > 0) {
      let nxt1 = [];
      let nxt2 = [];
      for (let i = 0; i < queue1.length; i++) {
        if (queue1[i].val !== queue2[i].val) {
          return false;
        }
        if (queue1[i].left && queue2[i].left) {
          nxt1.push(queue1[i].left);
          nxt2.push(queue2[i].left);
        } else if (!queue1[i].left && queue2[i].left) {
          return false;
        } else if (queue1[i].left && !queue2[i].left) {
          return false;
        }
        if (queue1[i].right && queue2[i].right) {
          nxt1.push(queue1[i].right);
          nxt2.push(queue2[i].right);
        } else if (!queue1[i].right && queue2[i].right) {
          return false;
        } else if (queue1[i].right && !queue2[i].right) {
          return false;
        }
      }
      queue1 = nxt1;
      queue2 = nxt2;
    }
    return true;
  };
  const dfs = (cur) => {
    let ans = false;
    if (cur.val == subRoot.val) {
      ans = ans || checkSame(cur, subRoot);
    }
    if (cur.left) {
      ans = ans || dfs(cur.left);
    }
    if (cur.right) {
      ans = ans || dfs(cur.right);
    }
    return ans;
  };
  return dfs(root);
};
