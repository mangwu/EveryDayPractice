#include <vector>

using namespace std;
class Solution {
public:
  int minZeroArray(vector<int> &nums, vector<vector<int>> &queries) {
    int n = queries.size();
    int left = 0;
    int right = n;
    while (left <= right) {
      int mid = (left + right) / 2;
      if (checkKValid(nums, queries, mid)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left <= n ? left : -1;
  }

private:
  bool checkKValid(vector<int> &nums, vector<vector<int>> &queries, int k) {
    int n = nums.size();
    vector<int> diff(n + 1, 0);
    for (int i = 0; i < k; i++) {
      auto query = queries[i];
      diff[query[0]] -= query[2];
      diff[query[1] + 1] += query[2];
    }
    if (nums[0] + diff[0] > 0)
      return false;
    for (int i = 1; i < n; i++) {
      diff[i] += diff[i - 1];
      if (nums[i] + diff[i] > 0) {
        return false;
      }
    }
    return true;
  }
};