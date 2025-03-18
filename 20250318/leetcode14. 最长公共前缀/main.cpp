#include <cmath>
#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
  string longestCommonPrefix(vector<string> &strs) {
    const int n = strs.size();
    string res = strs[0];
    for (int i = 1; i < n; i++) {
      // 求res和strs[i]的公共前缀
      res = longestCommonPrefix(res, strs[i]);
    }
    return res;
  }
  string longestCommonPrefix(string &str1, string &str2) {
    int n = min(str1.size(), str2.size());
    int index = 0;
    while (index < n && str1[index] == str2[index])
      index++;
    return str1.substr(0, index);
  }
};

int main(void) {
  Solution solution;
  vector<string> strs = {"flower", "floweacc", "flowght", "float"};
  cout << solution.longestCommonPrefix(strs) << endl;
  return 0;
}