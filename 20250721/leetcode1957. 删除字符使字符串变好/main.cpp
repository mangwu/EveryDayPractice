#include <string>
using namespace std;

class Solution {
public:
  string makeFancyString(string s) {
    int n = s.size();
    string res;
    char pre = '.';
    int num = 0;
    for (int i = 0; i < n; i++) {
      if (s[i] != pre) {
        pre = s[i];
        num = 1;
      } else {
        num++;
      }
      if (num <= 2) {
        res.push_back(s[i]);
      }
    }
    return res;
  }
};