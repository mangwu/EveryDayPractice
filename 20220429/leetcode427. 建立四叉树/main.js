/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-29 09:10:58                                                  *
 * @LastModifiedDate: 2022-04-29 10:31:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个 n * n 矩阵 grid ，矩阵由若干 0 和 1 组成。请你用四叉树表示该矩阵 grid 。

// 你需要返回能表示矩阵的 四叉树 的根结点。

// 注意，当 isLeaf 为 False 时，你可以把 True 或者 False 赋值给节点，两种值都会被判题机制 接受 。

// 四叉树数据结构中，每个内部节点只有四个子节点。此外，每个节点都有两个属性：

// val：储存叶子结点所代表的区域的值。1 对应 True，0 对应 False；
// isLeaf: 当这个节点是一个叶子结点时为 True，如果它有 4 个子节点则为 False 。
// class Node {
//     public boolean val;
//     public boolean isLeaf;
//     public Node topLeft;
//     public Node topRight;
//     public Node bottomLeft;
//     public Node bottomRight;
// }
// 我们可以按以下步骤为二维区域构建四叉树：

// 如果当前网格的值相同（即，全为 0 或者全为 1），将 isLeaf 设为 True ，将 val 设为网格相应的值，并将四个子节点都设为 Null 然后停止。
// 如果当前网格的值不同，将 isLeaf 设为 False， 将 val 设为任意值，然后如下图所示，将当前网格划分为四个子网格。
// 使用适当的子网格递归每个子节点。

// 如果你想了解更多关于四叉树的内容，可以参考 wiki 。

// 四叉树格式：

// 输出为使用层序遍历后四叉树的序列化形式，其中 null 表示路径终止符，其下面不存在节点。

// 它与二叉树的序列化非常相似。唯一的区别是节点以列表形式表示 [isLeaf, val] 。

// 如果 isLeaf 或者 val 的值为 True ，则表示它在列表 [isLeaf, val] 中的值为 1 ；如果 isLeaf 或者 val 的值为 False ，则表示值为 0 。

/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
  // n == grid.length == grid[i].length
  // n == 2^x 其中 0 <= x <= 6
  const n = grid.length;
  const dfs = (grid, start, end, m) => {
    if (m == 1) {
      return new Node(grid[start[0]][start[1]], true);
    }
    if (checkSame(grid, start, end)) {
      return new Node(grid[start[0]][start[1]], true);
    }
    const half = m / 2;
    // 分为四块
    const res = new Node(1, false);
    res.topLeft = dfs(
      grid,
      [start[0], start[1]],
      [start[0] + half - 1, start[1] + half - 1],
      half
    );
    res.topRight = dfs(
      grid,
      [start[0], start[1] + half],
      [start[0] + half - 1, start[1] + m - 1],
      half
    );
    res.bottomLeft = dfs(
      grid,
      [start[0] + half, start[1]],
      [start[0] + m - 1, start[1] + half - 1],
      half
    );
    res.bottomRight = dfs(
      grid,
      [start[0] + half, start[1] + half],
      [start[0] + m - 1, start[1] + m - 1],
      half
    );
    return res;
  };
  return dfs(grid, [0, 0], [n - 1, n - 1], n);
};
const checkSame = (
  grid,
  start = [0, 0],
  end = [grid.length - 1, grid.length - 1]
) => {
  let first = grid[start[0]][start[1]];
  for (let i = start[0]; i <= end[0]; i++) {
    for (let j = start[1]; j <= end[1]; j++) {
      if (grid[i][j] !== first) {
        return false;
      }
    }
  }
  return true;
};

[
  [1, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 1, 1],
  [0, 0, 1, 1],
];
