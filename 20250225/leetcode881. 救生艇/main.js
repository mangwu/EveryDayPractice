// 给定数组 people 。people[i]表示第 i 个人的体重 ，船的数量不限，每艘船可以承载的最大重量为 limit。

// 每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit。

// 返回 承载所有人所需的最小船数 。

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  // 双指针
  people.sort((a, b) => a - b);
  const n = people.length;
  let left = 0;
  let right = n - 1;
  let res = 0;
  while (left < right) {
    const sum = people[left] + people[right];
    if (sum <= limit) {
      res++;
      left++;
      right--;
    } else {
      right--;
      res++;
    }
  }
  if (left === right) res++;
  return res;
};
