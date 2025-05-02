#include <vector>
using namespace std;
class Solution {
public:
  int findNumbers(vector<int> &nums) {
    int res = 0;
    for (int num : nums) {
      if (IsEvenDigitNum(num)) {
        res++;
      }
    }
    return res;
  }
  bool IsEvenDigitNum(int num) {
    int res = 0;
    while (num) {
      res++;
      num /= 10;
    }
    return res % 2 == 0;
  }
};