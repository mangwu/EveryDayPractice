#include <cmath>
#include <string>
using namespace std;

class Solution {
public:
  int longestSubsequence(string s, int k) {
    int n = s.size();
    int len = 0;
    int val = 0;
    for (int i = n - 1; i >= 0; i--) {
      if (s[i] == '1') {
        if (pow(2, len) + val <= k) {
          val += pow(2, len);
          len++;
        }
      } else {
        len++;
      }
    }
    return len;
  }
};