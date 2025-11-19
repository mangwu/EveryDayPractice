#include <algorithm>
#include <string>
#include <unordered_set>
#include <vector>

using namespace std;

class Solution {
public:
  vector<string> removeSubfolders(vector<string> &folder) {
    int n = folder.size();
    sort(folder.begin(), folder.end());
    unordered_set<string> set = {};
    vector<string> res;
    for (string &path : folder) {
      string cur = "/";
      int m = path.size();
      bool isSub = false;
      cout << path << endl;
      for (int i = 1; i < m; i++) {
        if (path[i] == '/' && set.count(cur)) {
          isSub = true;
          break;
        }
        cur.push_back(path[i]);
      }
      cout << isSub << endl;
      if (!isSub) {
        res.push_back(path);
      }
      set.insert(path);
    }
    return res;
  }
};