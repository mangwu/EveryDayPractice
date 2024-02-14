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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const ans = [];
  if (!root) return ans;
  let queue = [root];
  while (queue.length) {
    const nxt = [];
    const cur = [];
    for (const q of queue) {
      cur.push(q.val);
      if (q.left) nxt.push(q.left);
      if (q.right) nxt.push(q.right);
    }
    ans.push(cur);
    queue = nxt;
  }
  return ans;
};
