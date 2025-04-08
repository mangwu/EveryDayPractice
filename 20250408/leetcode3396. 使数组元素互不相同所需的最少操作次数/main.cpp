#include <cmath>
#include <iostream>
#include <unordered_set>
#include <vector>

using namespace std;

class Solution {
public:
  int minimumOperations(vector<int> &nums) {
    int n = nums.size();
    unordered_set<int> set;
    for (int i = n - 1; i >= 0; i--) {
      if (set.count(nums[i])) {
        return int(ceil((i + 1) / 3.0));
      }
      set.insert(nums[i]);
    }
    return 0;
  }
};