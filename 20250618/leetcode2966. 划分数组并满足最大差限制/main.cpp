#include <algorithm>
#include <vector>
using namespace std;

class Solution {
public:
  vector<vector<int>> divideArray(vector<int> &nums, int k) {
    int n = nums.size();
    sort(nums.begin(), nums.end());
    int m = n / 3;
    vector<vector<int>> res(m, vector<int>(3, 0));
    for (int j = 0; j < m; j++) {
      if (nums[j * 3 + 2] - nums[j * 3] > k) {
        return {};
      }
      for (int i = 0; i < 3; i++) {
        res[j][i] = nums[j * 3 + i];
      }
    }
    return res;
  }
};