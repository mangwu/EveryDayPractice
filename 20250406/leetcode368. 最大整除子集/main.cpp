#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;
class Solution {
public:
  vector<int> largestDivisibleSubset(vector<int> &nums) {
    int n = nums.size();
    sort(nums.begin(), nums.end());
    vector<vector<int>> dp(n, {1, 1});
    int resMax = 1;
    int resIdx = 0;
    for (int i = 1; i < n; i++) {
      for (int j = i - 1; j >= 0; j--) {
        if (nums[i] % nums[j] == 0 && dp[i][1] < dp[j][1] + 1) {
          dp[i][0] = j;
          dp[i][1] = dp[j][1] + 1;
          if (dp[i][1] > resMax) {
            resMax = dp[i][1];
            resIdx = i;
          }
        }
      }
    }
    vector<int> res = {nums[resIdx]};
    while (resMax > 1) {
      resIdx = dp[resIdx][0];
      res.push_back(nums[resIdx]);
      resMax--;
    }
    return res;
  }
};

int main(void) {
  Solution solution;
  vector<int> nums = {3, 4, 16, 8};
  vector<int> res = solution.largestDivisibleSubset(nums);
  for (auto item : res) {
    cout << item << '\t' << endl;
  }
  return 0;
}