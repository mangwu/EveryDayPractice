#include <algorithm>
#include <cmath>
#include <vector>
using namespace std;

class Solution {
public:
  int findLHS(vector<int> &nums) {
    int n = nums.size();
    sort(nums.begin(), nums.end());
    int res = 0;
    int right = 0;
    int left = 0;
    while (left < n) {
      while (right < n && nums[right] - nums[left] < 2) {
        right++;
      }
      if (nums[right - 1] - nums[left] == 1) {
        res = max(res, right - left);
      }
      int minVal = nums[left++];
      while (left < n && nums[left] == minVal) {
        left++;
      }
    }
    return res;
  }
};