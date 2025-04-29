#include <cmath>
#include <vector>
using namespace std;
class Solution {
public:
  long long countSubarrays(vector<int> &nums, int k) {
    int n = nums.size();
    int maxNum = 0;
    for (int num : nums) {
      maxNum = max(num, maxNum);
    }
    // 计算大于等于k次的子数组数量
    int eqMaxNum = 0; // 当前子数组中maxNum数量
    long long res = 0;
    int right = 0;
    for (int i = 0; i < n; i++) {
      while (right < n && eqMaxNum < k) {
        if (nums[right++] == maxNum) {
          eqMaxNum++;
        }
      }
      if (eqMaxNum >= k) {
        res += (n - right + 1);
      } else {
        break;
      }
      if (nums[i] == maxNum) {
        eqMaxNum--;
      }
    }
    return res;
  }
};