#include <cmath>
#include <string>
#include <unordered_set>
#include <vector>
using namespace std;
class Solution {
public:
  long long countGoodIntegers(int n, int k) {
    unordered_set<string> set;
    int start = pow(10, (n - 1) / 2);
    int skip = n % 2;
    for (int i = start; i < start * 10; i++) {
      string str = to_string(i);
      str += string(str.rbegin() + skip, str.rend());
      long long num = stoll(str);
      if (num % k == 0) { // 是k回文
        sort(str.begin(), str.end());
        set.emplace(str);
      }
    }
    // 阶乘
    vector<long long> fac(n + 1, 1);
    for (int i = 1; i <= n; i++) {
      fac[i] = fac[i - 1] * i;
    }

    long long ans = 0;
    for (auto item : set) {
      vector<int> cnt(10, 0);
      for (char ch : item) {
        cnt[ch - '0']++;
      }
      long long tot = (n - cnt[0]) * fac[n - 1];
      for (int x : cnt) {
        tot = tot / fac[x];
      }
      ans += tot;
    }
    return ans;
  }
};