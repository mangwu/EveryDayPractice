#include <vector>

using namespace std;

class Solution {
public:
  bool isZeroArray(vector<int> &nums, vector<vector<int>> &queries) {
    // 差分数组
    int n = nums.size();
    vector<int> diff(n + 1, 0);
    for (auto &query : queries) {
      diff[query[0]]--;
      diff[query[1] + 1]++;
    }
    // 求diff的前缀和
    for (int i = 1; i < n; i++) {
      diff[i] += diff[i - 1];
    }
    for (int i = 0; i < n; i++) {
      if (nums[i] + diff[i] > 0)  {
        return false;
      }
    }
    return true;
  }
};