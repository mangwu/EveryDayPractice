/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-10 20:43:47                                                  *
 * @LastModifiedDate: 2025-02-10 20:45:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 王强决定把年终奖用于购物，他把想买的物品分为两类：主件与附件。
// 主件可以没有附件，至多有 
// 2 个附件。附件不再有从属于自己的附件。如果要买归类为附件的物品，必须先买该附件所属的主件，且每件物品只能购买一次。


// 王强查到了每件物品的价格，而他只有 n 元的预算。为了先购买重要的物品，他给每件物品规定了一个重要度，用整数 1∼5 表示。他希望在花费不超过 
// n 元的前提下，使自己的满意度达到最大。

// 满意度是指所购买的每件物品的价格与重要度的乘积的之和
// 请你帮助王强计算可获得的最大的满意度。

// 特别地，保证全部物品的价格 v 均为 10 的倍数。