#include <cmath>

using namespace std;

class Solution {
public:
  long long distributeCandies(int n, int limit) {
    if (3 * limit < n) {
      return 0;
    }
    long long res = 0;
    for (int i = 0; i <= min(n, limit); i++) {
      // 剩下两个分配left
      int left = n - i;
      if (left <= limit) {
        // 可以任意分配
        res += left + 1;
      } else if (left <= limit * 2) {
        // 有最小值
        int start = left - limit;
        // 只能选取start - limit
        res += (limit - start + 1);
      }
    }
    return res;
  }
};