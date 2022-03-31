/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-31 23:01:35                                                  *
 * @LastModifiedDate: 2022-03-31 23:12:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const n = graph.length;
  const dfs = (start, end) => {
    if (start == end) {
      return [[end]];
    }
    let path = [];
    for (const g of graph[start]) {
      for (const p of dfs(g, end)) {
        const newP = [start, ...p];
        path.push(newP);
      }
    }
    return path;
  };
  return dfs(0, n - 1);
};
