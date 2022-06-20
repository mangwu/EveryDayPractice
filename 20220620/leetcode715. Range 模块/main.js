/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-20 15:27:50                                                  *
 * @LastModifiedDate: 2022-06-20 22:41:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Range模块是跟踪数字范围的模块。设计一个数据结构来跟踪表示为 半开区间 的范围并查询它们。

// 半开区间 [left, right) 表示所有 left <= x < right 的实数 x 。

// 实现 RangeModule 类:

// RangeModule() 初始化数据结构的对象。
// void addRange(int left, int right) 添加 半开区间 [left, right)，跟踪该区间中的每个实数。
//   添加与当前跟踪的数字部分重叠的区间时，应当添加在区间 [left, right) 中尚未跟踪的任何数字到该区间中。
// boolean queryRange(int left, int right) 只有在当前正在跟踪区间 [left, right) 中的每一个实数时，才返回 true ，
//   否则返回 false 。
// void removeRange(int left, int right) 停止跟踪 半开区间 [left, right) 中当前正在跟踪的每个实数。
var RangeModule = function () {
  this.data = [];
};

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function (left, right) {
  const res = binarySearch(left, right, this.data);
  insertNewInterval(left, right, res, this.data);
  // 分情况讨论
};

/**
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function (left, right) {
  const res = binarySearch(left, right, this.data);
  return queryRange(left, right, res, this.data);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function (left, right) {
  const res = binarySearch(left, right, this.data);
  removeInterval(left, right, res, this.data);
};

/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */



const binarySearch = (left, right, data) => {
  if (data.length == 0) {
    // 空数组
    return 0;
  }
  let l = 0;
  let r = data.length - 1;
  while (l <= r) {
    let mid = (l + r) >> 1;
    // 找到第一个小于等于left的区间索引
    if (data[mid][0] <= left) {
      l = mid + 1;
    } else {
      // 比left大
      r = r - 1;
    }
  }
  let idx1 = r;
  l = 0;
  r = data.length - 1;
  while (l <= r) {
    let mid = (l + r) >> 1;
    // 找到第一个小于等于left的区间索引
    if (data[mid][0] <= right) {
      l = mid + 1;
    } else {
      // 比left大
      r = r - 1;
    }
  }
  let idx2 = r;
  return [idx1, idx2];
};
// 分情况讨论插入
/**
 * @description 更新区间
 * @param {number} left 区间左值
 * @param {number} right 区间右值
 * @param {number[]} res 二分搜索结果
 * @param {number[][]} data 区间数组
 */
const insertNewInterval = (left, right, res, data) => {
  if (res == 0) {
    // 特殊情况
    data.push([left, right]);
    return;
  }
  if (res[0] == res[1]) {
    // 特殊情况 插入区间只与一个区间有关
    if (res[0] == -1) {
      // 特殊情况中的特殊情况 在每个区间前面
      data.splice(0, 0, [left, right]);
      return;
    }
    if (left <= data[res[0]][1] && right >= data[res[0]][1]) {
      // 扩展区间
      data[res[0]][1] = right;
      return;
    }
    if (right <= data[res[0]][1]) {
      // 重合区间
      return;
    }
    if (left > data[res[0]][1]) {
      // 新区间
      data.splice(res[0] + 1, 0, [left, right]);
      return;
    }
  } else {
    if (res[0] == -1) {
      data[0][0] = left;
      // 特殊情况，left在所有区间前
      if (right <= data[res[1]][1]) {
        // right在内
        data[0][1] = data[res[1]][1];
        data.splice(1, res[1] - res[0] - 1);
      } else {
        // right在外
        data[0][1] = right;
        data.splice(1, res[1] - res[0] - 1);
      }
      return;
    }
    // 普通情况
    if (left <= data[res[0]][1]) {
      data[res[0]][1] = Math.max(right, data[res[1]][1]);
      data.splice(res[0] + 1, res[1] - res[0]);
      return;
    }
    // left在res[0]右区间之外
    if (left > data[res[0]][1]) {
      data[res[0] + 1][0] = left;
      data[res[0] + 1][1] = Math.max(right, data[res[1]][1]);
      data.splice(res[0] + 2, res[1] - res[0] - 1);
    }
  }
};

