#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
  int countSymmetricIntegers(int low, int high) {
    int res = 0;
    for (int i = low; i <= high; i++) {
      res += isSym(i);
    }
    return res;
  }
  bool isSym(int num) {
    string str = to_string(num);
    int n = str.size();
    if (n % 2 == 1)
      return false;
    int left = 0;
    int right = 0;
    for (int i = 0; i < n / 2; i++) {
      left += int(str[i]);
      right += int(str[n - i - 1]);
    }
    return left == right;
  }
};