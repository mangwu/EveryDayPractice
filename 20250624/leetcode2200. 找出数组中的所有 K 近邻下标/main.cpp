#include <cmath>
#include <vector>
using namespace std;

class Solution {
public:
  vector<int> findKDistantIndices(vector<int> &nums, int key, int k) {
    vector<int> res;
    int n = nums.size();
    for (int i = 0; i < n; i++) {
      if (nums[i] == key) {
        int start = max(0, i - k);
        if (!res.empty() && res[res.size() - 1] >= start) {
          start = res[res.size() - 1] + 1;
        }
        int end = min(i + k, n - 1);
        for (int j = start; j <= end; j++) {
          res.push_back(j);
        }
      }
    }
    return res;
  }
};