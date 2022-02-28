/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-28 10:43:12                                                  *
 * @LastModifiedDate: 2022-02-28 16:23:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 我们有 n 栋楼，编号从 0 到 n - 1 。每栋楼有若干员工。由于现在是换楼的季节，部分员工想要换一栋楼居住。

// 给你一个数组 requests ，其中 requests[i] = [fromi, toi] ，表示一个员工请求从编号为 fromi 的楼搬到编号为 toi 的楼。

// 一开始 所有楼都是满的，所以从请求列表中选出的若干个请求是可行的需要满足 每栋楼员工净变化为 0 。意思是每栋楼 离开 的员工数目 等于 该楼 搬入 的员工数数目。比方说 n = 3 且两个员工要离开楼 0 ，一个员工要离开楼 1 ，一个员工要离开楼 2 ，如果该请求列表可行，应该要有两个员工搬入楼 0 ，一个员工搬入楼 1 ，一个员工搬入楼 2 。

// 请你从原请求列表中选出若干个请求，使得它们是一个可行的请求列表，并返回所有可行列表中最大请求数目。

/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function (n, requests) {
  // 每栋楼 离开 的员工数目 等于 该楼 搬入 的员工数数目
  // 即所选的每个请求连成的图，每个节点的入度和出度一样
  // 入读和出度一样则表示，图必定含有环形的路径
  // 保存有效的环形路径
  let hash = new Map();
  // dfs多源遍历
  for (let i = 0; i < n; i++) {
    dfs(i, i, requests, [], hash, []);
  }
  // set中保存了所有可能的环路
  const set = new Set();
  for (const [_key, value] of hash) {
    for (const v of value) {
      set.add(v);
    }
  }
  // console.log(hash);
  return set.length;
};

const dfs = (start, end, requests, cycle, hash, visited) => {
  // 查看是否构成环路
  for (let i = 0; i < requests.length; i++) {
    if (start == requests[i][0] && !visited[i]) {
      cycle.push(i);
      // console.log(i);
      visited[i] = true;
      if (requests[i][1] === end) {
        // 需要将本次循环的cycle进行判断，是否属于已有循环的一部分
        if (hash.size == 0) {
          hash.set(0, new Set(cycle));
          break;
        } else {
          let isNew = true;
          // 判断是那一个环路的一部分
          for (const [key, value] of hash) {
            let isApart = false;
            for (const c of cycle) {
              if (value.has(c)) {
                isApart = true;
                isNew = false;
              }
            }
            if (isApart && cycle.length >= value.size) {
              hash.set(key, new Set(cycle));
            }
          }
          if (isNew) {
            // 新
            hash.set(hash.size, new Set(cycle));
          }
        }
      }
      // console.log(cycle);
      dfs(requests[i][1], end, requests, cycle, hash, visited);
      // 将本轮的i丢弃
      cycle.pop(i);
      visited[i] = false;
    }
  }
};
// 会超出时间限制
maximumRequests(20, [
  [0, 3],
  [3, 1],
  [1, 2],
  [2, 0],
  [0, 2],
  [0, 4],
  [4, 2],
  [4, 1],
  [5, 6],
  [6, 5],
  [7, 9],
  [9, 10],
  [10, 11],
  [9, 7],
  [11, 5],
  [4, 1],
]);

// 枚举加回溯
/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function (n, requests) {
  const delta = new Array(n).fill(0);
  let zero = n,
    ans = 0,
    cnt = 0;
  const dfs = (requests, pos) => {
    if (pos === requests.length) {
      if (zero === n) {
        ans = Math.max(ans, cnt);
      }
      return;
    }

    // 不选 requests[pos]
    dfs(requests, pos + 1);

    // 选 requests[pos]
    let z = zero;
    ++cnt;
    const r = requests[pos];
    let x = r[0],
      y = r[1];
    zero -= delta[x] == 0 ? 1 : 0;
    --delta[x];
    zero += delta[x] == 0 ? 1 : 0;
    zero -= delta[y] == 0 ? 1 : 0;
    ++delta[y];
    zero += delta[y] == 0 ? 1 : 0;
    dfs(requests, pos + 1);
    // 回溯
    --delta[y];
    ++delta[x];
    --cnt;
    zero = z;
  };
  dfs(requests, 0);
  return ans;
};
