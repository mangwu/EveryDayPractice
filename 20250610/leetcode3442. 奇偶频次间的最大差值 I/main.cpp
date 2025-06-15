#include <cmath>
#include <string>
#include <unordered_map>

using namespace std;

class Solution {
public:
  int maxDifference(string s) {
    unordered_map<char, int> map;
    for (char ch : s) {
      map[ch]++;
    }
    int maxOdd = 1;
    int minEven = s.size();
    for (auto &it : map) {
      if (it.second > 0) {
        // 偶数
        if (it.second % 2 == 0) {
          minEven = min(minEven, it.second);
        } else {
          maxOdd = max(maxOdd, it.second);
        }
      }
    }
    return maxOdd - minEven;
  }
};
