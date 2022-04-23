/*
 * @Author: mangwu                                                             *
 * @File: main3.js                                                             *
 * @Date: 2022-04-23 16:26:34                                                  *
 * @LastModifiedDate: 2022-04-23 16:26:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 欢迎各位勇者来到力扣城，本次试炼主题为「打地鼠」。
// middle_img_v2_d5d09656-0616-4a80-845e-ece461c5ba9g.png
// 勇者面前有一个大小为 3*3 的打地鼠游戏机，地鼠将随机出现在各个位置，moles[i] = [t,x,y] 表示在第 t 秒会有地鼠出现在 (x,y) 位置上，并于第 t+1 秒该地鼠消失。

// 勇者有一把可敲打地鼠的锤子，初始时刻（即第 0 秒）锤子位于正中间的格子 (1,1)，锤子的使用规则如下：

// 锤子每经过 1 秒可以往上、下、左、右中的一个方向移动一格，也可以不移动
// 锤子只可敲击所在格子的地鼠，敲击不耗时
// 请返回勇者最多能够敲击多少只地鼠。

// 注意：

// 输入用例保证在相同时间相同位置最多仅有一只地鼠
// 示例 1：

// 输入： moles = [[1,1,0],[2,0,1],[4,2,2]]

// 输出： 2

// 解释：
// 第 0 秒，锤子位于 (1,1)
// 第 1 秒，锤子移动至 (1,0) 并敲击地鼠
// 第 2 秒，锤子移动至 (2,0)
// 第 3 秒，锤子移动至 (2,1)
// 第 4 秒，锤子移动至 (2,2) 并敲击地鼠
// 因此勇者最多可敲击 2 只地鼠

// 示例 2：

// 输入：moles = [[2,0,2],[5,2,0],[4,1,0],[1,2,1],[3,0,2]]

// 输出：3

// 解释：
// 第 0 秒，锤子位于 (1,1)
// 第 1 秒，锤子移动至 (2,1) 并敲击地鼠
// 第 2 秒，锤子移动至 (1,1)
// 第 3 秒，锤子移动至 (1,0)
// 第 4 秒，锤子在 (1,0) 不移动并敲击地鼠
// 第 5 秒，锤子移动至 (2,0) 并敲击地鼠
// 因此勇者最多可敲击 3 只地鼠