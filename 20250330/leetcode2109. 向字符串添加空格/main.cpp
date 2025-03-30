#include <iostream>
#include <string>
#include <unordered_set>
#include <vector>

using namespace std;

class Solution {
public:
  string addSpaces(string s, vector<int> &spaces) {
    int n = s.size();
    unordered_set<int> set = {spaces.begin(), spaces.end()};
    string ans;
    for (int i = 0; i < n; i++) {
      if (set.count(i)) {
        ans.push_back(' ');
      }
      ans.push_back(s[i]);
    }
    return ans;
  }
};