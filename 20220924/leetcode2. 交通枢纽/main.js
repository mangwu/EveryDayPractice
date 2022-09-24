/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-24 15:11:58                                                  *
 * @LastModifiedDate: 2022-09-24 15:12:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 为了缓解「力扣嘉年华」期间的人流压力，组委会在活动期间开设了一些交通专线。
// path[i] = [a, b] 表示有一条从地点 a通往地点 b 的 单向 交通专线。
// 若存在一个地点，满足以下要求，我们则称之为 交通枢纽：

// 所有地点（除自身外）均有一条 单向 专线 直接 通往该地点；
// 该地点不存在任何 通往其他地点 的单向专线。
// 请返回交通专线的 交通枢纽。若不存在，则返回 -1。

// 注意：

// 对于任意一个地点，至少被一条专线连通。