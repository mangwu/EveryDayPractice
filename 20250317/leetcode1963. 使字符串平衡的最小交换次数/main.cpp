#include <iostream>
using namespace std;

class Solution
{
public:
  int minSwaps(string s)
  {
    int cnt = 0, minCnt = 0;
    for (char ch : s)
    {
      if (ch == '[')
      {
        cnt++;
      }
      else
      {
        cnt--;
        minCnt = min(minCnt, cnt);
      }
    }
    return (1 - minCnt) / 2;
  }
};

int main(void)
{
  Solution solution;
  cout << solution.minSwaps("]][[][[]]][[");
  return 0;
}