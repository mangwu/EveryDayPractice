// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const n = nums.length;
  const set = new Set();
  const visited = new Array(n).fill(false);
  const path = [];
  const dfs = () => {
    let flag = true;
    for (let i = 0; i < n; i++) {
      if (visited[i]) {
        continue;
      }
      // 选择nums[i]
      flag = false;
      visited[i] = true;
      path.push(nums[i]);
      dfs();
      visited[i] = false;
      path.pop();
    }
    if (flag) {
      set.add(path.join(","));
    }
  };
  dfs();
  return [...set].map((v) => v.split(",").map((val) => parseInt(val)));
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const visited = new Array(n).fill(false);
  const path = [];
  const ans = [];
  // idx表示当前位置在nums中的元素进行选择
  const dfs = (idx) => {
    if (idx === n) {
      // 每个位置枚举完成
      ans.push(path.slice());
      return;
    }
    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      // 对于连续相同的数，nums[i] === nums[i-1]，
      // 当前位置应该只选择第一个未访问的相同的数，避免重复
      if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;
      // 选择nums[i]
      visited[i] = true;
      path[idx] = nums[i];
      dfs(idx + 1);
      visited[i] = false;
      // path无需恢复现场，可以直接覆盖
    }
  };
  dfs(0);
  return ans;
};
