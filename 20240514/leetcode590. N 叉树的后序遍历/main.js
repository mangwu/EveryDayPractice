// 给定一个 n 叉树的根节点 root ，返回 其节点值的 后序遍历 。

// n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  const ans = [];
  if (!root) return ans;
  const stack = [root];
  const set = new Set();
  while (stack.length) {
    const top = stack[stack.length - 1];
    const { children, val } = top;
    if (!children || set.has(top)) {
      ans.push(val);
      stack.pop();
      continue;
    } else {
      set.add(top);
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i]);
      }
    }
  }
  return ans;
};
