/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-08-20 09:00:22                                                  *
 * @LastModifiedDate: 2024-08-20 09:03:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 给你有一个 非负 整数 k 。有一个无限长度的台阶，最低 一层编号为 0 。

// Alice 有一个整数 jump ，一开始值为 0 。Alice 从台阶 1 开始，可以使用 任意 次操作，目标是到达第 k 级台阶。假设 Alice 位于台阶 i ，一次 操作 中，Alice 可以：

// 向下走一级到 i - 1 ，但该操作 不能 连续使用，如果在台阶第 0 级也不能使用。
// 向上走到台阶 i + 2jump 处，然后 jump 变为 jump + 1 。
// 请你返回 Alice 到达台阶 k 处的总方案数。

// 注意，Alice 可能到达台阶 k 处后，通过一些操作重新回到台阶 k 处，这视为不同的方案。

/**
 * @param {number} k
 * @return {number}
 */
var waysToReachStair = function(k) {
  
};