/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-26 09:41:08                                                  *
 * @LastModifiedDate: 2022-01-26 17:22:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个在 X-Y 平面上的点构成的数据流。设计一个满足下述要求的算法：

// 添加 一个在数据流中的新点到某个数据结构中。可以添加 重复 的点，并会视作不同的点进行处理。
// 给你一个查询点，请你从数据结构中选出三个点，使这三个点和查询点一同构成一个 面积为正 的 轴对齐正方形 ，统计 满足该要求的方案数目。
// 轴对齐正方形 是一个正方形，除四条边长度相同外，还满足每条边都与 x-轴 或 y-轴 平行或垂直。

// 实现 DetectSquares 类：

// DetectSquares() 使用空数据结构初始化对象
// void add(int[] point) 向数据结构添加一个新的点 point = [x, y]
// int count(int[] point) 统计按上述方式与点 point = [x, y] 共同构造 轴对齐正方形 的方案数。

var DetectSquares = function () {
  // 记录
  // this.repeatPoints = new Set();
  // (x, y)
  this.points = new Map();
  // (y, x)
  this.reversePoints = new Map();
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  // 保存(x, y)不管重复值
  // this.repeatPoints.add(point.toString());
  // 保存(x, y)值
  if (this.points.has(point[0])) {
    const newArr = this.points.get(point[0]);
    newArr.push(point[1]);
    this.points.set(point[0], newArr);
  } else {
    this.points.set(point[0], [point[1]]);
  }
  // 保存(y, x)值
  if (this.reversePoints.has(point[1])) {
    const newArr = this.reversePoints.get(point[1]);
    newArr.push(point[0]);
    this.reversePoints.set(point[1], newArr);
  } else {
    this.reversePoints.set(point[1], [point[0]]);
  }
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
  // 遍历查找可能的轴对齐正方形
  // 和point同轴的x和y
  let x = [],
    y = [];
  // 遍历hash
  // x值相同的y坐标集合
  for (let [key, value] of this.points) {
    if (key === point[0]) {
      x = value.filter((v) => v !== point[1]);
      break;
    }
  }
  // y值相同的x坐标集合
  for (let [key, value] of this.reversePoints) {
    if (key === point[1]) {
      y = value.filter((v) => v !== point[0]);
      break;
    }
  }
  // y坐标和x坐标个数
  const lenx = x.length;
  const leny = y.length;
  // console.log(x, y);
  // 正方形个数
  let ans = 0;
  // x，y同时有值才行
  if (lenx > 0 && leny > 0) {
    // 遍历leny (y值相同的x坐标集合)
    for (let i = 0; i < leny; i++) {
      // 矩阵边长
      const sidex = y[i] - point[0];
      // 遍历lenx(x值相同的y坐标集合)
      for (let j = 0; j < lenx; j++) {
        const sidey = x[j] - point[1];
        // console.log([y[i], x[j]]);
        // 是正方形
        if (sidex === sidey || sidex + sidey === 0) {
          // 查看是否具有第四个点
          // 个数
          let newArr = this.points.get(y[i]);
          newArr = newArr.filter(v => v == x[j]);
          ans = ans + newArr.length;
        }
      }
    }
  }
  return ans;
};

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */

 var DetectSquares2 = function () {
  // 记录
  // this.repeatPoints = new Set();
  // (x, y)
  this.points = new Map();
  // (y, x)
  this.reversePoints = new Map();
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  // 保存(x, y)不管重复值
  // this.repeatPoints.add(point.toString());
  // 保存(x, y)值
  if (this.points.has(point[0])) {
    const newArr = this.points.get(point[0]);
    newArr.push(point[1]);
    this.points.set(point[0], newArr);
  } else {
    this.points.set(point[0], [point[1]]);
  }
  // 保存(y, x)值
  if (this.reversePoints.has(point[1])) {
    const newArr = this.reversePoints.get(point[1]);
    newArr.push(point[0]);
    this.reversePoints.set(point[1], newArr);
  } else {
    this.reversePoints.set(point[1], [point[0]]);
  }
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
  // 遍历查找可能的轴对齐正方形
  // 和point同轴的x和y
  let x = [],
  // 遍历hash
  // x值相同的y坐标集合
  for (let [key, value] of this.points) {
    if (key === point[0]) {
      y = value.filter((v) => v !== point[1]);
      break;
    }
  }
  // y值相同的x坐标集合
  for (let [key, value] of this.reversePoints) {
    if (key === point[1]) {
      x = value.filter((v) => v !== point[0]);
      break;
    }
  }
  // y坐标和x坐标个数
  const lenx = x.length;
  const leny = y.length;
  // console.log(x, y);
  // 正方形个数
  let ans = 0;
  // x，y同时有值才行
  if (lenx > 0 && leny > 0) {
    // 遍历leny (与Ponint y值相同的x坐标集合)
    for (let i = 0; i < lenx; i++) {
      // 矩阵边长
      const side = x[i] - point[0];
      let y1 = side + point[1];
      let y2 = point[1] - side;
      const y1Arr = this.reversePoints.get(y1);
      const y2Arr = this.reversePoints.get(y2);
      let a = 0;
      let b = 0;
      // 获取其他[point[0], side +- point[1]] [x[i], side +- point[1]];
      if (y1Arr !== null) {
        const newy1Arr = y1Arr.filter(v => v === point[0])
        a = newy1Arr.length;
      }
      if (y2Arr !== null) {
        const newy2Arr = y1Arr.filter(v => v === x[i])
        b = newy2Arr.length;
      }
      if (a && b) {
        ans+= a * b;
      } else {
        ans = ans + a + b;
      }

    }
  }
  return ans;
};

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */