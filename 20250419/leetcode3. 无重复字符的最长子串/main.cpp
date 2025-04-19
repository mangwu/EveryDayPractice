#include <cmath>
#include <string>
#include <unordered_set>

using namespace std;

class Solution {
public:
  int lengthOfLongestSubstring(string s) {
    int n = s.size();
    unordered_set<char> set;
    int res = 0;
    int j = 0;
    for (int i = 0; i < n; i++) {
      while (j < n && !set.count(s[j])) {
        set.insert(s[j++]);
      }
      res = max(res, j - i);
      set.erase(s[i]);
    }
    return res;
  }
};