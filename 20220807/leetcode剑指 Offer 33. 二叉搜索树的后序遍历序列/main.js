/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-07 19:53:09                                                  *
 * @LastModifiedDate: 2022-08-07 23:19:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。
// 假设输入的数组的任意两个数字都互不相同。

//

// 参考以下这颗二叉搜索树：

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  // 左右中
  const dfs = (i, j) => {
    if (i >= j) {
      return true;
    }
    // 左子树的节点应该小于父节点，右子树的节点应该大于父节点
    // 最后节点是父节点（中）
    let p = i;
    // 先是左边的子树
    while (postorder[p] < postorder[j]) {
      p++;
    }
    // m是右边子树的开始
    let m = p;
    while (postorder[p] > postorder[j]) {
      p++;
    }
    // 包装左边子树和右边子树都被遍历完，即（一部分大于postorder[i],剩下部分都小于postorder[i]）
    return p == j && dfs(i, m - 1) && dfs(m, j - 1);
  };
  return dfs(0, postorder.length - 1);
};

// 1 2 3 5 6
// 1 6 3 2 5
