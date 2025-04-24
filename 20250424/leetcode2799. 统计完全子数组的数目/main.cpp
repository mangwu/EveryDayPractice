// 给你一个由 正 整数组成的数组 nums 。

// 如果数组中的某个子数组满足下述条件，则称之为 完全子数组 ：

// 子数组中 不同 元素的数目等于整个数组不同元素的数目。
// 返回数组中 完全子数组 的数目。

// 子数组 是数组中的一个连续非空序列。

#include <unordered_map>
#include <unordered_set>
#include <vector>
using namespace std;

class Solution {
public:
  int countCompleteSubarrays(vector<int> &nums) {
    // 先计算整个数组中不同元素的数目
    unordered_set<int> set;
    for (int item : nums) {
      set.insert(item);
    }
    int n = nums.size();
    int size = set.size();
    unordered_map<int, int> map;
    int right = 0;
    int res = 0;
    for (int i = 0; i < n; i++) {
      while (right < n && map.size() < size) {
        map[nums[right++]]++;
      }
      if (map.size() == size) {
        // 此时候right指向没有被纳入到map中的元素
        // 所以剩下元素个数就是n - right，
        // 完全字数组个数就是不包含剩下元素的当前选择，以及一个个纳入剩下元素的子数组
        res += n - right + 1;
      }
      map[nums[i]]--;
      if (map[nums[i]] == 0) {
        map.erase(nums[i]);
      }
    }
    return res;
  }
};