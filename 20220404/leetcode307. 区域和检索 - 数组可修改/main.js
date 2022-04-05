/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-04 21:04:39                                                  *
 * @LastModifiedDate: 2022-04-04 23:23:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个数组 nums ，请你完成两类查询。

// 其中一类查询要求 更新 数组 nums 下标对应的值
// 另一类查询要求返回数组 nums 中索引 left 和索引 right 之间（ 包含 ）的nums元素的 和
// ，其中 left <= right
// 实现 NumArray 类：

// 1.NumArray(int[] nums) 用整数数组 nums 初始化对象
// 2.void update(int index, int val) 将 nums[index] 的值 更新 为 val
// 3.int sumRange(int left, int right) 返回数组 nums 中索引 left
//   和索引 right 之间（ 包含 ）的nums元素的 和
//   （即，nums[left] + nums[left + 1], ..., nums[right]）

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  this.sums = [];
  let sum = 0;
  for (const num of nums) {
    sum += num;
    this.sums.push(sum);
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  let sub = val - this.nums[index];
  this.nums[index] = val;
  for (let i = index; i < this.nums.length; i++) {
    this.sums[i] += sub;
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.sums[right] - this.sums[left] + this.nums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  // 分块处理
  // 将nums分为size块
  this.nums = nums;
  const n = nums.length;
  // 取size为根号n
  size = Math.floor(Math.sqrt(n));
  this.sums = new Array(Math.floor((n + size - 1) / size)).fill(0);
  // 求每个块的大小
  for (let i = 0; i < n; i++) {
    // 没size个进行求和（最后一个可能没有size个）
    this.sums[Math.floor(i / size)] += nums[i];
  }
};
/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  // 修改nums和sums
  this.sums[Math.floor(index / size)] += val - this.nums[index];
  this.nums[index] = val;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  // 计算sum1(left所在块),sum2中间块,sum3right所在块
  // left的块数
  const b1 = Math.floor(left / size);
  // left在块中的位置
  const i1 = left % size;
  // right的块数
  const b2 = Math.floor(right / size);
  // right所在块中的位置
  const i2 = right % size;
  // 是否同一块
  if (b1 == b2) {
    let ans = 0;
    for (let j = i1; j <= i2; j++) {
      ans += this.nums[b1 * size + j];
    }
    return ans;
  }
  // 不是同一块
  let sum1 = 0;
  for (let j = i1; j < size; j++) {
    sum1 += this.nums[b1 * size + j];
  }
  let sum2 = 0;
  for (let j = 0; j <= i2; j++) {
    sum2 += this.nums[b2 * size + j];
  }
  let sum3 = 0;
  for (let j = b1 + 1; j < b2; j++) {
    sum3 += this.sums[j];
  }
  return sum1 + sum2 + sum3;
};
