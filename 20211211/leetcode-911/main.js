/**
 * @description  leetcode 911 在线选举
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-11 16:16:04
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function (persons, times) {
  this.persons = persons;
  this.times = times;
};

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
  // 再t时刻票数最多的人，如果票数分布一致，则返回最近的被投票的候选人
  let k = {}; // 票数分布
  let maxVotes = 0; //最大票数
  let ans = -1;

  // 遍历投票时刻获取票数分布
  for (let i = 0; i < this.times.length; i++) {
    if (t >= this.times[i]) {
      // 构造一个票数和候选人对应的对象
      k[this.persons[i]] ? (k[this.persons[i]] += 1) : (k[this.persons[i]] = 1);
      // 判断当前的候选人票数是否大于maxVotes
      if (k[this.persons[i]] >= maxVotes) {
        maxVotes = k[this.persons[i]];
        ans = this.persons[i];
      }
    } else {
      break;
    }
  }
  return ans;
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
const vote = new TopVotedCandidate(
  [0, 1, 1, 0, 0, 1, 0],
  [0, 5, 10, 15, 20, 25, 30]
);

console.log(vote);
console.log(vote.q(25));
