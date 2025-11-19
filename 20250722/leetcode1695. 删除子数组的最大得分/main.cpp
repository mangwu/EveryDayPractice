#include <unordered_map>
#include <unordered_set>
#include <vector>

using namespace std;

class Solution {
public:
  int maximumUniqueSubarray(vector<int> &nums) {
    int n = nums.size();
    unordered_set<int> set;
    int res = 0;
    int sum = 0;
    int left = 0;
    for (int i = 0; i < n; i++) {
      sum += nums[i];
      while (left < i && set.count(nums[i])) {
        set.erase(nums[left]);
        sum -= nums[left];
        left++;
      }
      cout << left << " " << i << endl;
      cout << "sum:" << sum << endl;
      set.insert(nums[i]);
      res = max(res, sum);
    }
    return res;
  }
};