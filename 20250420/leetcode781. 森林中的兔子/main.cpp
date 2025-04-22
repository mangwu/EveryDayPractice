#include <cmath>
#include <unordered_map>
#include <vector>

using namespace std;
class Solution {
public:
  int numRabbits(vector<int> &answers) {
    // 相同回答的可以统计为同一种兔子
    unordered_map<int, int> hash;
    int n = answers.size();
    for (int i = 0; i < n; i++) {
      hash[answers[i]]++;
    }
    int res = 0;
    for (auto iter = hash.begin(); iter != hash.end(); iter++) {
      float first = iter->first;
      float second = iter->second;
      res = res + int(ceil(second / (first + 1))) * (first + 1);
    }
    return res;
  }
};