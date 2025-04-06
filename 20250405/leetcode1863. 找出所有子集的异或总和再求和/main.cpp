#include <vector>

using namespace std;

class Solution {
public:
  int subsetXORSum(vector<int> &nums) {
    int n = nums.size();
    int maxNum = 1 << n;
    int res = 0;
    for (int mask = 1; mask < maxNum; mask++) {
      int cur = 0;
      for (int i = 0; i < n; i++) {
        if (((mask >> i) & 1) == 1) {
          cur = cur ^ nums[i];
        }
      }
      res += cur;
    }
    return res;
  }
};