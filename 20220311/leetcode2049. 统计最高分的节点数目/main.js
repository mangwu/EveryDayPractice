/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-11 09:06:37                                                  *
 * @LastModifiedDate: 2022-03-11 14:09:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一棵根节点为 0 的 二叉树 ，它总共有 n 个节点，节点编号为 0 到 n - 1 。同时给你一个下标从 0 开始的整数数组 parents 表示这棵树，其中 parents[i] 是节点 i 的父节点。由于节点 0 是根，所以 parents[0] == -1 。

// 一个子树的 大小 为这个子树内节点的数目。每个节点都有一个与之关联的 分数 。求出某个节点分数的方法是，将这个节点和与它相连的边全部 删除 ，剩余部分是若干个 非空 子树，这个节点的 分数 为所有这些子树 大小的乘积 。

// 请你返回有 最高得分 节点的 数目 。

/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function (parents) {
  // 二叉树特性:一个节点的入度和出度之和最多有3个，最少有1个
  // 对于入度和出度之和为3的节点，删减它相当于将其分为了3个子树
  // 对于入度和出度之和为2的节点，删减它相当于将其分为了2个子树
  // 对于入度和出度之和为1的节点，删减它相当于将其分为了1个子树， 节点分数乘积为  剩余节点个数
  // 如何计算入出度为2和3的节点 => 从删除节点开始bfs或dfs遍历，计算每个子树的个数即可
  // 注意，对于入出度为2的节点，只需要计算其中一个子树节点数
  // 对于入出度为3的节点，只需要计算其中两个子树的节点数
  const len = parents.length;
  const hash = new Map(); // 记录节点
  for (let i = 1; i < len; i++) {
    const a = hash.get(i) ? hash.get(i) : [];
    const b = hash.get(parents[i]) ? hash.get(parents[i]) : [];
    a.push(parents[i]);
    b.push(i);
    hash.set(i, a);
    hash.set(parents[i], b);
  }
  // console.log(hash);
  // 初始化为入出度为1的情况
  let ans = 0;
  let max = 0;
  // bfs
  const bfs = (start, visited) => {
    let queue = [start];
    // console.log(queue);
    visited[start] = true;
    let num = 1;
    while (queue.length > 0) {
      let ntx = [];
      // 出栈
      for (const q of queue) {
        const next = hash.get(q);
        ntx = ntx.concat(
          next.filter((v) => {
            // 未访问过
            if (!visited[v]) {
              visited[v] = true;
              return true;
            }
            return false;
          })
        );
      }
      // console.log(ntx);
      // 节点个数
      num += ntx.length;
      queue = ntx;
    }
    return num;
  };
  // 遍历一遍
  for (let i = 0; i < len; i++) {
    const arr = hash.get(i);
    if (arr.length == 1) {
      if (len - 1 > max) {
        ans = 1;
        max = len - 1;
      } else if (len - 1 == max) {
        ans++;
      }
    }
    //出入度为2
    if (arr.length == 2) {
      // 计算其中一个的
      let visited = [];
      visited[i] = true;
      // console.log("开始bfs");
      const num = bfs(arr[0], visited);
      // console.log("结束bfs");
      // console.log(arr, num);
      let m = num * (len - 1 - num);
      if (m > max) {
        ans = 1;
        max = m;
      } else if (m == max) {
        ans++;
      }
    }
    if (arr.length == 3) {
      // 计算其中两个
      let visited = [];
      visited[i] = true;
      // console.log("开始bfs");
      const num1 = bfs(arr[0], visited);
      const num2 = bfs(arr[1], visited);
      // console.log("结束bfs");

      // console.log(arr, num1, num2);

      let m = num1 * num2 * (len - 1 - num1 - num2);
      if (m > max) {
        ans = 1;
        max = m;
      } else if (m == max) {
        ans++;
      }
    }
    // console.log(ans);
  }
  return ans;
};

// 上述方法对于每个非出入为1的节点进行不同方向上的bfs遍历，最坏的情况是O(n^2)所以会超时
countHighestScoreNodes([-1, 2, 0, 2, 0]);

/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function (parents) {
  // 如上的分析，可以从根节点开始遍历dfs遍历
  // 遍历每个节点计算出每个子结点的个数
  // 然后就用总节点个数计算出父节点上方的节点
  // 这样就可以计算出每个节点的得分

  // 先记录每个节点的子结点
  const len = parents.length;
  const children = new Array(len).fill(0).map((_v) => []);
  for (let i = 1; i < len; i++) {
    children[parents[i]].push(i);
  }
  let max = 0;
  let ans = 0;
  // dfs
  const dfs = (start) => {
    // 当前分数
    let scores = 1;
    // 用于保存剩余节点数量
    let size = len - 1;
    // 遍历获得子节点个数
    for (const child of children[start]) {
      // 获取该节点下的子结点个数
      let t = dfs(child);
      // 计算分数
      scores *= t;
      // 削减size，获得父节点外的节点数
      size -= t;
    }
    // 除了根节点外都有父节点外的节点数（去除子节点的节点数）
    if (start !== 0) {
      scores *= size;
    }
    // 判断本次分数
    if (scores > max) {
      max = scores;
      ans = 1;
    } else if (scores == max) {
      ans++;
    }
    // 返回子节点数（size初值为len - 1，减去了子节点个数，现在用Len - size就是当前节点加上子节点个数）
    return len - size;
  };
  dfs(0);
  return ans;
};