/**
 * @description 删除区间
 * @param {number} left 区间左值
 * @param {number} right 区间右值
 * @param {number[]} res 二分搜索结果
 * @param {number[][]} data 区间数组
 */
const removeInterval = (left, right, res, data) => {
  // 特殊情况
  if (res == 0) {
    return;
  }
  if (res[0] == res[1]) {
    // 特殊情况 插入区间只与一个区间有关
    if (res[0] == -1) {
      // 特殊情况中的特殊情况 在每个区间前面
      return;
    }
    if (left <= data[res[0]][1] && right >= data[res[0]][1]) {
      // 删除区间一部分
      if (left == data[res[0]][0]) {
        data.splice(res[0], 1);
      } else {
        data[res[0]][1] = left;
      }
      return;
    }
    if (right < data[res[0]][1]) {
      // 重合区间 可变为两个区间
      if (left == data[res[0]][1]) {
        data[res[0]][0] = right;
      } else {
        data.splice(res[0] + 1, 0, [right, data[res[0]][1]]);
        data[res[0]][1] = left;
      }
      return;
    }
    if (left > data[res[0]][1]) {
      // 新区间 不需要移除
      return;
    }
  } else {
    if (res[0] == -1) {
      // 特殊情况，left在所有区间前
      if (right < data[res[1]][1]) {
        // right在内
        data[res[1]][0] = right;
        data.splice(0, res[1] - res[0] - 1);
      } else {
        // right在外
        data.splice(0, res[1] - res[0]);
      }
      return;
    }
    // 普通情况
    if (left < data[res[0]][1]) {
      data[res[0]][1] = left;
      if (right < data[res[1]][1]) {
        data[res[1]][0] = right;
        data.splice(res[0] + 1, res[1] - res[0] - 1);
        return;
      }
      // right >= data[res[1]][1]
      data.splice(res[0] + 1, res[1] - res[0]);
      return;
    }
    // left在res[0]右区间之外
    if (left >= data[res[0]][1]) {
      if (right < data[res[1]][1]) {
        // right在内
        data[res[1]][0] = right;
        data.splice(res[0] + 1, res[1] - res[0] - 1);
        return;
      }
      // right >= data[res[1]][1]
      data.splice(res[0] + 1, res[1] - res[0]);
    }
  }
};

const queryRange = (left, right, res, data) => {
  if (res == 0) {
    return false;
  }
  if (res[0] == res[1]) {
    if (res[0] == -1) {
      return false;
    }
    if (data[res[0]][0] <= left && data[res[0]][1] >= right) {
      return true;
    }
  }
  return false;
};


const data1 = [[1, 5]];
const data2 = [
  [0, 3],
  [4, 7],
  [8, 10],
  [15, 18],
  [19, 20],
];
// const res1 = binarySearch(-2, 1, data1);
// insertNewInterval(-2, 1, res1, data1);
// console.log(data1);
// const res2 = binarySearch(8, 9, data1);
// insertNewInterval(8, 9, res2, data1);
// console.log(data1);
// const res3 = binarySearch(10, 12, data1);
// insertNewInterval(10, 12, res3, data1);
// console.log(data1);
// const res4 = binarySearch(13, 18, data1);
// insertNewInterval(13, 18, res4, data1);
// console.log(data1);
// const res5 = binarySearch(20, 23, data1);
// insertNewInterval(20, 23, res5, data1);
// console.log(data1);

// const res6 = binarySearch(11, 13, data1);
// removeInterval(11, 13, res6, data1);
// console.log(data1);

// const res7 = binarySearch(21, 22, data1);
// removeInterval(21, 22, res7, data1);
// console.log(data1);

// const res8 = binarySearch(10, 12, data1);
// removeInterval(10, 12, res8, data1);
// console.log(data1);

// const res9 = binarySearch(15, 22, data1);
// removeInterval(15, 22, res9, data1);
// console.log(data1);
