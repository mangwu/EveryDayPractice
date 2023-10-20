/*
 * @Author: mangwu                                                             *
 * @File: c.js                                                                 *
 * @Date: 2023-10-20 09:24:24                                                  *
 * @LastModifiedDate: 2023-10-20 09:29:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 小红拿到了一棵二叉树。她希望删除尽可能少的节点，使得该二叉树变成一棵满二叉树。你能编写一个函数返回需要删除的节点最小数量吗？
// 一个二叉树，如果每一个层的节点数都达到最大值，则这个二叉树就是满二叉树。

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
function numOfNode(root) {
  // write code here
  // 计算出节点的总数量和满足满二叉树的最后一层
  let queue = [root];
  let total = 0;
  let cur = 0;
  let flag = true;
  while (queue.length) {
    const nxt = [];
    total += queue.length;
    if (flag) {
      cur += queue.length;
    }
    for (const q of queue) {
      if (q.left) {
        nxt.push(q.left);
      } else flag = false;
      if (q.right) {
        nxt.push(q.right);
      } else flag = false;
    }
    queue = nxt;
  }
  return total - cur;
}
module.exports = {
  numOfNode: numOfNode,
};
