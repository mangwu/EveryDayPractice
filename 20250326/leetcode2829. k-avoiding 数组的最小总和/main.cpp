#include <iostream>

using namespace std;
class Solution {
public:
  int minimumSum(int n, int k) {
    int half = k / 2;
    if (n <= half) {
      return ((1 + n) * n) / 2;
    }
    n -= half;
    return (((1 + half) * half) / 2) + (((k - 1 + k + n) * n) / 2);
  }
};