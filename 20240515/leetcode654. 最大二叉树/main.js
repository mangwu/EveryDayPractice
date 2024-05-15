// 给定一个不重复的整数数组 nums 。 最大二叉树 可以用下面的算法从 nums 递归地构建:

// 创建一个根节点，其值为 nums 中的最大值。
// 递归地在最大值 左边 的 子数组前缀上 构建左子树。
// 递归地在最大值 右边 的 子数组后缀上 构建右子树。
// 返回 nums 构建的 最大二叉树 。

const { TreeNode } = require("../../publicFunc/TreeNode/TreeNode");

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const n = nums.length;
  const dfs = (start, end) => {
    if (start > end) return null;
    if (start === end) return new TreeNode(nums[start]);
    let maxIdx = start;
    let maxNum = nums[start];
    for (let i = start + 1; i <= end; i++) {
      if (nums[i] > maxNum) {
        maxIdx = i;
        maxNum = nums[i];
      }
    }
    const res = new TreeNode(maxNum);
    res.left = dfs(start, maxIdx - 1);
    res.right = dfs(maxIdx + 1, end);
    return res;
  };
  return dfs(0, n - 1);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const n = nums.length;
  // 假设一个nums[i]是根节点，那么左节点的索引在[0,i-1]中，右节点的索引在[i+1,n-1]中
  // 假设左节点是nums[j]，右节点是nums[k]，
  // 那么nums[j]就是[0,i-1]中最大的元素，它的右边界就是nums[i]，即下一个更大的元素
  // 那么nums[k]就是[i+1,n-1]中最大的元素，它的左边界是nums[i]，即上一个更大的元素
  // 节点找到左右边界，相当于找到了父节点，
  // 其中左边界表示父节点的右子节点是当前节点，其中右边界表示父节点的左子节点是当前节点
  // 如果当前节点nums[m]既有右边界，又有左边界，应该比较两个边界的大小，使用小的哪个
  // 单调栈
  const stack = [];
  const nextGreater = new Array(n).fill(-1);
  const preGreater = new Array(n).fill(-1);
  const trees = [];
  for (let i = 0; i < n; i++) {
    trees.push(new TreeNode(nums[i]));
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      nextGreater[stack.pop()] = i;
    }
    if (stack.length) preGreater[i] = stack[stack.length - 1];
    stack.push(i);
  }
  let res = null;
  for (let i = 0; i < n; i++) {
    if (nextGreater[i] === -1 && preGreater[i] === -1) {
      res = trees[i];
    } else if (
      nextGreater[i] === -1 ||
      (preGreater[i] !== -1 && nums[preGreater[i]] < nums[nextGreater[i]])
    ) {
      trees[preGreater[i]].right = trees[i];
    } else {
      trees[nextGreater[i]].left = trees[i];
    }
  }
  return res;
};

//

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const n = nums.length;
  // 单调栈
  const stack = []; // 递减栈
  const trees = [];
  for (let i = 0; i < n; i++) {
    trees.push(new TreeNode(nums[i]));
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      // stack.pop()的右边界是nums[i]
      trees[i].left = trees[stack.pop()];
    }
    if (stack.length) {
      // nums[i]的左边界是stack.top
      trees[stack[stack.length - 1]].right = trees[i];
    }
    stack.push(i);
  }

  return trees[stack[0]];
};
