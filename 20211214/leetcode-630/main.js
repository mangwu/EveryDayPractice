/**
 * @description leetcode630
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-14 19:10:30
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
//  这里有 n 门不同的在线课程，按从 1 到 n 编号。给你一个数组 courses ，其中 courses[i] = [durationi, lastDayi] 表示第 i 门课将会 持续 上 durationi 天课，并且必须在不晚于 lastDayi 的时候完成。

//  你的学期从第 1 天开始。且不能同时修读两门及两门以上的课程。

//  返回你最多可以修读的课程数目。

/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
  // 该题的关键在于得出课程的权重，根据权重对课程进行排序，按住顺序一个个进行修读，直到时间不够
  // 而最终权重计算的关键在于如何修读最多的课程
  // 贪心算法的原理就是这样，对问题求解时每次都选择最优解答
  // 对于开始时间是x， (t1, d1)和(t2, d2)的两门课程，
  // 在都能在deadline 学习完的情况下，肯定是deadline在前的好
  // 而对于多门课程，如果按照d的顺序排列学习，遇到超过d的情况
  // 如果前面的课程中有一门耗时最多的课程，且它的耗时大于正要学习的课程那么可以其替换为本门课程

  // 先按照deadline进行排序
  courses.sort((a, b) => a[1] - b[1]);

  // 最大值优先队列
  const pQueue = [];

  // 优先队列的时间
  let total = 0;

  // 遍历courses
  for (let i = 0; i < courses.length; i++) {
    // deadline和花费时间
    let dl = courses[i][1];
    let t = courses[i][0];
    // 如果总时间加花费时间少于 dl则可以入队
    if (total + t <= dl) {
      total += t;
      pQueue.push(t);
      pQueue.sort((a, b) => b - a);
      console.log(pQueue);
    } else if (pQueue.length > 0 && pQueue[0] > t) {
      // 否则 比较花费最大的是否大于t
      total = total - pQueue.shift() + t;
      pQueue.push(t);
      pQueue.sort((a, b) => b - a);
    }
  }
  return pQueue.length;
};

console.log(
  scheduleCourse([
    [5316, 5539],
    [1968, 5258],
    [6008, 6376],
    [4025, 5081],
    [9422, 9652],
    [1300, 7475],
    [3438, 5926],
    [4334, 7554],
    [2454, 2481],
    [1382, 7434],
    [4280, 7787],
    [2834, 3481],
    [4439, 5925],
    [3848, 9651],
    [5682, 5927],
    [2745, 8029],
    [3898, 7332],
    [1744, 8260],
    [3895, 7675],
    [5257, 6836],
    [5586, 7090],
    [2212, 7901],
  ])
);
