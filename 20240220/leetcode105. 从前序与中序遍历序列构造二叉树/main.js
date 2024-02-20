// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 根节点preorder[0]
  const n = preorder.length;
  const hash = new Map();
  for (let i = 0; i < n; i++) hash.set(inorder[i], i);
  const dfs = (left, right, l, r) => {
    if (left > right) return null;
    if (left === right) return new TreeNode(preorder[left]);
    const middle = hash.get(preorder[left]);
    const node = new TreeNode(preorder[left]);
    node.left = dfs(left + 1, left + middle - l, l, middle - 1);
    node.right = dfs(left + middle - l + 1, right, middle + 1, r);
    return node;
  };
  return dfs(0, n - 1, 0, n - 1);
};

class Stack {
  #items = [];
  size() {
    return this.#items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  push(val) {
    this.#items.push(val);
  }
  pop() {
    if (this.isEmpty()) return undefined;
    return this.#items.pop();
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.#items[this.size() - 1];
  }
  itemsOf(idx) {
    if (idx < 0 || idx >= this.size()) return undefined;
    return this.#items[idx];
  }
}
// 迭代法
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 根节点preorder[0]
  const n = preorder.length;
  if (n <= 0) return null;
  const root = new TreeNode(preorder[0]);
  // 栈 stack 来维护「当前节点的所有还没有考虑过右儿子的祖先节点」
  const stack = new Stack();
  stack.push(root);
  let inorderIdx = 0;
  for (let i = 1; i < n; i++) {
    let top = stack.peek();
    if (top.val !== inorder[inorderIdx]) {
      // 当前栈顶元素有左节点preorder[i]
      top.left = new TreeNode(preorder[i]);
      stack.push(top.left);
    } else {
      // 找到祖先节点的一个右儿子
      while (!stack.isEmpty() && stack.peek().val === inorder[inorderIdx]) {
        top = stack.pop();
        inorderIdx++;
      }
      // 确定右儿子的祖先节点
      top.right = new TreeNode(preorder[i]);
      stack.push(top.right);
    }
  }
  return root;
};
