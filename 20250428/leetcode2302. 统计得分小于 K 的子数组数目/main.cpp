#include <vector>
using namespace std;

class Solution {
public:
  long long countSubarrays(vector<int> &nums, long long k) {
    long long n = nums.size();
    long long total = (n + 1) * n / 2;
    long long nofull = 0;
    int right = 0;
    long long sum = 0;
    for (int i = 0; i < n; i++) {
      while (right < n && (sum * (right - i)) < k) {
        sum += nums[right++];
      }
      if ((sum * (right - i)) >= k) {
        sum -= nums[--right];
        nofull += (n - right);
        if (right == i) {
          sum += nums[i];
          right = i + 1;
        }
      } else {
        break;
      }
      sum -= nums[i];
    }
    return total - nofull;
  }
};