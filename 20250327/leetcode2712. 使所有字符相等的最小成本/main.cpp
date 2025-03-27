#include <cmath>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
  long long minimumCost(string s) {
    int n = s.size();
    vector<vector<long long>> suffix(n + 1, {{0, 0}});
    for (int i = n - 1; i >= 0; i--) {
      if (s[i] == '0') {
        suffix[i][0] = suffix[i + 1][0]; // 全是0
        suffix[i][1] = suffix[i + 1][0] + (n - i);
      } else {
        suffix[i][1] = suffix[i + 1][1]; // 全是1
        suffix[i][0] = suffix[i + 1][1] + (n - i);
      }
    }
    long long res = min(suffix[0][0], suffix[0][1]);
    long long pre0 = 0;
    long long pre1 = 0;
    for (int i = 0; i < n; i++) {
      if (s[i] == '0') {
        pre1 = pre0 + (i + 1);
      } else {
        pre0 = pre1 + (i + 1);
      }
      res = min(res, min(pre0 + suffix[i + 1][0], pre1 + suffix[i + 1][1]));
    }
    return res;
  }
  long long minimumCost2(string s) {
    int n = s.size();
    long long res = 0;
    for (int i = 1; i < n; i++) {
      if (s[i - 1] != s[i]) {
        res += min(i, n - i);
      }
    }
    return res;
  }
};

int main(void) {
  Solution solution;
  string s;
  cin >> s;
  cout << solution.minimumCost(s) << endl;
  cout << solution.minimumCost2(s) << endl;
  return 0;
}