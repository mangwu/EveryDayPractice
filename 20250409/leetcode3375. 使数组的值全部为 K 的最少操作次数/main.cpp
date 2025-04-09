#include <unordered_set>
#include <vector>
using namespace std;

class Solution {
public:
  int minOperations(vector<int> &nums, int k) {
    unordered_set<int> set;
    for (int num : nums) {
      if (num < k)
        return -1;
      if (num > k)
        set.insert(num);
    }
    return set.size();
  }
};