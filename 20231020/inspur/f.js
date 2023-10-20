/*
 * @Author: mangwu                                                             *
 * @File: f.js                                                                 *
 * @Date: 2023-10-20 09:45:09                                                  *
 * @LastModifiedDate: 2023-10-20 09:49:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 今天牛牛和牛妹在一起玩石头剪刀布的游戏。
// 石头(Rock)可以用
// �
// R表示，剪刀(Scissors)可以用
// �
// S表示，布(Paper)可以用
// �
// P表示。
// 石头剪刀布游戏中，石头遇到剪刀会胜利，剪刀遇到布会胜利，布遇到石头会胜利。

// 牛牛和牛妹玩了太多局游戏了，现在牛牛记不得自己的得分是多少了，牛牛现在给你他们两个玩游戏时的出拳顺序序列
// �
// ,
// �
// a,b，请你计算牛牛的得分(一局中牛牛获胜得一分，落败减一分，平局不得分)。

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param a string字符串
 * @param b string字符串
 * @return int整型
 */
function getScore(a, b) {
  // write code here
  let ans = 0;
  const n = a.length;
  for (let i = 0; i < n; i++) {
    switch (a[i]) {
      case "R":
        // 石头
        if (b[i] === "S") {
          ans++;
        } else if (b[i] === "P") {
          ans--;
        }
        break;
      case "S":
        // 剪刀
        if (b[i] === "P") {
          ans++;
        } else if (b[i] === "R") {
          ans--;
        }
        break;
      case "P":
        // 布
        if (b[i] === "R") {
          ans++;
        } else if (b[i] === "S") {
          ans--;
        }
        break;
      default:
        break;
    }
  }
  return ans;
}
module.exports = {
  getScore: getScore,
};
