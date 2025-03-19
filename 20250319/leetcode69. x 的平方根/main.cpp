#include <iostream>

using namespace std;

class Solution {
public:
  int mySqrt(int x) {
    int left = 1;
    int right = 46340; // 最大的可能值
    while (left <= right) {
      int mid = (left + right) / 2;
      if (mid * mid == x) {
        return int(mid);
      } else if (mid * mid < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return right;
  }
};