#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
  int countPrefixes(vector<string> &words, string s) {
    int res = 0;
    int n = s.size();
    for (string word : words) {
      int m = word.size();
      if (m > n) {
        continue;
      }
      bool flag = true;
      for (int i = 0; i < m; i++) {
        if (word[i] != s[i]) {
          flag = false;
          break;
        }
      }
      res += flag;
    }
    return res;
  }
};

int main(void) {
  Solution solution;
  vector<string> words = {"a", "b", "c", "ab", "bc", "abc"};
  string s = "abc";
  cout << solution.countPrefixes(words, s) << endl;
  return 0;
}