#include <cmath>
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  int diagonalPrime(vector<vector<int>> &nums) {
    const int n = nums.size();
    int res = 0;
    for (int i = 0; i < n; i++) {
      if (isPrime(nums[i][i])) {
        res = max(res, nums[i][i]);
      }
      if (isPrime(nums[i][n - i - 1])) {
        res = max(res, nums[i][n - i - 1]);
      }
    }
    return res;
  }
  bool isPrime(int num) {
    int sqrtNum = sqrt(num);
    for (int i = 2; i <= sqrtNum; i++) {
      if (num % i == 0)
        return false;
    }
    return num > 1;
  }
};

int main(void) {
  Solution solution;
  vector<vector<int>> nums = {{1, 2, 3}, {5, 6, 7}, {9, 10, 11}};
  cout << solution.diagonalPrime(nums);
  return 0;
}