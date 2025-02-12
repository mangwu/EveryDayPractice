/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-12 22:02:48                                                  *
 * @LastModifiedDate: 2025-02-12 23:12:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 定义构造三叉搜索树规则如下：

// 每个节点都存有一个数，当插入一个新的数时，从根节点向下寻找，直到找到一个合适的空节点插入。查找的规则是：

// 如果数小于节点的数减去500，则将数插入节点的左子树 如果数大于节点的数加上500，则将数插入节点的右子树 否则，将数插入节点的中子树 给你一系列数，请按以上规则，按顺序将数插入树中，构建出一棵三叉搜索树，最后输出树的高度。

// 输入描述
// 第一行为一个数 N，表示有 N 个数，1 ≤ N ≤ 10000 第二行为 N 个空格分隔的整数，每个数的范围为[1,10000]

// 输出描述
// 输出树的高度（根节点的高度为1）

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.mid = null;
  }
}

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  const arr = inputs[1].split(" ").map((v) => parseInt(v));
  const root = new Node(arr[0]);
  const insert = (node, val) => {
    const curVal = node.val;
    if (val < curVal - 500) {
      if (node.left) {
        insert(node.left, val);
      } else node.left = new Node(val);
    } else if (val > curVal + 500) {
      if (node.right) {
        insert(node.right, val);
      } else node.right = new Node(val);
    } else {
      if (node.mid) {
        insert(node.mid, val);
      } else node.mid = new Node(val);
    }
  };
  for (let i = 1; i < n; i++) {
    insert(root, arr[i]);
  }
  const dfs = (node) => {
    if (!node) return 0;
    return 1 + Math.max(dfs(node.left), dfs(node.mid), dfs(node.right));
  };
  console.log(dfs(root));
}
// solution();

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
  return maxHeight;
}
async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  const arr = inputs[1].split(" ").map((v) => parseInt(v));
  console.log(triTreeHeight(arr));
}
solution();
const q1 = (list) => {
  if (list.length === 0) return 0;
  function TreeNode(val, left, right, mid) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.mid = mid === undefined ? null : this.mid;
  }
  const root = new TreeNode(list[0]);
  let ret = 0;
  for (let i = 1; i < list.length; i++) {
    const cur = list[i];
    const traverse = (node) => {
      if (node.left === null) {
        if (cur < node.val - 500) {
          node.left = new TreeNode(list[i]);
          return 1;
        }
      }
      if (node.mid === null) {
        if (cur >= node.val - 500 && cur <= node.val + 500) {
          node.mid = new TreeNode(list[i]);
          return 1;
        }
      }
      if (node.right === null) {
        if (cur > node.val + 500) {
          node.right = new TreeNode(list[i]);
          return 1;
        }
      }
      if (node.left) {
        const nodeLevel = traverse(node.left);
        if (nodeLevel) return nodeLevel + 1;
      }
      if (node.mid) {
        const nodeLevel = traverse(node.mid);
        if (nodeLevel) return nodeLevel + 1;
      }
      if (node.right) {
        const nodeLevel = traverse(node.right);
        if (nodeLevel) return nodeLevel + 1;
      }
      return 1;
    };
    let tmp = 0;
    tmp = traverse(root);
    ret = Math.max(ret, tmp);
  }

  return ret + 1;
};

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  const arr = inputs[1].split(" ").map((v) => parseInt(v));
  console.log(q1(arr));
}
solution();
