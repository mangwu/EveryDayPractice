// 一个公司准备组织一场会议，邀请名单上有 n 位员工。公司准备了一张 圆形 的桌子，可以坐下 任意数目 的员工。

// 员工编号为 0 到 n - 1 。每位员工都有一位 喜欢 的员工，每位员工 当且仅当 他被安排在喜欢员工的旁边，他才会参加会议。每位员工喜欢的员工 不会 是他自己。

// 给你一个下标从 0 开始的整数数组 favorite ，其中 favorite[i] 表示第 i 位员工喜欢的员工。请你返回参加会议的 最多员工数目 。

/**
 * @param {number[]} favorite
 * @return {number}
 */
var maximumInvitations = function (favorite) {
  // 求最长环路
  // 一个员工最多出现在一个环路中
  const set = new Set();
  const hash = new Map();
  const n = favorite.length;
  // 长度为2的环路的总长度
  let twoPath = 0;
  for (let i = 0; i < n; i++) {
    hash.has(favorite[i])
      ? hash.get(favorite[i]).push(i)
      : hash.set(favorite[i], [i]);
    // if (favorite[favorite[i]] === i) {
    //   twoPath++;
    // }
  }
  let ans = 0;
  outer: for (let i = 0; i < n; i++) {
    if (set.has(i)) continue; // 已经访问过
    const curSet = new Set();
    let cur = i;
    while (!curSet.has(cur)) {
      if (set.has(cur)) {
        // 重复环路，不必继续遍历
        continue outer;
      }
      curSet.add(cur);
      set.add(cur);
      cur = favorite[cur];
    }
    // cur是环路遇到第一个重复节点
    let res = 1;
    let nxt = favorite[cur];
    while (nxt !== cur) {
      nxt = favorite[nxt];
      res++;
    }
    // 需要考虑一种特殊情况：res为2时，可以额外安排,，如下
    //    1 ↔ 2 ← 4 ← 5 ....
    //    ↑
    //    3 ← 6 ....
    // 同时也可以安排组合其它长度为2的环路(包括附带的)
    if (res === 2) {
      nxt = favorite[cur];
      // 进行两次bfs
      const bfs = (queue) => {
        let bfsRes = 0;
        while (queue.length) {
          const nxt = [];
          bfsRes++;
          for (const item of queue) {
            set.add(item);
            const nextNodes = hash.get(item);
            if (nextNodes) nxt.push(...nextNodes);
          }
          queue = nxt;
        }
        return bfsRes;
      };
      const curQueue = hash.get(cur);
      curQueue.splice(curQueue.indexOf(nxt), 1);
      const nxtQueue = hash.get(nxt);
      nxtQueue.splice(nxtQueue.indexOf(cur), 1);
      res += bfs(curQueue);
      res += bfs(nxtQueue);
      // 计算环路为2的组合总长度
      twoPath += res;
    }
    ans = Math.max(ans, res, twoPath);
  }
  return ans;
};

// [1,0,0,2,1,4,7,8,9,6,7,10,8]
// [1,0,3,2,5,6,7,4,9,8,11,10,11,12,10]
