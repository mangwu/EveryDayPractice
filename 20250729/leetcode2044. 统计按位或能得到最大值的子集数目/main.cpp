#include <vector>

using namespace std;

class Solution {
public:
  int countMaxOrSubsets(vector<int> &nums) {
    int n = nums.size();
    int maxVal = 1 << n;
    int orSum = 0;
    for (int num : nums) {
      orSum = orSum | num;
    }
    int res = 0;
    for (int mask = 1; mask < maxVal; mask++) {
      int curOrSum = 0;
      for (int i = 0; i < n; i++) {
        if ((mask >> i) & 1 == 1) {
          curOrSum = curOrSum | nums[i];
        }
      }
      if (curOrSum == orSum) {
        res++;
      }
    }
    return res;
  }
};