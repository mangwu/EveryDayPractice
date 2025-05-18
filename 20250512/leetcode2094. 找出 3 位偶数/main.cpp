#include <vector>

using namespace std;

class Solution {
public:
  vector<int> findEvenNumbers(vector<int> &digits) {
    int n = digits.size();

    vector<int> path;
    vector<int> res;
    vector<bool> visited(n, false);

    dfs(digits, res, path, 0);
    return res;
  }
  void dfs(vector<int> &digits, vector<int> &res, vector<int> &path, int sIdx) {
    if (path.size() == 3) {
      cout << path[0] << ", " << path[1] << ", " << path[2] << endl;
      int key = path[0] * 100 + path[1] * 10 + path[2];
      cout << key << ":" << (key % 2 == 0) << endl;
      if (key % 2 == 0) {
        res.push_back(key);
        return;
      }
    }
    if (sIdx >= digits.size()) {
      return;
    }
    cout << "sIdx: " << sIdx << endl;
    // 第一个数不能选0
    if (path.size() == 0 && digits[sIdx] == 0) {
      return;
    }
    // 选择
    path.push_back(digits[sIdx]);
    cout << "sIdx: " << sIdx << "  digits[sIdx]:" << digits[sIdx] << endl;
    dfs(digits, res, path, sIdx + 1);
    path.pop_back();
    // 不选
    dfs(digits, res, path, sIdx + 1);
  }
};