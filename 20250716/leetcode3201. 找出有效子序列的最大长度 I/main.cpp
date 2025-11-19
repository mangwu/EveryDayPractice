#include <cmath>
#include <vector>
using namespace std;

class Solution {
public:
  int maximumLength(vector<int> &nums) {
    // 偶偶偶
    // 奇奇奇
    int res = 0;
    int n = nums.size();
    int oddNum = 0;
    for (int num : nums) {
      if (num % 2 == 1) {
        oddNum++;
      }
    }
    res = max(oddNum, n - oddNum);
    // 偶奇
    bool preIsOdd = bool(nums[0] % 2);
    int num = 1;
    for (int i = 1; i < n; i++) {
      if (preIsOdd && nums[i] % 2 == 0) {
        preIsOdd = false;
        num++;
      } else if (!preIsOdd && nums[i] % 2 == 1) {
        preIsOdd = true;
        num++;
      }
    }
    return max(num, res);
  }
};