/**
 * @description leetcode-475
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-20 18:42:17
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

//  冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。

//  在加热器的加热半径范围内的每个房屋都可以获得供暖。

//  现在，给出位于一条水平线上的房屋 houses 和供暖器 heaters 的位置，请你找出并返回可以覆盖所有房屋的最小加热半径。

//  说明：所有供暖器都遵循你的半径标准，加热的半径也一样。

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  // 1. heaters是一个数组，其值表示加热器的在x轴的位置,长度表示加热器的长度
  // 2. houses是一个数组，其值表示需要被供暖的房间的在x轴的位置
  // 3. 可以不必从heaters角度去看，而是从houses角度去看
  // 4. 每个房屋距离的最近的heater就是该房屋与该heater的最小半径
  // 5. 计算出每个房屋距离最近的heater之后，选则其中最大的距离就可以覆盖每个房屋了
  // 6. 且能保证这个最大距离恰好是对于所有房屋的最小半径，因为总有一个房屋距离heater的距离最远，这个极限值就是最小半径
  // 7. 这种暴力解法缺点在于未利用二分查找节省执行时间，在搜寻一个距离房屋最小的热水器时可以用二分查找
  let ans = 0;
  for (let house of houses) {
    // 声明针对该房屋的最小半径
    let min = -1;
    for (let heater of heaters) {
      let distance = Math.abs(house - heater);
      if (min === -1 || distance < min) {
        min = distance;
      }
    }
    if (min > ans) {
      ans = min;
    }
  }
  return ans;
};

findRadius([2, 5, 8, 9, 12], [1, 4, 8]);
