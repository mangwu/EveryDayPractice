#include <vector>

using namespace std;

class Solution {
public:
  long long minSum(vector<int> &nums1, vector<int> &nums2) {
    long long sum1 = 0;
    long long sum2 = 0;
    int zero1 = 0;
    int zero2 = 0;
    for (int num : nums1) {
      if (num == 0) {
        zero1++;
      } else {
        sum1 += num;
      }
    }
    for (int num : nums2) {
      if (num == 0) {
        zero2++;
      } else {
        sum2 += num;
      }
    }
    sum1 += zero1; // 保证至少增加zero1个
    sum2 += zero2; // 保证至少增加zero2个
    if (sum1 > sum2) {
      // nums2要增加，zero2不能为0
      if (zero2 == 0)
        return -1;
      return sum1;
    } else if (sum1 < sum2) {
      // nums1要增加，zero1不能为0
      if (zero1 == 0)
        return -1;
      return sum2;
    }
    return sum1;
  }
};