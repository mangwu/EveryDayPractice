#include <algorithm>
#include <vector>

using namespace std;

class Solution {
public:
  long long countFairPairs(vector<int> &nums, int lower, int upper) {
    const int n = nums.size();
    sort(nums.begin(), nums.end()); // 排序数组
    long long res = 0;
    // nums[i] + nums[j] >= lower && nums[i] + nums[j] <= upper
    // nums[j] >= lower - nums[i] && nums[j] <= upper - nums[i]
    for (int i = 0; i < n; i++) {
      int lowest = lower - nums[i];
      int upperest = upper - nums[i];
      // 找到第一个大于等于lowest的数
      int l = i + 1;
      int r = n - 1;
      while (l <= r) {
        int mid = (l + r) / 2;
        if (nums[mid] < lowest) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
      if (l >= n) {
        continue; // 没有符合条件的数
      }
      int start = l;
      l = i + 1;
      r = n - 1;
      // 找到第一个大于upperest的数
      while (l <= r) {
        int mid = (l + r) / 2;
        if (nums[mid] <= upperest) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
      int end = r;
      res += end - start + 1; // 计算符合条件的数的个数
    }
    upp return res;
  }
  long long countFairPairs(vector<int> &nums, int lower, int upper) {
    // 使用C++内置的二分查找函数
    int n = nums.size();
    sort(nums.begin(), nums.end());
    long long ans = 0ll;
    // nums[i] + nums[j] >= lower && nums[i] + nums[j] <= upper
    // nums[j] >= lower - nums[i] && nums[j] <= upper - nums[i]

    for (int i = 0; i < n; i++) {
      int lowest = lower - nums[i];
      int upperest = upper - nums[i];
      // 找到第一个大于等于lowest的元素
      auto startIter = lower_bound(nums.begin() + i + 1, nums.end(), lowest);
      // 找到第一个大于upperest的元素
      auto endIter = upper_bound(nums.begin() + i + 1, nums.end(), upperest);
      ans += endIter - startIter;
    }
    return ans;
  }
};