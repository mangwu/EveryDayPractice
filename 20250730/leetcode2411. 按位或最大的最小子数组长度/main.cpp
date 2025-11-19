#include <vector>

using namespace std;

class Solution {
public:
  vector<int> smallestSubarrays(vector<int> &nums) {
    int n = nums.size();
    vector<int> res(n, 0);
    vector<int> orSumSufix(n, 0);
    vector<vector<int>> bianryPrefix(n, vector<int>(31, 0));
    orSumSufix[n - 1] = nums[n - 1];
    for (int i = n - 2; i >= 0; i--) {
      orSumSufix[i] = orSumSufix[i + 1] | nums[i];
    }
    return res;
  }
};