/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-01 22:59:06                                                  *
 * @LastModifiedDate: 2022-10-01 23:05:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 n 个视频的上传序列，每个视频编号为 1 到 n 之间的 不同 数字，你需要依次将这些视频上传到服务器。请你实现一个数据结构，在上传的过程中计算 最长上传前缀 。

// 如果 闭区间 1 到 i 之间的视频全部都已经被上传到服务器，那么我们称 i 是上传前缀。最长上传前缀指的是符合定义的 i 中的 最大值 。

// 请你实现 LUPrefix 类：

// LUPrefix(int n) 初始化一个 n 个视频的流对象。
// void upload(int video) 上传 video 到服务器。
// int longest() 返回上述定义的 最长上传前缀 的长度。

/**
 * @param {number} n
 */
var LUPrefix = function (n) {
  // 都未上传
  this.data = new Array(n + 1).fill(1);
  this.data[0] = 0;
  // 表示最长上传前缀
  this.idx = 0;
};

/**
 * @param {number} video
 * @return {void}
 */
LUPrefix.prototype.upload = function (video) {
  this.data[video] = 0;
  if (video == this.idx + 1) {
    while (this.data[video] === 0) {
      video++;
    }
    this.idx = video - 1;
  }
};

/**
 * @return {number}
 */
LUPrefix.prototype.longest = function () {
  return this.idx;
};

/**
 * Your LUPrefix object will be instantiated and called as such:
 * var obj = new LUPrefix(n)
 * obj.upload(video)
 * var param_2 = obj.longest()
 */
