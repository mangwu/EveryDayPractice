/**
 * @description  main.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-02-13 19:23:49
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
//  https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

// 计算时间间隔之和
// 时间间隔使用一个有两个元素的数组表示，如[1, 4],其表示的时间间隔为3
// 现在给出一个包含时间间隔数组的数组，计算它们的总时间间隔
// 需要注意的是：重叠间隔应该只计算一次，
// 如[[1, 4], [5, 8], [2, 5]] 计算时注意[1, 4]和[2, 5]有重叠的部分，相当于[1, 5]，所以最终结果为4 + 3 = 7

/**
 * @description 计算时间间隔之和
 * @param {Array} intervals 时间间隔数组
 * @returns {Number} 时间间隔之和
 */
function sumIntervals(intervals) {
  //TODO
  // 本题关键，重叠怎么计算
  // 遍历一遍的想法是
  // 1. 遍历时对本次的时间间隔数组进行保存，计算时间间隔与ans想加
  // 2. 对比之前保存的时间间隔，查看本次的时间间隔数组是否是重叠的，不是就正常计算保存，
  // 3. 如果含有重叠部分，计算重叠部分，加上后减去即可，并更新保存的时间间隔数据
  // 上述的步骤需要构建一个能够保存时间间隔的数据结构，能通过方法获取当前是否有重叠，并能方法重叠时间

  // 下面的这种方法对大数字无效，会超出时间和空间限制
  const set = new Set();
  for (const interval of intervals) {
    for (let i = interval[0] + 1; i <= interval[1]; i++) {
      set.add(i);
    }
  }
  return set.size;
}

/**
 * @description 计算时间间隔之和
 * @param {Array} intervals 时间间隔数组
 * @returns {Number} 时间间隔之和
 */
function sumIntervals2(intervals) {
  //TODO
  // 本题关键，重叠怎么计算
  // 遍历一遍的想法是
  // 1. 遍历时对本次的时间间隔数组进行保存，计算时间间隔与ans想加
  // 2. 对比之前保存的时间间隔，查看本次的时间间隔数组是否是重叠的，不是就正常计算保存，
  // 3. 如果含有重叠部分，计算重叠部分，加上后减去即可，并更新保存的时间间隔数据
  // 上述的步骤需要构建一个能够保存时间间隔的数据结构，能通过方法获取当前是否有重叠，并能方法重叠时间

  // 排序 按照时间间隔的第一个元素排序
  intervals.sort((a, b) => a[0] - b[0]);
  // console.log(intervals);
  // 声明当前的最小值和最大值
  let min = intervals[0][0];
  let max = intervals[0][1];
  // 初始化ans
  let ans = max - min;
  // 变量intervals
  for (let i = 1; i < intervals.length; i++) {
    const curMin = intervals[i][0];
    const curMax = intervals[i][1];
    // 检查是否重叠

    if (curMin >= max) {
      // 不重叠
      ans = ans + curMax - curMin;
      // 更新max
      max = curMax;
    } else if (curMax > max) {
      // 重叠，但是只是部分重叠
      ans = ans + curMax - max;
      // 更新max
      max = curMax;
    }
    // 重叠，且是包裹，不用管了
  }
  // console.log(ans);
  return ans;
}

sumIntervals2([
  [0, 3],
  [-1, 5],
  [2, 9],
  [1, 5],
  [10, 20],
  [1, 6],
  [16, 19],
  [5, 11],
]);
