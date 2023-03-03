/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-03 08:51:52                                                  *
 * @LastModifiedDate: 2023-03-03 09:04:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的字符串数组 names 。你将会在文件系统中创建 n 个文件夹：在第 i 分钟，新建名为 names[i] 的文件夹。

// 由于两个文件 不能 共享相同的文件名，因此如果新建文件夹使用的文件名已经被占用，系统会以 (k) 的形式为新文件夹的文件名添加后缀，其中 k 是能保证文件名唯一的 最小正整数 。

// 返回长度为 n 的字符串数组，其中 ans[i] 是创建第 i 个文件夹时系统分配给该文件夹的实际名称。

/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  // 如果遇到xxx(1)这样的，有可能需要变成xxx(1)(n)
  const res = [];
  let hash = new Map();
  for (const name of names) {
    if (hash.has(name)) {
      // 如果已经有同名的了，可以进行额外创建
      let cur = hash.get(name);
      while (hash.has(`${name}(${cur})`)) {
        cur++;
      }
      hash.set(name, cur + 1);
      res.push(`${name}(${cur})`);
      hash.set(`${name}(${cur})`, 1);
    } else {
      res.push(name);
      hash.set(name, 1);
    }
  }
  return res;
};
