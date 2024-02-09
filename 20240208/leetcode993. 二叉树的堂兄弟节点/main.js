// 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

// 如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

// 我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

// 只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  if (!root) return false;
  let queue = [root, null];
  while (queue.length) {
    const nxt = [];
    const n = queue.length;
    const xIdx = queue.findIndex((v) => v && v.val === x);
    const yIdx = queue.findIndex((v) => v && v.val === y);
    if ((xIdx === -1 && yIdx !== -1) || (xIdx !== -1 && yIdx == -1)) {
      return false;
    } else if (xIdx !== -1 && yIdx !== -1) {
      if (Math.abs(xIdx - yIdx) === 1 && (xIdx + yIdx) % 4 === 1) {
        return false;
      }
      return true;
    }
    for (let i = 0; i < n; i++) {
      if (queue[i]) {
        nxt.push(queue[i].left);
        nxt.push(queue[i].right);
      }
    }
    queue = nxt;
  }
  return false;
};
