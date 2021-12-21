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
  console.log(ans);
  return ans;
};

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius2 = function (houses, heaters) {
  // 利用二分查找算法搜寻最小的heater
  // 注意要将heaters进行排序二分法才有效
  heaters.sort((a, b) => a - b);
  let ans = 0;
  for (let house of houses) {
    // 声明针对该房屋的最小半径
    let min = -1;
    // for (let heater of heaters) {
    //   let distance = Math.abs(house - heater);
    //   if (min === -1 || distance < min) {
    //     min = distance;
    //   }
    // }

    // 二分法查找最小半径
    // i j分别为house的距离最近的左右加热器
    let i = binarySearch(heaters, house);
    let j = i + 1;
    let leftDistance = i < 0 ? Number.MAX_VALUE : house - heaters[i];
    let rightDistance =
      j >= heaters.length ? Number.MAX_VALUE : heaters[j] - house;
    // 计算距离本house的最小值
    min = Math.min(leftDistance, rightDistance);
    // 保存距离本house中的最大值
    ans = Math.max(min, ans);
  }
  console.log(ans);
  return ans;
};
/**
 * @param {Array} nums 二分查询数组
 * @param {Number} target 二分查询对象
 * @returns {Number} 查询对象索引
 */
var binarySearch = (nums, target) => {
  if (nums.length === 0) return -1;
  // 声明区间 [left, right)
  let left = 0;
  let right = nums.length;
  // 如果nums最小值都比target大，可直接返回-1
  if (nums[left] > target) return -1;

  // 循环
  while (left < right) {
    // 声明mid
    let mid = Math.floor((left + right) / 2);
    // 右边界值，继续搜索右边
    if (target === nums[mid]) {
      // [mid+1, right)
      left = mid + 1;
    } else if (nums[mid] > target) {
      // [left, mid)
      right = mid;
    } else if (nums[mid] < target) {
      // [mid+1, right)
      left = mid + 1;
    }
  }
  // 实际返回的索引为距离target最小的左边的右边界值，如[2, 3, 3, 5] 查询4，就返回2(第二个3)
  return left - 1;
};

findRadius([2, 3, 5, 8, 9, 12], [1, 4, 8]);
findRadius2(
  [
    282475249, 622650073, 984943658, 144108930, 470211272, 101027544, 457850878,
    458777923,
  ],
  [
    (823564440,
    115438165,
    784484492,
    74243042,
    114807987,
    137522503,
    441282327,
    16531729,
    823378840,
    143542612),
  ],
  [
    823564440, 115438165, 784484492, 74243042, 114807987, 137522503, 441282327,
    16531729, 823378840, 143542612,
  ]
);
