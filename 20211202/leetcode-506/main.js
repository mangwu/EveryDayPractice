/**
 * @description 相对名次
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-02 19:42:36
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
//  给你一个长度为 n 的整数数组 score ，其中 score[i] 是第 i 位运动员在比赛中的得分。所有得分都 互不相同 。

//  运动员将根据得分 决定名次 ，其中名次第 1 的运动员得分最高，名次第 2 的运动员得分第 2 高，依此类推。运动员的名次决定了他们的获奖情况：

//  名次第 1 的运动员获金牌 "Gold Medal" 。
//  名次第 2 的运动员获银牌 "Silver Medal" 。
//  名次第 3 的运动员获铜牌 "Bronze Medal" 。
//  从名次第 4 到第 n 的运动员，只能获得他们的名次编号（即，名次第 x 的运动员获得编号 "x"）。
//  使用长度为 n 的数组 answer 返回获奖，其中 answer[i] 是第 i 位运动员的获奖情况。

// n == score.length
// 1 <= n <= 104
// 0 <= score[i] <= 106
// score 中的所有值 互不相同

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  // 本质上是对成绩进行排序，但是使用sort排序后无法得知的原始的数组坐标
  // 由于每个score值不一样，所以可以使用hash一一将index和score值进行对应
  // 排序完后在使用hash进行替换即可

  // 前三名的字符
  const topThree = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  // 新建hash
  const map = new Map();
  // 新建ans
  const ans = new Array(score.length);
  // 建立hash
  for (let i = 0; i < score.length; i++) {
    map.set(score[i], i);
  }
  // 排序
  score.sort((a, b) => b - a);
  // 遍历排序后结果，排序后的索引顺序就是名次
  for (let i = 0; i < score.length; i++) {
    // 通过map获取score的原始索引位置 i为名次 如果名次<=2 就是前三名 使用topThree替换名次
    ans[map.get(score[i])] = i <= 2 ? topThree[i] : (i + 1).toString();
  }
  return ans;
};
console.log(findRelativeRanks([5, 10, 2, 4, 9]));
console.log(findRelativeRanks([5, 9]));
