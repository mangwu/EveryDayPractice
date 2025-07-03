#include <string>

using namespace std;

class Solution {
public:
  int possibleStringCount(string word) {
    int n = word.size();
    int res = 1;
    for (int i = 0; i < n; i++) {
      int j = i + 1;
      while (j < n && word[j] == word[i]) {
        j++;
      }
      res += j - i - 1;
      i = j - 1;
    }
    return res;
  }
};