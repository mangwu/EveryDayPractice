/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-16 16:01:35                                                  *
 * @LastModifiedDate: 2024-01-16 16:02:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 编写一个 countLeafNodes 函数，该函数接收一个节点 node 作为输入，并返回给定树中叶子节点的数目。
// 如果一个节点没有子节点，那么称它为叶子节点。你可以假设给定的节点树至少有一个节点。

/**
 * @param {Node} node
 * @return {number}
 */
export const countLeafNodes = (node) => {
  if (node.childNodes.length === 0) return 1;
  let res = 0;
  for (const item of node.childNodes) {
    res += countLeafNodes(item);
  }
  return res;
};
