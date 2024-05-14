// 给定一个 n 叉树的根节点  root ，返回 其节点值的 前序遍历 。

// n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const res = [];
  const dfs = (node) => {
    if (!node) return;
    res.push(node.val);
    for (const child of node.children) {
      dfs(child);
    }
  };
  dfs(root);
  return res;
};

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const res = [];
  if (!root) return res;
  const stack = [root];
  // 因为前序遍历需要从左到右遍历完节点的子节点，
  // 根据栈的特性，在迭代时从右往左入栈，在出栈时能达到先遍历左边节点的目的
  while (stack.length) {
    const top = stack.pop();
    const { children, val } = top;
    res.push(val);
    if (children)
      for (let i = children.length - 1; i >= 0; i--) stack.push(children[i]);
  }
  return res;
};
