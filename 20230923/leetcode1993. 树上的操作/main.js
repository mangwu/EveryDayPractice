/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-23 20:12:00                                                  *
 * @LastModifiedDate: 2023-09-23 21:35:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一棵 n 个节点的树，编号从 0 到 n - 1 ，以父节点数组 parent 的形式给出，其中 parent[i] 是第 i 个节点的父节点。树的根节点为 0 号节点，所以 parent[0] = -1 ，因为它没有父节点。你想要设计一个数据结构实现树里面对节点的加锁，解锁和升级操作。

// 数据结构需要支持如下函数：

// Lock：指定用户给指定节点 上锁 ，上锁后其他用户将无法给同一节点上锁。只有当节点处于未上锁的状态下，才能进行上锁操作。
// Unlock：指定用户给指定节点 解锁 ，只有当指定节点当前正被指定用户锁住时，才能执行该解锁操作。
// Upgrade：指定用户给指定节点 上锁 ，并且将该节点的所有子孙节点 解锁 。只有如下 3 个条件 全部 满足时才能执行升级操作：
// 指定节点当前状态为未上锁。
// 指定节点至少有一个上锁状态的子孙节点（可以是 任意 用户上锁的）。
// 指定节点没有任何上锁的祖先节点。
// 请你实现 LockingTree 类：

// LockingTree(int[] parent) 用父节点数组初始化数据结构。
// lock(int num, int user) 如果 id 为 user 的用户可以给节点 num 上锁，那么返回 true ，否则返回 false 。如果可以执行此操作，节点 num 会被 id 为 user 的用户 上锁 。
// unlock(int num, int user) 如果 id 为 user 的用户可以给节点 num 解锁，那么返回 true ，否则返回 false 。如果可以执行此操作，节点 num 变为 未上锁 状态。
// upgrade(int num, int user) 如果 id 为 user 的用户可以给节点 num 升级，那么返回 true ，否则返回 false 。如果可以执行此操作，节点 num 会被 升级 。

/**
 * @param {number[]} parent
 */
var LockingTree = function (parent) {
  const n = parent.length;
  const relation = new Array(n).fill(0).map(() => []);
  this.parent = parent;
  for (let i = 1; i < n; i++) {
    // i的父节点是parent[i]
    relation[parent[i]].push(i);
  }
  this.relation = relation;
  this.locked = new Array(n).fill(-1); // -1表示未上锁
};

/**
 * @param {number} num
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.lock = function (num, user) {
  console.log(this.locked);
  if (this.locked[num] === -1) {
    // 上锁
    this.locked[num] = user;
    return true;
  }
  return false;
};

/**
 * @param {number} num
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.unlock = function (num, user) {
  console.log(this.locked);
  // 解锁
  if (this.locked[num] === user) {
    this.locked[num] = -1;
    return true;
  }
  return false;
};

/**
 * @param {number} num
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.upgrade = function (num, user) {
  console.log(this.locked);
  // 三个条件
  // 是否未上锁
  if (this.locked[num] !== -1) return false;
  // num节点要没有任何上锁的祖先
  let cur = this.parent[num];
  while (cur !== -1) {
    if (this.locked[cur] !== -1) return false;
    cur = this.parent[cur];
  }
  // 子孙节点要有已经上锁的
  const lockedSons = []; //
  let queue = [num];
  while (queue.length) {
    const nxt = new Set();
    for (const q of queue) {
      if (this.locked[q] !== -1) {
        lockedSons.push(q);
      }
      const sons = this.relation[q];
      for (const son of sons) {
        nxt.add(son);
      }
    }
    queue = [...nxt];
  }
  if (lockedSons.length === 0) return false;
  this.locked[num] = user;
  lockedSons.forEach((v) => (this.locked[v] = -1));
  return true;
};

/**
 * Your LockingTree object will be instantiated and called as such:
 * var obj = new LockingTree(parent)
 * var param_1 = obj.lock(num,user)
 * var param_2 = obj.unlock(num,user)
 * var param_3 = obj.upgrade(num,user)
 */

