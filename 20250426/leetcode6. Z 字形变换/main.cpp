#include <string>
#include <vector>
using namespace std;

class Solution {
public:
  string convert(string s, int numRows) {
    if (numRows == 1) {
      return s;
    }
    vector<vector<char>> data(numRows);
    int row = 0;
    int n = s.size();
    for (int i = 0; i < n;) {
      while (row < numRows && i < n) {
        data[row++].push_back(s[i++]);
      }
      row -= 2;
      while (row > 0 && i < n) {
        data[row--].push_back(s[i++]);
      }
    }
    string res;
    for (auto row : data) {
      for (char ch : row) {
        res.push_back(ch);
      }
    }
    return res;
  }
};