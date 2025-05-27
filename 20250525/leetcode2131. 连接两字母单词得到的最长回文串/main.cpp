#include <algorithm>
#include <string>
#include <unordered_map>
#include <vector>

using namespace std;

class Solution {
public:
  int longestPalindrome(vector<string> &words) {
    int n = words.size();
    unordered_map<string, int> map;
    int res = 0;
    for (string word : words) {
      reverse(word.begin(), word.end());
      if (map[word] > 0) {
        map[word]--;
        res += 4;
      } else {
        reverse(word.begin(), word.end());
        map[word]++;
      }
    }
    // 检查map中是否有相同的
    for (auto it : map) {
      if (it.first[0] == it.first[1] && it.second > 0) {
        res += 2;
        break;
      }
    }
    return res;
  }
};

// ["dd","aa","bb","dd","aa","dd","bb","dd","aa","cc","bb","cc","dd","cc"]
// aa aa aa bb bb bb cc cc cc dd dd dd dd dd