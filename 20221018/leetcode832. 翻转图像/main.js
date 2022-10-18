/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-18 10:23:40                                                  *
 * @LastModifiedDate: 2022-10-18 10:29:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个 n x n 的二进制矩阵 image ，先 水平 翻转图像，然后 反转 图像并返回 结果 。

// 水平翻转图片就是将图片的每一行都进行翻转，即逆序。

// 例如，水平翻转 [1,1,0] 的结果是 [0,1,1]。
// 反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。

// 例如，反转 [0,1,1] 的结果是 [1,0,0]。
//

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  image.forEach((v) => {
    v.reverse().forEach((val, i) => (v[i] = val ^ 1));
    console.log(v);
  });
  return image;
};
