#include <cmath>
#include <vector>

using namespace std;

class Solution {
public:
  bool canPartition(vector<int> &nums) {
    int n = nums.size();
    int sum = 0;
    for (int num : nums) {
      sum += num;
    }
    if (sum % 2 == 1) {
      return false;
    }
    vector<vector<int>> cache(n, vector<int>(sum / 2 + 1, -1));
    return dfs(0, sum / 2, cache, nums);
  }
  bool dfs(int i, int rest, vector<vector<int>> &cache, vector<int> &nums) {
    if (i == nums.size())
      return rest == 0;
    if (rest < 0)
      return false;
    if (cache[i][rest] != -1)
      return cache[i][rest]; // 0=>false 1=>true
    cache[i][rest] =
      dfs(i + 1, rest - nums[i], cache, nums) || dfs(i + 1, rest, cache, nums);
    return cache[i][rest];
  }
  bool canPartition2(vector<int> &nums) {
    int n = nums.size();
    int sum = 0;
    int maxNum = 0;
    for (int num : nums) {
      sum += num;
      maxNum = max(maxNum, num);
    }
    int target = sum / 2;
    if (sum % 2 == 1 || maxNum > target)
      return false;
    // dp[i][j]前i个（从0开始）元素是否能选择一些元素组合成j
    vector<vector<bool>> dp(n, vector<bool>(target + 1, false));
    // dp[i][0]都是true，前i个元素都不选就可以合成0
    for (int i = 0; i < n; i++) {
      dp[i][0] = true;
    }
    // dp[0][nums[0]]是true，前0个元素，选择第一个元素，那么就能合成nums[0]
    dp[0][nums[0]] = true;
    for (int i = 1; i < n; i++) {
      int num = nums[i];
      for (int j = 1; j <= target; j++) {
        // 不选择当前元素num，就是前i-1个合成j的情况
        dp[i][j] = dp[i - 1][j];
        // 选择当前元素，要满足num<=j，那么前面i-1就要合成j-num
        if (num <= j) {
          dp[i][j] = dp[i][j] || dp[i - 1][j - num];
        }
      }
    }
    return dp[n - 1][target];
  }
};