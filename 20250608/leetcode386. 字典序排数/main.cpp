#include <algorithm>
#include <cstring>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
  vector<int> lexicalOrder(int n) {
    vector<int> res(n, -1);
    for (int i = 1; i <= n; i++) {
      res[i - 1] = i;
    }
    sort(res.begin(), res.end(), [](int a, int b) {
      return strcmp(to_string(a).c_str(), to_string(b).c_str()) < 0;
    });
    return res;
  }
};