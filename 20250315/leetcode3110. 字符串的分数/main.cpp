
#include <iostream>
#include <cmath>
using namespace std;

class Solution
{
public:
  int scoreOfString(string s)
  {
    const int n = s.size();
    int res = 0;
    for (int i = 1; i < n; i++)
    {
      res += abs(s[i] - s[i - 1]);
    }
    return res;
  }
};

int main()
{
  Solution solution;
  cout << solution.scoreOfString("leetcode");
  return 0;
}