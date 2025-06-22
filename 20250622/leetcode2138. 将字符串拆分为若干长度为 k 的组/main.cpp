#include <string>
#include <vector>

using namespace std;

class Solution {
public:
  vector<string> divideString(string s, int k, char fill) {
    vector<string> res;
    int n = s.size();
    for (int i = 0; i < n; i += k) {
      string cur = s.substr(i, k);
      while (cur.size() < k) {
        cur.push_back(fill);
      }
      res.push_back(cur);
    }
    return res;
  }
};