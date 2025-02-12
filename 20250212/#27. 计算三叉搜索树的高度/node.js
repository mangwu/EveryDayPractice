/*
 * @Author: mangwu                                                             *
 * @File: node.js                                                              *
 * @Date: 2025-02-12 22:57:21                                                  *
 * @LastModifiedDate: 2025-02-12 22:58:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.mid = null;
    this.right = null;
    this.height = 1;
  }
}
function triTreeHeight(nums) {
  const n = nums.length;
  const root = new Node(nums[0]); // 根节点
  let maxHeight = 1;
  const insertNode = (node, val) => {
    const { left, right, mid, height } = node;
    if (val < node.val - 500) {
      if (left) insertNode(left, val);
      else {
        node.left = new Node(val);
        node.left.height = height + 1;
        maxHeight = Math.max(maxHeight, node.left.height);
      }
    } else if (val > node.val + 500) {
      if (right) insertNode(right, val);
      else {
        node.right = new Node(val);
        node.right.height = height + 1;
        maxHeight = Math.max(maxHeight, node.right.height);
      }
    } else {
      if (mid) insertNode(mid, val);
      else {
        node.mid = new Node(val);
        node.mid.height = height + 1;
        maxHeight = Math.max(maxHeight, node.mid.height);
      }
    }
  };
  for (let i = 1; i < n; i++) {
    insertNode(root, nums[i]);
  }
  console.log(root);
  return maxHeight;
}
console.log(triTreeHeight([5, 2, 3, 5, 2, 2, 55, 900, 10000, 255, 10000, 10000]));
