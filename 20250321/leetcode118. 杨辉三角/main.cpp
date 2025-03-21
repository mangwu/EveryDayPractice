#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
  vector<vector<int>> generate(int numRows) {
    vector<vector<int>> ans;
    ans.push_back({1});
    if (numRows == 1)
      return ans;
    for (int i = 1; i < numRows; i++) {
      vector<int> arr = {1};
      for (int j = 1; j < i; j++) {
        arr.push_back(ans[i - 1][j - 1] + ans[i - 1][j]);
      }
      arr.push_back(1);
      ans.push_back(arr);
    }
    return ans;
  }
};

int main(void) {
  Solution solution;
  int n = 10;
  vector<vector<int>> nums = solution.generate(n);
  for (int i = 0; i < n; i++) {
    for (int j = 0; j <= i; j++)  {
      cout << nums[i][j] << "\t";
    }
    cout << endl;
  }
  return 0;
}