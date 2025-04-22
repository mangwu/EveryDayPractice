#include <string>

using namespace std;
class Solution {
public:
  string longestPalindrome(string s) {
    int n = s.size();
    int start = 0;
    int end = -1;
    for (int i = 0; i < n; i++) {
      // 以s[i]为中心向两边扩散
      int left = i - 1;
      int right = i + 1;
      while (left >= 0 && right < n && s[left] == s[right]) {
        left--;
        right++;
      }
      if (right - left - 2 > end - start) {
        start = left + 1;
        end = right - 1;
      }
      // 以s[i]和s[i+1]中间向两边扩散
      left = i;
      right = i + 1;
      while (left >= 0 && right < n && s[left] == s[right]) {
        left--;
        right++;
      }
      if (right - left - 2 > end - start) {
        start = left + 1;
        end = right - 1;
      }
    }
    return s.substr(start, end);
  }
};