// 小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。

// 除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。

// 给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。

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
 * @return {number}
 */
var rob = function (root) {
  // flag表示父节点是否被选取
  const dfs = (node, flag) => {
    if (!node) return 0;
    let curRes = 0;
    if (!flag) {
      // 选取当前节点
      curRes = Math.max(
        curRes,
        dfs(node.left, true) + dfs(node.right, true) + node.val
      );
    }
    // 不选当前节点
    curRes = Math.max(curRes, dfs(node.left, false) + dfs(node.right, false));
    return curRes;
  };
  return dfs(root, false);
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
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  const dfs = (node) => {
    if (!node) return [0, 0];
    // dfs返回选择和不选择当前节点的最大值
    const l = dfs(node.left);
    const r = dfs(node.right);
    // 选择当前节点
    const selected = node.val + l[1] + r[1]; // 左右子节点只能不选
    // 不选择当前节点
    const notSelected = Math.max(l[0], l[1]) + Math.max(r[0], r[1]);
    return [selected, notSelected];
  };
  return Math.max.apply(null, dfs(root));
};
