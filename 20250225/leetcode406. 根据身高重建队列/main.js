// 假设有打乱顺序的一群人站成一个队列，数组 people 表示队列中一些人的属性（不一定按顺序）。每个 people[i] = [hi, ki] 表示第 i 个人的身高为 hi ，前面 正好 有 ki 个身高大于或等于 hi 的人。

// 请你重新构造并返回输入数组 people 所表示的队列。返回的队列应该格式化为数组 queue ，其中 queue[j] = [hj, kj] 是队列中第 j 个人的属性（queue[0] 是排在队列前面的人）。

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  // 优先查找身高低的，如果身高相同，查找前面人数多的
  people.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1]));
  const n = people.length;
  const ans = new Array(n).fill(-1);
  for (const item of people) {
    // 前面要有item[1]个空位预留
    let cur = 0; // 记录预留的个数，但是个数等于item[1]时就确定了位置
    for (let i = 0; i < n; i++) {
      if (cur === item[1] && ans[i] === -1) {
        // 确认位置
        ans[i] = item;
        break;
      }
      // 判断是否是预留位置
      if (ans[i] === -1 || ans[i][0] >= item[0]) cur++;
    }
  }
  return ans;
};
