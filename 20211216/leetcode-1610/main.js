/**
 * @description leetcode1610
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-16 19:53:01
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
//  给你一个点数组 points 和一个表示角度的整数 angle ，你的位置是 location ，其中 location = [posx, posy] 且 points[i] = [xi, yi] 都表示 X-Y 平面上的整数坐标。

//  最开始，你面向东方进行观测。你 不能 进行移动改变位置，但可以通过 自转 调整观测角度。换句话说，posx 和 posy 不能改变。你的视野范围的角度用 angle 表示， 这决定了你观测任意方向时可以多宽。设 d 为你逆时针自转旋转的度数，那么你的视野就是角度范围 [d - angle/2, d + angle/2] 所指示的那片区域。

//  对于每个点，如果由该点、你的位置以及从你的位置直接向东的方向形成的角度 位于你的视野中 ，那么你就可以看到它。

//  同一个坐标上可以有多个点。你所在的位置也可能存在一些点，但不管你的怎么旋转，总是可以看到这些点。同时，点不会阻碍你看到其他点。

//  返回你能看到的点的最大数目。

/**
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */
var visiblePoints = function (points, angle, location) {
  /**
   * 1. 根据题意，就是返回points坐标数组中的，站在location，以angle视角能看到的最多坐标数
   * 2. 遍历每个点，每个点都可以和location形成一条射线,根据视角度，可以计算出两条射线
   * 3. 可以得出以points为邻接边时，两个区域内看到的点数，取大值
   * 4. 遍历完毕后即可得到最大值，该为暴力解法
   */
  // // 首先可以移动坐标系到location处，那么points也应该相应有更改
  // for (let i = 0; i < points.length; i++) {
  //   points[i][0] = points[i][0] - location[0];
  //   points[i][1] = points[i][1] - location[1];
  // }
  // // 声明保存最大个数的ans
  // let ans = 0;
  // for (const p of points.length) {
  //   // location到p的角度
  //   let lp;
  //   // 如果
  //   // 遍历其余的点 计算pother[0] * lp/360 - pother[1]  且 pother[0] * lp+ angle/360 - pother[1] 的两值满足坐标系的区域判断就是其区域的点

  // }
  // 上述的坐标系可以转化为相对于location的极角
  // 点p相对于location的极角为dp，找到[dp, dp+angle]区域内的最大数量即可
  // 极角转换使用反三角函数，已知(x, y)坐标，使用反正切函数是最好的
  // 但是JavaScript中的atan只能覆盖[0, pi], 使用atan2即可解决该问题,其返回值为[-pi, pi];
  // 1. 将相对于location的极角全部求出，按照极角大小进行排序
  // 2. 遍历每个坐标pi，求出该处的极角dpi，然后得到视角区域范围[dpi, dpi+angle]
  // 3. 利用二分查找快速处于[dpi, dpi+angle]中的极角个数
  // 4. 由于存在dpi+angle > 360度的情况，可以将极角数组的每个元素加360度到原数组后，防止翻转问题
  // 5. 求极角时，如果坐标刚好等于location，则属于特殊情况，将location的坐标单独处理

  // 保存极角的数组
  const polarDegree = [];
  // 记录坐标刚好和location重合的数量，作为最后值添加
  let sameCount = 0;
  // 首先可以移动坐标系到location处，那么points也应该相应有更改,同时计算出极角
  for (let i = 0; i < points.length; i++) {
    points[i][0] = points[i][0] - location[0];
    points[i][1] = points[i][1] - location[1];
    // 处理特殊情况
    if (points[i][0] === 0 && points[i][1] === 0) {
      sameCount++;
      continue;
    }
    // 计算极角 使用[-pi, pi]表示的极角
    const degree = Math.atan2(points[i][1], points[i][0]);
    polarDegree.push(degree);
  }
  // 排序极角
  polarDegree.sort((a, b) => a - b);

  // 处理当极角加上angle大于360的情况, 每个加上360度后放入极角中
  const pdL = polarDegree.length;
  for (let i = 0; i < pdL; i++) {
    polarDegree.push(polarDegree[i] + Math.PI * 2);
  }

  // 记录视角的最大值
  let maxCount = 0;
  // 将视角转化为圆周率处理
  const toPi = (angle * Math.PI) / 180;
  // 遍历二分查找处于[dpi, dpi+toPi]中的极角
  for (let i = 0; i < pdL; i++) {
    // 二分查找获取本次的数量
    const iteration = binarySearch(polarDegree, polarDegree[i] + toPi, false);
    maxCount = Math.max(maxCount, iteration - i);
  }
  console.log(maxCount);
  // 最后要加上特殊值(和location一致的值)
  return maxCount + sameCount;
};
const binarySearch = (nums, target, lower) => {
  let left = 0,
    right = nums.length - 1;
  let ans = nums.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};

console.log(
  visiblePoints(
    [
      [1, 0],
      [2, 1],
    ],
    13,
    [1, 1]
  )
);
