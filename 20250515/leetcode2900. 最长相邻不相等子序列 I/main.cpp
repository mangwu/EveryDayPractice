#include <string>
#include <vector>

using namespace std;

class Solution {
public:
  vector<string>
  getLongestSubsequence(vector<string> &words, vector<int> &groups) {
    vector<string> res;
    int pre = -1;
    int n = words.size();
    for (int i = 0; i < n; i++) {
      if (pre != groups[i]) {
        pre = groups[i];
        res.push_back(words[i]);
      }
    }
    return res;
  }
};