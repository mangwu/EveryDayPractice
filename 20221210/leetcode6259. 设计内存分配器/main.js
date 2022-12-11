/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-11 10:44:48                                                  *
 * @LastModifiedDate: 2022-12-11 11:11:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
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
// int free(int mID) 释放 id mID 对应的所有内存单元。返回释放的内存单元数目。

/**
 * @param {number} n
 */
var Allocator = function (n) {
  this.hash = new Map(); // mid -> idx
  this.arr = new Array(n).fill(0);
  this.rest = n;
};

/**
 * @param {number} size
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function (size, mID) {
  if (this.rest < size) {
    return -1;
  }
  const n = this.arr.length;
  for (let i = 0; i < n; i++) {
    if (this.arr[i]) {
      continue;
    } else if (n - i < size) {
      break;
    } else {
      let cur = 0;
      while (cur < size && !this.arr[i + cur]) {
        cur++;
      }
      // 找到了
      if (cur === size) {
        this.hash.has(mID)
          ? this.hash.get(mID).push([i, size])
          : this.hash.set(mID, [[i, size]]);
        for (let j = 0; j < size; j++) {
          this.arr[i + j] = mID;
        }
        this.rest -= size;
        return i;
      } else {
        // 继续查找
        i += cur;
      }
    }
  }
  return -1;
};

/**
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.free = function (mID) {
  let ans = 0;
  if (this.hash.has(mID)) {
    for (const [start, size] of this.hash.get(mID)) {
      ans += size;
      for (let i = 0; i < size; i++) {
        this.arr[i + start] = 0;
      }
      this.rest += size;
    }
    this.hash.delete(mID);
  }
  return ans;
};

/**
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.free(mID)
 */
