#include <algorithm>
#include <vector>
using namespace std;

class Solution {
private:
  const long long maxMod = 1000000007;

public:
  int numSubseq(vector<int> &nums, int target) {
    long long res = 0;
    sort(nums.begin(), nums.end());
    int n = nums.size();
    // 计算2**n的每个mod值
    vector<int> f(n, 1);
    for (int i = 1; i < n; i++) {
      f[i] = (long long)f[i - 1] * 2 % maxMod;
    }
    // 二分查找+组合总数
    for (int i = 0; i < n; i++) {
      // 找到第一个大于target - nums[i]的值
      if (target - nums[i] < nums[i]) {
        break;
      }
      int left = i + 1;
      int right = n; // 当最后一个元素都小于target - nums[i]时，n是合法值
      while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] > target - nums[i]) {
          right = mid;
        } else {
          left = mid + 1;
        }
      }
      res = (res + f[left - i - 1]) % maxMod;
    }
    return res;
  }
};