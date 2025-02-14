/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 19:57:27                                                  *
 * @LastModifiedDate: 2025-02-14 20:39:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 生成求和二叉树
// 题目
// 请由二叉树生成一个新的二叉树，它满足其树中的每个节点将包含原始树中的左子树和右子树的和。左子树表示该节点左侧叶子节点为根节点的一颗新树；右子树表示该节点右侧叶子节点为根节点的一颗新树。

// 输入描述

// 2行整数，第1行表示二叉树的中序遍历，第2行表示二叉树的前序遍历，以空格分割 例如：

// 7 -2 6 6 9 6 7 -2 9 6

// 输出描述

// 1行整数，表示求和树的中序遍历，以空格分割 例如： -2 0 20 0 6

// 7 -2 6 6 9
// 6 7 -2 9 6

// 6
//

// -2 0 20 0 6

const rl = require("readline").createInterface({
  input: process.stdin,
});
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const inorder = inputs[0].split(" ").map((v) => parseInt(v));
  const preorder = inputs[1].split(" ").map((v) => parseInt(v));
  //Definition for a binary tree node.
  function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  const buildTree = (preLeft, preRight, inLeft, inRight) => {
    if (preLeft > preRight) return null;
    if (preLeft === preRight) return new TreeNode(preorder[preLeft]);
    // 前序遍历的根节点是数组中的第一个节点
    const root_val = preorder[preLeft];
    const root = new TreeNode(root_val);
    // 找到中序遍历中，root的位置，因为节点可以有相同数字，需要进行判断
    let rootIdxes = [];
    for (let i = inLeft; i <= inRight; i++) {
      if (inorder[i] === root_val) rootIdxes.push(i);
    }
    // 找出可以成为中序遍历中的新root的节点索引
    let rootIdx = 0;
    let leftLen = 0; // 左之树的长度
    for (const idx of rootIdxes) {
      const num = idx - inLeft; // 左子数节点个数
      // 记录中序遍历中左子数的个数和数字值
      const inLeftArr = inorder.slice(inLeft, idx).sort((a, b) => a - b);
      // 记录前序遍历中左子数的个数和数字值
      const preLeftArr = preorder
        .slice(preLeft + 1, preLeft + 1 + num)
        .sort((a, b) => a - b);
      if (inLeftArr.toString() === preLeftArr.toString()) {
        rootIdx = idx;
        leftLen = num;
        break;
      }
    }
    // 找到之后就可以继续递归了
    root.left = buildTree(preLeft + 1, preLeft + leftLen, inLeft, rootIdx - 1);
    root.right = buildTree(
      preLeft + leftLen + 1,
      preRight,
      rootIdx + 1,
      inRight
    );
    return root;
  };
  const tree = buildTree(0, preorder.length - 1, 0, inorder.length - 1);
  const dfsSum = (node) => {
    // 更新为二叉求和树
    if (!node) return 0;
    const val = node.val;
    const leftVal = dfsSum(node.left);
    const rightVal = dfsSum(node.right);
    node.val = leftVal + rightVal;
    return val + leftVal + rightVal;
  };
  dfsSum(tree);
  const res = [];
  const dfsInorder = (node) => {
    if (!node) return;
    dfsInorder(node.left);
    res.push(node.val);
    dfsInorder(node.right);
  };
  dfsInorder(tree);
  console.log(res.join(" "));
}
solution();
