#include <cmath>
#include <vector>

using namespace std;
class Solution {
public:
  long long maximumTripletValue(vector<int> &nums) {
    int n = nums.size();
    vector<int> rightMaxs(n + 1, 0);
    for (int i = n - 1; i >= 0; i--) {
      rightMaxs[i] = max(rightMaxs[i + 1], nums[i]);
    }
    long long leftMax = nums[0];
    long long res = 0;
    for (int j = 1; j < n - 1; j++) {
      long long curNum = nums[j];
      res = max(res, (leftMax - curNum) * rightMaxs[j + 1]);
      leftMax = max(leftMax, curNum);
    }
    return res;
  }
};