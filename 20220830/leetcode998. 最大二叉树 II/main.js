/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-30 08:50:35                                                  *
 * @LastModifiedDate: 2022-08-30 09:17:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 最大树 定义：一棵树，并满足：其中每个节点的值都大于其子树中的任何其他值。

// 给你最大树的根节点 root 和一个整数 val 。

// 就像 之前的问题 那样，给定的树是利用 Construct(a) 例程从列表 a（root = Construct(a)）递归地构建的：

// 如果 a 为空，返回 null 。
// 否则，令 a[i] 作为 a 的最大元素。创建一个值为 a[i] 的根节点 root 。
// root 的左子树将被构建为 Construct([a[0], a[1], ..., a[i - 1]]) 。
// root 的右子树将被构建为 Construct([a[i + 1], a[i + 2], ..., a[a.length - 1]]) 。
// 返回 root 。
// 请注意，题目没有直接给出 a ，只是给出一个根节点 root = Construct(a) 。

// 假设 b 是 a 的副本，并在末尾附加值 val。题目数据保证 b 中的值互不相同。

// 返回 Construct(b) 。
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
 * @return {TreeNode}
 */
var insertIntoMaxTree = function (root, val) {
  // 实际上就是创建一个val节点，插入到root中，使得root仍然是最大子树
  // 因为val在root表示的末尾，所以val值一定在子树的右边，并且它的子树一定在左边
  const node = new TreeNode(val);
  if (val > root.val) {
    // 因为val在末尾，所以val的子树一定在左边，右节点一定为null
    node.left = root;
    return node;
  }
  let pre = root;
  let cur = root.right;
  while (cur && val < cur.val) {
    pre = cur;
    cur = cur.right;
  }
  // 此时cur.val < val或者cur是null
  pre.right = node;
  node.left = cur;
  return root;
};
