#include <algorithm>
#include <vector>
using namespace std;

class Solution {
public:
  vector<int> maxSubsequence(vector<int> &nums, int k) {
    int n = nums.size();
    vector<int> idxes(n, 0);
    for (int i = 0; i < n; i++) {
      idxes[i] = i;
    }
    sort(idxes.begin(), idxes.end(), [&nums](int a, int b) {
      return nums[a] > nums[b];
    });
    vector<int> res(k, 0);
    for (int i = 0; i < k; i++) {
      res[i] = idxes[i];
    }
    sort(res.begin(), res.end());
    for (int i = 0; i < k; i++) {
      res[i] = nums[res[i]];
    }
    return res;
  }
};