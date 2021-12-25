/**
 * @description 奇偶树
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-25 18:36:38
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

//  如果一棵二叉树满足下述几个条件，则可以称为 奇偶树 ：

//  二叉树根节点所在层下标为 0 ，根的子节点所在层下标为 1 ，根的孙节点所在层下标为 2 ，依此类推。
//  偶数下标 层上的所有节点的值都是 奇 整数，从左到右按顺序 严格递增
//  奇数下标 层上的所有节点的值都是 偶 整数，从左到右按顺序 严格递减
//  给你二叉树的根节点，如果二叉树为 奇偶树 ，则返回 true ，否则返回 false 。

/**
 * @class TreeNode 树结点
 * @param {Number} val
 * @param {TreeNode} left
 * @param {TreeNode} right 左结点
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
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
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  // 1. 层序遍历二叉树，获得每一层的结点数据，查看是否符合条件
  // 2. 记录一个层数值判断是否第几层
  // 3. 不同的层用不同的方法判断是否符合条件
  // 4. 奇数层要是偶数且严格递增
  // 5. 偶数层要是偶数且严格递减
  // 声明层数
  let i = 0;
  // 声明结点队列
  const queue = [root];
  while (queue.length > 0) {
    // 每一层队列长度
    const len = queue.length;
    // 保存结点大小 偶数记为-1,奇数极为最大数
    let val = i % 2 === 0 ? -1 : Number.MAX_VALUE;
    // 每一层出队
    for (let j = 0; j < len; j++) {
      // 依次出队列
      const node = queue.shift();
      // 偶数层，应该是奇数
      if (i % 2 === 0) {
        // 如果不是奇数或者不是严格递增
        if (node.val % 2 === 0 || node.val <= val) return false;
        // 记录本次值
        val = node.val;
        // 子结点入队
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      } else {
        // 如果不是偶数或者不是严格递减
        if (node.val % 2 === 1 || node.val >= val) return false;
        // 记录本次值
        val = node.val;
        // 子结点入队
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }
    i++;
  }
  // 遍历结束
  return true;
};
