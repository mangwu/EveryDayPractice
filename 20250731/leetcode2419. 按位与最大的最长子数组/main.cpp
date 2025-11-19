#include <vector>
#include <cmath>
using namespace std;

class Solution {
public:
  int longestSubarray(vector<int> &nums) {
    int n = nums.size();
    // 按位与的最大值就是nums的最大值，因为andSum & nums[i] <= nums[i]
    // 所以最大与值的最长子数组就是最大值的连续个数
    int maxVal = -1;
    for (int num : nums) {
      maxVal = max(maxVal, num);
    }
    int res = 1;
    for (int i = 0; i < n; i++) {
      int curNum = 0;
      while (i < n && nums[i] == maxVal) {
        curNum++;
        i++;
      }
      res = max(res, curNum);
    }
    return res;
  }
};