#include <cmath>
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  long long maximumTripletValue(vector<int> &nums) {
    int n = nums.size();
    long long res = 0;
    for (int i = 0; i < n - 2; i++) {
      for (int j = i + 1; j < n - 1; j++) {
        for (int k = j + 1; k < n; k++) {
          res = max(res, (long long)(nums[i] - nums[j]) * (long long)nums[k]);
        }
      }
    }
    return res;
  }
};