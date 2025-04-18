#include <unordered_map>
#include <vector>

using namespace std;

class Solution {
public:
  long long countBadPairs(vector<int> &nums) {
    long long n = nums.size();
    long long goodPairs = 0;
    // 总数对
    long long totalPairs = ((n - 1) * n) / 2;
    unordered_map<int, int> map;
    for (int i = 0; i < n; i++) {
      // 计算当前元素的差值
      int diff = nums[i] - i;
      if (map.count(diff)) {
        goodPairs += map[diff];
      }
      // 统计差值出现的次数
      map[diff]++;
    }
    return totalPairs - goodPairs;
  }
};