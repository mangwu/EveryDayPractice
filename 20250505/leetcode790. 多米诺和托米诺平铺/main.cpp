#include <vector>
using namespace std;

class Solution {
private:
  const int mod = 1000000007;

public:
  int numTilings(int n) {
    // 动态规划
    // 1 => 1
    // 2 => 1 + 1 => 2
    // 3 => 2 + 1 + 1*2 => 5
    // 4 => 5 + 2 + 2*2 => 11
    // 5 => 11 + 5 + 4 * 2 => 24
    vector<int> dp(n + 1, 0);
    dp[0] = 1;
    int preSum = 0;
    for (int i = 1; i <= n; i++) {
      // 多米诺的竖向排列
      dp[i] = dp[i - 1];
      if (i >= 2) {
        // 多米诺的横向排列
        dp[i] += dp[i - 2];
        dp[i] = dp[i] % mod;
      }
      // 托米诺的两种平铺
      if (i >= 3) {
        preSum += dp[i - 3];
        preSum = preSum % mod;
        dp[i] += (preSum * 2) % mod;
        dp[i] = dp[i] % mod;
      }
    }
    return dp[n];
  }
};
//