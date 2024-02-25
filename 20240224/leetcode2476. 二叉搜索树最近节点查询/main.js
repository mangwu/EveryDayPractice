// 给你一个 二叉搜索树 的根节点 root ，和一个由正整数组成、长度为 n 的数组 queries 。

// 请你找出一个长度为 n 的 二维 答案数组 answer ，其中 answer[i] = [mini, maxi] ：

// mini 是树中小于等于 queries[i] 的 最大值 。如果不存在这样的值，则使用 -1 代替。
// maxi 是树中大于等于 queries[i] 的 最小值 。如果不存在这样的值，则使用 -1 代替。
// 返回数组 answer 。

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
 * @param {number[]} queries
 * @return {number[][]}
 */
var closestNodes = function (root, queries) {
  const vals = [];
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    vals.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  vals.sort((a, b) => a - b);
  const set = new Set(vals);
  const ans = [];
  for (const query of queries) {
    const res = [-1, -1];
    if (set.has(query)) {
      res[0] = query;
      res[1] = query;
    } else {
      // 小于等于query的最大值
      let left = 0;
      let right = vals.length - 1;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (vals[mid] > query) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
      res[0] = right === -1 ? right : vals[right];
      // 大于等于query的最小值
      left = 0;
      right = vals.length - 1;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (vals[mid] < query) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      res[1] = left !== vals.length ? vals[left] : -1;
    }
    ans.push(res);
  }
  return ans;
};
