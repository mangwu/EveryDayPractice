#include <cmath>
#include <vector>

using namespace std;

class Solution {
public:
  int numberOfArrays(vector<int> &differences, int lower, int upper) {
    long long maxNum = 0;
    long long minNum = 0;
    long long cur = 0;
    for (int num : differences) {
      cur += num;
      maxNum = max(maxNum, cur);
      minNum = min(minNum, cur);
    }
    if (upper - lower < maxNum - minNum)
      return 0;
    return upper - lower - maxNum + minNum + 1;
  }
};