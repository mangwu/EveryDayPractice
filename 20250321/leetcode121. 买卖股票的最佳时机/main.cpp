#include <cmath>
#include <vector>
using namespace std;
class Solution {
public:
  int maxProfit(vector<int> &prices) {
    int minp = prices[0];
    int n = prices.size();
    int ans = 0;
    for (int i = 1; i < n; i++) {
      ans = max(ans, prices[i] - minp);
      minp = min(minp, prices[i]);
    }
    return ans;
  }
};