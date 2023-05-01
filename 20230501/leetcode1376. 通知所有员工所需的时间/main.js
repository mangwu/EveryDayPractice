/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-01 22:01:34                                                  *
 * @LastModifiedDate: 2023-05-01 22:17:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 公司里有 n 名员工，每个员工的 ID 都是独一无二的，编号从 0 到 n - 1。公司的总负责人通过 headID 进行标识。

// 在 manager 数组中，每个员工都有一个直属负责人，其中 manager[i] 是第 i 名员工的直属负责人。对于总负责人，manager[headID] = -1。题目保证从属关系可以用树结构显示。

// 公司总负责人想要向公司所有员工通告一条紧急消息。他将会首先通知他的直属下属们，然后由这些下属通知他们的下属，直到所有的员工都得知这条紧急消息。

// 第 i 名员工需要 informTime[i] 分钟来通知它的所有直属下属（也就是说在 informTime[i] 分钟后，他的所有直属下属都可以开始传播这一消息）。

// 返回通知所有员工这一紧急消息所需要的 分钟数 。

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    if (manager[i] === -1) {
      continue;
    }
    hash.has(manager[i])
      ? hash.get(manager[i]).push(i)
      : hash.set(manager[i], [i]);
  }
  let res = 0;
  const dfs = (id, pre) => {
    const arr = hash.get(id);
    if (arr) {
      for (const item of arr) {
        dfs(item, pre + informTime[id]);
      }
    } else {
      res = Math.max(res, pre);
    }
  };
  return dfs(headID, 0);
};
