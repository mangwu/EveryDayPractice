
#include <algorithm>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
  vector<string>
  getWordsInLongestSubsequence(vector<string> &words, vector<int> &groups) {
    int n = words.size();
    int maxLen = 1;
    int end = 0;
    // dp[i] = [len, pre]
    vector<vector<int>> dp(n, vector<int>(2, -1));
    dp[0][0] = 1;
    dp[0][1] = -1;
    for (int i = 1; i < n; i++) {
      dp[i][0] = 1;
      for (int j = i - 1; j >= 0; j--) {
        if (
          groups[i] != groups[j] &&
          getHanminDistance(words[i], words[j]) == 1) {
          if (dp[j][0] + 1 > dp[i][0]) {
            dp[i][0] = dp[j][0] + 1;
            dp[i][1] = j;
          }
        }
      }
      if (dp[i][0] > maxLen) {
        maxLen = dp[i][0];
        end = i;
      }
    }
    vector<string> res;
    while (end != -1) {
      res.push_back(words[end]);
      end = dp[end][1];
    }
    reverse(res.begin(), res.end());
    return res;
  }
  int getHanminDistance(const string &word1, const string &word2) {
    if (word1.size() != word2.size()) {
      return -1;
    }
    int diff = 0;
    for (int i = 0; i < word1.size(); i++) {
      if (word1[i] != word2[i]) {
        diff++;
      }
    }
    return diff;
  }
};