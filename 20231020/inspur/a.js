/*
 * @Author: mangwu                                                             *
 * @File: a.js                                                                 *
 * @Date: 2023-10-20 09:00:34                                                  *
 * @LastModifiedDate: 2023-10-20 09:13:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 小红拿到了一个二叉树，每个节点有一个权值。
// 小红定义，每一层的权值为该层所有节点的权值之和。
// 小红有一次交换某节点和它父亲节点的机会。她想知道，至多交换一次之后，最大权值的那一层权值是多少？
// 定义：同一深度的所有节点为同一层。
// 数据范围：
// 二叉树非空，节点数不超过
// 1
// 0
// 5
// 10
// 5
//  ，节点的权值是不超过
// 1
// 0
// 4
// 10
// 4
//  的正整数。

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
function maxValue(root) {
  // write code here
  // 先计算出每层的权值
  let queue = [root];
  const values = [];
  let ans = 0;
  while (queue.length) {
    const nxt = [];
    let curVal = 0;
    for (const q of queue) {
      curVal += q.val;
      if (q.left) {
        nxt.push(q.left);
      }
      if (q.right) {
        nxt.push(q.right);
      }
    }
    values.push(curVal);
    ans = Math.max(ans, curVal);
    queue = nxt;
  }
  // 在对每个节点进行可能的交互，比较获取最大值
  const dfs = (node, floor) => {
    if (!node) return;
    if (node.left) {
      // 与左子节点交换
      let curFloorVal = values[floor] - node.val + node.left.val;
      let nxtFloorVal = values[floor + 1] + node.val - node.left.val;
      ans = Math.max(ans, curFloorVal, nxtFloorVal);
      dfs(node.left, floor + 1);
    }
    if (node.right) {
      // 与右子节点交换
      let curFloorVal = values[floor] - node.val + node.right.val;
      let nxtFloorVal = values[floor + 1] + node.val - node.right.val;
      ans = Math.max(ans, curFloorVal, nxtFloorVal);
      dfs(node.right, floor + 1);
    }
  };
  dfs(root, 0);
  return ans;
}
module.exports = {
  maxValue: maxValue,
};
