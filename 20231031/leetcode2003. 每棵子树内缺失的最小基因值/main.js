// 有一棵根节点为 0 的 家族树 ，总共包含 n 个节点，节点编号为 0 到 n - 1 。给你一个下标从 0 开始的整数数组 parents ，其中 parents[i] 是节点 i 的父节点。由于节点 0 是 根 ，所以 parents[0] == -1 。

// 总共有 105 个基因值，每个基因值都用 闭区间 [1, 105] 中的一个整数表示。给你一个下标从 0 开始的整数数组 nums ，其中 nums[i] 是节点 i 的基因值，且基因值 互不相同 。

// 请你返回一个数组 ans ，长度为 n ，其中 ans[i] 是以节点 i 为根的子树内 缺失 的 最小 基因值。

// 节点 x 为根的 子树 包含节点 x 和它所有的 后代 节点。

class Node {
  constructor(
    children = [],
    val = undefined, // 标识索引
    num = undefined
  ) {
    this.children = children;
    this.val = val || 0;
    this.num = num || 0;
  }
}

/**
 * @param {number[]} parents
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestMissingValueSubtree = function (parents, nums) {
  // dfs+回溯
  const n = parents.length;
  const nodes = new Array(n).fill(0).map((_v, i) => new Node([], i));
  for (let i = 0; i < n; i++) {
    nodes[i].num = nums[i];
    if (parents[i] !== -1) {
      // 有父节点
      nodes[parents[i]].children.push(nodes[i]);
    }
  }
  const root = nodes[0];
  const ans = new Array(n).fill(1);
  const dfs = (node, genesArr) => {
    let res = node.num === 1 ? 2 : 1;
    if (node && node.children.length === 0) {
      // 叶子节点
      ans[node.val] = res;
      for (const genes of genesArr) {
        genes[node.num] = true; // 父节点的直接基因数
      }
      return res;
    }
    const curGenes = [];
    genesArr.push(curGenes);
    for (const nxtNode of node.children) {
      res = Math.max(res, dfs(nxtNode, genesArr));
    }
    for (const genes of genesArr) {
      genes[node.num] = true;
    }
    while (curGenes[res]) {
      res++;
    }
    ans[node.val] = res;
    return res;
  };
  dfs(root, []);
  return ans;
};
// 上述解法会超时溢出
const random = require("../../publicFunc/random/random");

/**
 * @param {number[]} parents
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestMissingValueSubtree = function (parents, nums) {
  // dfs+回溯
  const n = parents.length;
  const children = new Array(n).fill(0).map(() => new Array());
  for (let i = 1; i < n; i++) {
    children[parents[i]].push(i);
  }
  const ans = new Array(n).fill(1);
  const genesSet = new Array(n).fill(-1).map(() => new Set());
  const dfs = (node) => {
    const num = nums[node];
    ans[node] = num === 1 ? 2 : 1;
    genesSet[node].add(num);
    for (const nxtNode of children[node]) {
      ans[node] = Math.max(ans[node], dfs(nxtNode));
      if (genesSet[node].size < genesSet[nxtNode].size) {
        [genesSet[node], genesSet[nxtNode]] = [
          genesSet[nxtNode],
          genesSet[node],
        ];
      }
      for (const x of genesSet[nxtNode]) {
        genesSet[node].add(x);
      }
    }

    while (genesSet[node].has(ans[node])) {
      ans[node]++;
    }
    return ans[node];
  };
  dfs(0);
  return ans;
};

console.log(
  smallestMissingValueSubtree(
    new Array(100000)
      .fill(-1)
      .map((_v, i) => (i !== 0 ? random.randomNum(0, i) : -1)),
    random.randomShuffle(new Array(100000).fill(0).map((_v, i) => i + 1))
  )
);
