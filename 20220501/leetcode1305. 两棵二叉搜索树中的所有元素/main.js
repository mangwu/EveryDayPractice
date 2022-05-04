/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-01 21:43:56                                                  *
 * @LastModifiedDate: 2022-05-02 03:42:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你 root1 和 root2 这两棵二叉搜索树。请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  const ans = new PQ();
  const dfs = (root) => {
    if (root == null) {
      return;
    }
    ans.push(root.val);
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root1);
  dfs(root2);
  return ans.data;
};

class PQ {
  constructor(compare = (a, b) => a - b > 0) {
    this.data = [];
    this.size = 0;
    this.compare = compare;
  }
  // 队列头
  header() {
    if (this.size > 0) {
      return this.data[0];
    }
  }
  // 队列尾部
  tailer() {
    if (this.size > 0) {
      return this.data[this.size - 1];
    }
  }
  // 出队
  poll() {
    if (this.size > 0) {
      this.size--;
      return this.data.shift();
    }
  }
  // 入队
  push(val) {
    if (this.size == 0) {
      this.data.push(val);
    } else {
      this.binaryInsert(val);
    }
    this.size++;
  }
  // 二分查找入队
  binaryInsert(val) {
    let left = 0;
    let right = this.size;
    // [0, len)
    while (left < right) {
      let mid = (left + right) >> 1;
      if (this.compare(this.data[mid], val)) {
        // 中点值比val大，说明在左边
        // [left, mid)
        right = mid;
      } else {
        // [mid + 1, right), 中点值比val小
        left = mid + 1;
      }
    }
    this.data.splice(left, 0, val);
  }
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  const ans = [];
  const nums1 = [];
  const nums2 = [];
  const dfs = (root, nums) => {
    if (root == null) {
      return;
    }
    dfs(root.left, nums);
    nums.push(root.val);
    dfs(root.right, nums);
  };
  dfs(root1, nums1);
  dfs(root2, nums2);
  let idx1 = 0;
  let idx2 = 0;
  while (idx1 < nums1.length || idx2 < nums2.length) {
    if (idx1 == nums1.length) {
      ans.push(nums2[idx2]);
      idx2++;
      continue;
    }
    if (idx2 == nums2.length) {
      ans.push(nums1[idx1]);
      idx1++;
      continue;
    }
    if (nums1[idx1] < nums2[idx2]) {
      ans.push(nums1[idx1]);
      idx1++;
    } else {
      ans.push(nums2[idx2]);
      idx2++;
    }
  }
  return ans;
};
