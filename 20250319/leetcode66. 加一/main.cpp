#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  vector<int> plusOne(vector<int> &digits) {
    const int n = digits.size();
    int idx = n - 1;
    int carry = 1;
    while (idx >= 0 && carry) {
      int sum = carry + digits[idx];
      carry = sum / 10;
      digits[idx] = sum % 10;
      idx--;
    }
    if (carry) {
      digits.insert(digits.begin(), 1);
    }
    return digits;
  }
};

int main(void) {
  Solution solutin;
  vector<int> digits = {9, 9, 9, 9};
  solutin.plusOne(digits);
  for (int x : digits) {
    cout << x << " ";
  }
  return 0;
}
