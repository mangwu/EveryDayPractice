#include <cmath>
#include <vector>
using namespace std;

class Solution {
public:
  int minDominoRotations(vector<int> &tops, vector<int> &bottoms) {
    int res = maxRes;
    for (int i = 1; i <= 6; i++) {
      res = min(res, CheckDominoPoint(tops, bottoms, i));
      res = min(res, CheckDominoPoint(bottoms, tops, i));
    }
    return res == maxRes ? -1 : res;
  }
  int CheckDominoPoint(
    const vector<int> &tops, const vector<int> &bottoms, int point) {
    const int n = tops.size();
    int res = 0;
    for (int i = 0; i < n; i++) {
      if (tops[i] != point && bottoms[i] != point) {
        return maxRes;
      }
      if (tops[i] != point) {
        res++;
      }
    }
    return res;
  }

private:
  const int maxRes = 20000;
};