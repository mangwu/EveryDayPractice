/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-15 09:46:18                                                  *
 * @LastModifiedDate: 2022-07-15 13:56:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 二进制矩阵中的所有元素不是 0 就是 1 。

// 给你两个四叉树，quadTree1 和 quadTree2。其中 quadTree1 表示一个 n * n 二进制矩阵，而 quadTree2 表示另一个 n * n 二进制矩阵。

// 请你返回一个表示 n * n 二进制矩阵的四叉树，它是 quadTree1 和 quadTree2 所表示的两个二进制矩阵进行 按位逻辑或运算 的结果。

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

// 如果当前网格的值相同（即，全为 0 或者全为 1），将 isLeaf 设为 True ，
// 将 val 设为网格相应的值，并将四个子节点都设为 Null 然后停止。
// 如果当前网格的值不同，将 isLeaf 设为 False， 将 val 设为任意值，然后如下图所示，将当前网格划分为四个子网格。
// 使用适当的子网格递归每个子节点。

// 如果你想了解更多关于四叉树的内容，可以参考 wiki 。

// 四叉树格式：

// 输出为使用层序遍历后四叉树的序列化形式，其中 null 表示路径终止符，其下面不存在节点。

// 它与二叉树的序列化非常相似。唯一的区别是节点以列表形式表示 [isLeaf, val] 。

// 如果 isLeaf 或者 val 的值为 True ，则表示它在列表 [isLeaf, val] 中的值为 1 ；
// 如果 isLeaf 或者 val 的值为 False ，则表示值为 0 。

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
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */
var intersect = function (quadTree1, quadTree2) {
  // 不是叶子节点的值可以是0也可以是1
  // 只用关心
  const ans = new Node(quadTree1.val || quadTree2.val, 1);
  // 节点的值情况
  const dfs = (n1, n2, pre) => {
    if (n1.isLeaf && n2.isLeaf) {
      // 都是叶子节点
      pre.isLeaf = true;
      // 逻辑或
      pre.val = n1.val || n2.val;
      return;
    }
    if (!n1.isLeaf && !n2.isLeaf) {
      // 都不是叶子节点 需要进一步比较
      pre.val = n1.val || n2.val;
      // 判断是否能直接合并成一个节点
      if (
        (n1.topLeft.val || n2.topLeft.val) &&
        (n1.topRight.val || n2.topRight.val) &&
        (n1.bottomLeft.val || n2.bottomLeft.val) &&
        (n1.bottomRight.val || n2.bottomRight.val) &&
        n1.topLeft.isLeaf &&
        n2.topLeft.isLeaf &&
        n1.topRight.isLeaf &&
        n2.topRight.isLeaf &&
        n1.bottomLeft.isLeaf &&
        n2.bottomLeft.isLeaf &&
        n1.bottomRight.isLeaf &&
        n2.bottomRight.isLeaf
      ) {
        pre.isLeaf = true;
        pre.val = 1;
        return;
      }
      pre.isLeaf = false;
      // 不能合并成一个
      pre.topLeft = new Node(0, 1);
      pre.topRight = new Node(0, 1);
      pre.bottomLeft = new Node(0, 1);
      pre.bottomRight = new Node(0, 1);
      dfs(n1.topLeft, n2.topLeft, pre.topLeft);
      dfs(n1.topRight, n2.topRight, pre.topRight);
      dfs(n1.bottomLeft, n2.bottomLeft, pre.bottomLeft);
      dfs(n1.bottomRight, n2.bottomRight, pre.bottomRight);
      return;
    }
    if (n1.isLeaf) {
      // n1是叶子节点, n2不是
      if (n1.val) {
        // n1都是1，可以设置pre位叶子节点
        pre.isLeaf = true;
        pre.val = true;
      } else {
        // n1都是0，复制n2的值
        dfs2(n2, pre);
      }
    } else {
      // n2是叶子节点，n1不是
      if (n2.val) {
        // n2都是1，可以设置pre位叶子节点
        pre.isLeaf = true;
        pre.val = true;
      } else {
        // n2都是0，复制n1的值
        dfs2(n1, pre);
      }
    }
  };
  // 复制
  const dfs2 = (node, pre) => {
    pre.val = node.val;
    pre.isLeaf = node.isLeaf;
    // 不是叶子节点
    if (!node.isLeaf) {
      pre.topLeft = new Node(0, 1);
      pre.topRight = new Node(0, 1);
      pre.bottomLeft = new Node(0, 1);
      pre.bottomRight = new Node(0, 1);
      dfs2(node.topLeft, pre.topLeft);
      dfs2(node.topRight, pre.topRight);
      dfs2(node.bottomLeft, pre.bottomLeft);
      dfs2(node.bottomRight, pre.bottomRight);
    }
  };
  dfs(quadTree1, quadTree2, ans);
  return ans;
};

const node = {
  val: true,
  isLeaf: 1,
  topLeft: {
    val: true,
    isLeaf: true,
    topLeft: null,
    topRight: null,
    bottomLeft: null,
    bottomRight: null,
  },
  topRight: {
    val: true,
    isLeaf: true,
    topLeft: null,
    topRight: null,
    bottomLeft: null,
    bottomRight: null,
  },
  bottomLeft: {
    val: true,
    isLeaf: true,
    topLeft: null,
    topRight: null,
    bottomLeft: null,
    bottomRight: null,
  },
  bottomRight: {
    val: false,
    isLeaf: true,
    topLeft: null,
    topRight: null,
    bottomLeft: null,
    bottomRight: null,
  },
};

// 1 0
// 1 1

// 1 1  1 0
// 1 1  0 1
// 1 1  1 1
// 1 1  1 1

// [[0,1],[1,0],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]
// [[0,1],[0,1],[1,0],[1,1],[1,0],[1,0],[1,0],[1,1],[1,1]]

// 0 0 0 0
// 0 0 1 1
// 1 1 0 0
// 1 1 0 0

// 0 0 0 0
// 1 1 0 0
// 1 1 0 0
// 1 1 0 0

// =>
// 0 0 0 0    
// 1 1 1 1
// 1 1 0 0
// 1 1 0 0

// 0 0 0 0
// 1 1 1 1 
// 1 1 1 1
// 1 1 1 1 

