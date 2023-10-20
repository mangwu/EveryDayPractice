/*
 * @Author: mangwu                                                             *
 * @File: d.js                                                                 *
 * @Date: 2023-10-20 09:31:15                                                  *
 * @LastModifiedDate: 2023-10-20 09:33:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 小红拿到了一棵二叉树。小红定义，如果一个节点既有左孩子又有右孩子，那么这三个节点被称为“一家人”。
// 小红想知道，在这个二叉树中，一共能找到多少“一家人”？（每个节点可以重复计算）

/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param root TreeNode类
 * @return int整型
 */
function maxSum(root) {
  // write code here
  // 深度优先搜索即可
  let ans = 0;
  const dfs = (node) => {
    if (!node) return;
    if (node.left && node.right) {
      ans++;
    }
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return ans;
}
module.exports = {
  maxSum: maxSum,
};
