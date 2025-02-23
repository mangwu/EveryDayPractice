/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-22 20:02:18                                                  *
 * @LastModifiedDate: 2025-02-22 20:21:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n ，表示下标从 0 开始的内存数组的大小。所有内存单元开始都是空闲的。

// 请你设计一个具备以下功能的内存分配器：

// 分配 一块大小为 size 的连续空闲内存单元并赋 id mID 。
// 释放 给定 id mID 对应的所有内存单元。
// 注意：

// 多个块可以被分配到同一个 mID 。
// 你必须释放 mID 对应的所有内存单元，即便这些内存单元被分配在不同的块中。
// 实现 Allocator 类：

// Allocator(int n) 使用一个大小为 n 的内存数组初始化 Allocator 对象。
// int allocate(int size, int mID) 找出大小为 size 个连续空闲内存单元且位于  最左侧 的块，分配并赋 id mID 。返回块的第一个下标。如果不存在这样的块，返回 -1 。
// int freeMemory(int mID) 释放 id mID 对应的所有内存单元。返回释放的内存单元数目。

/**
 * @param {number} n
 */
var Allocator = function (n) {
  this.data = new Array(n).fill(0);
};

/**
 * @param {number} size
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function (size, mID) {
  const data = this.data;
  const n = data.length;
  for (let i = 0; i < n; i++) {
    if (data[i] === 0) {
      // 找到连续0
      let j = i + 1;
      while (j < n && data[j] === 0) j++;
      if (j - i >= size) {
        for (let k = i; k < i + size; k++) {
          data[k] = mID;
        }
        return i;
      } else {
        i = j - 1;
      }
    }
  }
  return -1;
};


/**
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.freeMemory = function (mID) {
  const data = this.data;
  let res = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === mID) {
      data[i] = 0;
      res++;
    }
  }
  return res;
};

/**
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.freeMemory(mID)
 */
