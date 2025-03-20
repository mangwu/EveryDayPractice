#include <iostream>

using namespace std;

class Solution {
public:
  int climbStairs(int n) {
    int pre1 = 0;
    int pre2 = 1;
    int cur = 1;
    for (int i = 1; i <= n; i++) {
      cur = pre1 + pre2;
      pre1 = pre2;
      pre2 = cur;
    }
    return cur;
  }
};

int main(void) {
  Solution solution;
  cout << solution.climbStairs(20) << endl;
  return 0;
}