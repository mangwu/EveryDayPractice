#include <algorithm>
#include <vector>

using namespace std;

class Solution {
public:
  long long
  maximumValueSum(vector<int> &nums, int k, vector<vector<int>> &edges) {
    int n = nums.size();
    vector<int> diff(n, 0);
    long long res = 0;
    for (int i = 0; i < n; i++) {
      diff[i] = (nums[i] ^ k) - nums[i];
      res += nums[i];
    }
    sort(diff.begin(), diff.end(), [](int a, int b) { return a > b; });
    for (int i = 0; i < n; i += 2) {
      if (i + 1 < n && diff[i] + diff[i + 1] > 0) {
        res += diff[i] + diff[i + 1];
      } else {
        break;
      }
    }
    return res;
  }
};