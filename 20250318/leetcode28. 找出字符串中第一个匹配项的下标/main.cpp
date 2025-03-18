#include <string>

using namespace std;

class Solution {
public:
  int strStr(string haystack, string needle) {
    const int len1 = haystack.size();
    const int len2 = needle.size();
    for (int i = 0; i <= len1 - len2; i++) {
      bool flag = true;
      for (int j = 0; j < len2; j++) {
        if (haystack[i + j] != needle[j]) {
          flag = false;
          break;
        }
      }
      if (flag) {
        return i;
      }
    }
    return -1;
  }
};