#include <cmath>
#include <iostream>
#include <unordered_map>
#include <vector>

using namespace std;

class Solution {
public:
  vector<vector<int>> findMatrix(vector<int> &nums) {
    unordered_map<int, int> hash;
    for (int x : nums) {
      hash[x]++;
    }
    vector<vector<int>> ans;
    while (!hash.empty()) {
      vector<int> arr;
      for (auto it = hash.begin(); it != hash.end();) {
        arr.push_back(it->first);
        it->second -= 1;
        if (it->second == 0) {
          it = hash.erase(it);
        } else {
          it++;
        }
      }
      ans.push_back(arr);
    }
    return ans;
  }
};

int main(void) {
  Solution solution;
  vector<int> nums = {1, 2, 3, 4, 4, 4, 5, 6, 1,  2,  1,  1,  2, 4,
                      1, 5, 6, 6, 6, 9, 8, 5, 11, 12, 12, 12, 11};
  auto ans = solution.findMatrix(nums);
  int n = ans.size();
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < ans[i].size(); j++) {
      cout << ans[i][j] << "\t";
    }
    cout << endl;
  }
}