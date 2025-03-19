#include <algorithm>
#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
  string addBinary(string a, string b) {
    int aLen = a.size();
    int bLen = b.size();
    int aI = aLen - 1;
    int bI = bLen - 1;
    int carry = 0;
    string res = "";
    while (aI >= 0 || bI >= 0 || carry) {
      int sum =
          (aI >= 0 ? (a[aI] - '0') : 0) + (bI >= 0 ? (b[bI] - '0') : 0) + carry;
      aI--;
      bI--;
      carry = sum / 2;
      res = to_string(sum % 2) + res;
    }
    return res;
  }
  string addBinary2(string a, string b) {
    reverse(a.begin(), a.end());
    reverse(b.begin(), b.end());
    int n = max(a.size(), b.size());
    int carry = 0;
    string res;
    for (int i = 0; i < n; i++) {
      carry += i < a.size() ? (a[i] - '0') : 0;
      carry += i < b.size() ? (b[i] - '0') : 0;
      res.push_back((carry % 2) ? '1' : '0');
      carry /= 2;
    }
    if (carry)
      res.push_back('1');
    reverse(res.begin(), res.end());
    return res;
  }
};

int main(void) {
  Solution solution;
  cout << solution.addBinary("10110111", "1110100111001") << endl;
  cout << solution.addBinary2("10110111", "1110100111001") << endl;
  return 0;
}