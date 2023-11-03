// 给定一个二叉树：

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL 。

// 初始状态下，所有 next 指针都被设置为 NULL 。

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;
  // bfs
  let queue = [root];
  while (queue.length) {
    const nxt = [];
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const curNode = queue[i];
      curNode.next = queue[i + 1] ? queue[i + 1] : null;
      if (curNode.left) nxt.push(curNode.left);
      if (curNode.right) nxt.push(curNode.right);
    }
    queue = nxt;
  }
  return root;
};
