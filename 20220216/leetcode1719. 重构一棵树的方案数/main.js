/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-16 09:03:51                                                  *
 * @LastModifiedDate: 2022-02-16 11:04:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组 pairs ，其中 pairs[i] = [xi, yi] ，并且满足：

// pairs 中没有重复元素
// xi < yi
// 令 ways 为满足下面条件的有根树的方案数：

// 树所包含的所有节点值都在 pairs 中。
// 一个数对 [xi, yi] 出现在 pairs 中 当且仅当 xi 是 yi 的祖先或者 yi 是 xi 的祖先。
// 注意：构造出来的树不一定是二叉树。
// 两棵树被视为不同的方案当存在至s少一个节点在两棵树中有不同的父节点。

// 请你返回：

// 如果 ways == 0 ，返回 0 。
// 如果 ways == 1 ，返回 1 。
// 如果 ways > 1 ，返回 2 。
// 一棵 有根树 指的是只有一个根节点的树，所有边都是从根往外的方向。

// 我们称从根到一个节点路径上的任意一个节点（除去节点本身）都是该节点的 祖先 。根节点没有祖先。
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var checkWays = function (pairs) {
  // 注意有根树的条件=>一个数对[x1, y1]出现在pairs中当且仅当x1是y1的祖先或者y1是x1的祖先
  // 反过来说，如果构造的数中表明x1是y1（x1 > y1）的祖先，如果pairs中不存在[x1,y1]，则该构造树不满足条件
  // 例如
  // 测试例子                             4
  //  [[1,2],[2,3],[2,4],[1,5]] 5 -  1 - 2 - 3
  // 1可以是3的祖先，3也可以是1的祖先，但是pairs中没有[1, 3]数对，同理，应该还可以有[1, 4],[3, 5],[3, 4]
  // 先遍历构造祖先hash表，然后以任意一个节点为根节点出发，
  // 每走到相隔的下一个节点就要判断hash表中是否存在相应的了pair了
  let ways = 0;
  const hash = new Map();
  for (const pair of pairs) {
    const x = pair[0];
    const y = pair[1];
    if (hash.has(x)) {
      const set = hash.get(x);
      set.add(y);
      hash.set(x, set);
    } else {
      const set = new Set([y]);
      hash.set(x, set);
    }
    if (hash.has(y)) {
      const set = hash.get(y);
      set.add(x);
      hash.set(y, set);
    } else {
      const set = new Set([x]);
      hash.set(y, set);
    }
  }
  console.log(hash);
};

checkWays([
  [1, 2],
  [2, 3],
  [2, 4],
  [1, 5],
  [2, 5],
]);
// 测试例子                             4
//  [[1,2],[2,3],[2,4],[1,5]] 5 -  1 - 2 - 3

// 测试例子
// [[1, 2], [2, 3], [2, 4], [1, 5], [2, 5]] => 2个方案，以2为根节点
