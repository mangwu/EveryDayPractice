#include <vector>
using namespace std;

class Solution {
public:
  vector<int> getRow(int rowIndex) {
    vector<int> ans = {1};
    for (int i = 1; i <= rowIndex; i++) {
      vector<int> cur = {1};
      for (int j = 1; j < i; j++) {
        cur.push_back(ans[j - 1] + ans[j]);
      }
      cur.push_back(1);
      ans = cur;
    }
    return ans;
  }
};