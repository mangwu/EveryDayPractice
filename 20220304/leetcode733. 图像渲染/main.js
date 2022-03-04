/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-04 13:55:35                                                  *
 * @LastModifiedDate: 2022-03-04 14:41:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有一幅以 m x n 的二维整数数组表示的图画 image ，其中 image[i][j] 表示该图画的像素值大小。

// 你也被给予三个整数 sr ,  sc 和 newColor 。你应该从像素 image[sr][sc] 开始对图像进行 上色填充 。

// 为了完成 上色工作 ，从初始像素开始，记录初始坐标的 上下左右四个方向上 像素值与初始坐标相同的相连像素点，接着再记录这四个方向上符合条件的像素点与他们对应 四个方向上 像素值与初始坐标相同的相连像素点，……，重复该过程。将所有有记录的像素点的颜色值改为 newColor 。

// 最后返回 经过上色渲染后的图像 。

const DIRS = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  // 简单BFS遍历题目
  // 要被渲染的颜色
  const color = image[sr][sc];
  // 如果相同颜色就不用DFS遍历了
  if (color == newColor) {
    return image;
  }
  // 图像长宽
  const lenx = image.length;
  const leny = image[0].length;

  // BFS访问记录
  const visited = [];
  visited[sr * leny + sc] = true;
  // 队列
  let queue = [[sr, sc]];
  // BFS遍历
  while (queue.length > 0) {
    const ntx = [];
    for (const q of queue) {
      const i = q[0];
      const j = q[1];
      image[i][j] = newColor;
      for (const dir of DIRS) {
        const x = i + dir[0];
        const y = j + dir[1];
        if (
          x >= 0 &&
          x < lenx &&
          !visited[x * leny + y] &&
          y >= 0 &&
          y < leny &&
          image[x][y] === color
        ) {
          visited[x * leny + y] = true;
          ntx.push([x, y]);
        }
      }
    }
    // console.log(ntx);
    queue = ntx;
  }
  // console.log(image);
  return image;
};

floodFill(
  [
    [0, 0, 1],
    [0, 1, 1],
  ],
  1,
  1,
  1
);
