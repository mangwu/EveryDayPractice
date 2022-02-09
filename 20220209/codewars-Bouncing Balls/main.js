/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-09 16:28:52                                                  *
 * @LastModifiedDate: 2022-02-09 18:06:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 弹射球
// 给定一个高度h，球从该高度处落下
// 给定一个弹性系数bounce，球弹起的高度为开始落下的高度和其相乘得出，其值位于(0 ,1)之间
// 给定一个观察高度window, 球经过该高度时能够记录次数，其值小于h，且只有在球弹起的高度严格大于window才能观察到

// 返回在widnow高度能观察到球的次数
// 给出的值不满足条件时，返回-1

function bouncingBall(h, bounce, window) {
  // 不符合条件直接返回-1
  if (!(h > 0 && bounce > 0 && bounce < 1 && window > 0 && window < h))
    return -1;
  // 第一次落下一定能够观察到一次
  let ans = 1;
  // 每当球弹起的高度大于window时，都能观察到两次
  // 一次是球上升时，一次是球下落时
  while (h * bounce > window) {
    h = h * bounce;
    ans = ans + 2;
  }
  return ans;
}

function bouncingBall2(h, bounce, window) {
  // 进一步简化
  let rebounds = -1;
  // 判断是否符合条件
  if (bounce > 0 && bounce < 1 && window > 0) {
    // 第一次判断间接确定了window不能大于h，然后将rebounds值设置为1（第一次落下观察记录的次数）
    while (h > window) {
      h *= bounce;
      rebounds += 2;
    }
  }
  return rebounds;
}
