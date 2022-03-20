/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-20 20:47:17                                                  *
 * @LastModifiedDate: 2022-03-20 21:49:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个有 n 个服务器的计算机网络，服务器编号为 0 到 n - 1 。
// 同时给你一个二维整数数组 edges ，其中 edges[i] = [ui, vi]
// 表示服务器 ui 和 vi 之间有一条信息线路，在 一秒 内它们之间可以传输 任意 数目的信息。
// 再给你一个长度为 n 且下标从 0 开始的整数数组 patience 。

// 题目保证所有服务器都是 相通 的，也就是说一个信息从任意服务器出发，都可以通过这些信息线路直接或间接地到达任何其他服务器。

// 编号为 0 的服务器是 主 服务器，其他服务器为 数据 服务器。每个数据服务器都要向主服务器发送信息，并等待回复。信息在服务器之间按 最优 线路传输，也就是说每个信息都会以 最少时间 到达主服务器。主服务器会处理 所有 新到达的信息并 立即 按照每条信息来时的路线 反方向 发送回复信息。

// 在 0 秒的开始，所有数据服务器都会发送各自需要处理的信息。
// 从第 1 秒开始，每 一秒最 开始 时，每个数据服务器都会检查它是否收到了主服务器的回复信息
// （包括新发出信息的回复信息）：

// 如果还没收到任何回复信息，那么该服务器会周期性 重发 信息。
// 数据服务器 i 每 patience[i] 秒都会重发一条信息，也就是说，
// 数据服务器 i 在上一次发送信息给主服务器后的 patience[i] 秒 后 会重发一条信息给主服务器。
// 否则，该数据服务器 不会重发 信息。
// 当没有任何信息在线路上传输或者到达某服务器时，该计算机网络变为 空闲 状态。

// 请返回计算机网络变为 空闲 状态的 最早秒数 。

/**
 * @param {number[][]} edges
 * @param {number[]} patience
 * @return {number}
 */
var networkBecomesIdle = function (edges, patience) {
  // 即返回每个节点处于等待时间的最大值
  // 如果不考虑patience，那么每个节点的等待时间就是到达节点0的距离的两倍
  // 计算出每个节点到达节点0距离的两倍后，就可以通过patience计算出具体的每个节点的等待时间
  // 而每个节点到达节点0的最短距离使用bfs计算即可
  // 因为edges是表示所有的链接线，需要先构造每个节点相邻的临界表

  const hash = new Map();
  for (const edge of edges) {
    const p1 = hash.get(edge[0]) ? hash.get(edge[0]) : [];
    const p2 = hash.get(edge[1]) ? hash.get(edge[1]) : [];
    p1.push(edge[1]);
    p2.push(edge[0]);
    hash.set(edge[0], p1);
    hash.set(edge[1], p2);
  }
  // 开始bfs遍历
  const visited = [];
  visited[0] = true;
  let pathLen = 1;
  let queue = [0];
  while (queue.length > 0) {
    let nxt = [];
    for (const ele of queue) {
      const neighbor = hash.get(ele);
      for (node of neighbor) {
        if (!visited[node]) {
          visited[node] = pathLen;
          nxt.push(node);
        }
      }
    }
    queue = nxt;
    pathLen++;
  }
  let ans = 0;
  // 遍历每个节点的最短距离，计算每个节点的等待时间
  for (let i = 1; i < patience.length; i++) {
    const distance = visited[i] * 2;
    const p = patience[i];
    // 最后一次发出消息的时间为距离加上最后一次发送时间 除以 p 向下取整再乘以 p
    ans = Math.max(ans, Math.floor((distance - 1) / p) * p + distance);
  }
  return ans + 1;
};
