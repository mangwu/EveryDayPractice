#include <string>
#include <vector>

using namespace std;

class Solution {
public:
  string answerString(string word, int numFriends) {
    if (numFriends == 1) {
      return word;
    }
    int n = word.size();
    // 分割的最大字符数量
    int maxChars = n - numFriends + 1;
    // 找到字典序最小的字母的索引
    string res = word.substr(0, maxChars);
    for (int i = 1; i < n; i++) {
      for (int j = 0; j < maxChars && j + i < n; j++) {
        if (word[j + i] == res[j])
          continue;
        if (word[j + i] > res[j]) {
          res = word.substr(i, maxChars);
        } else {
          break;
        }
      }
    }
    return res;
  }
};