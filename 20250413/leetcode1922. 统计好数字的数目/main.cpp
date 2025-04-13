using namespace std;
const long long mod = 10 * *9 + 7;
class Solution {
public:
  int countGoodNumbers(long long n) {
    long long even = (n + 1) / 2;
    long long odd = n / 2;
    return int((quickMul(5, even) * quickMul(4, odd)) % mod);
  }
  long long quickMul(long long x, long long y) {
    long long res = 1;
    long long mul = x;
    while (y > 0) {
      if (y % 2 == 1) {
        res = (mul * res) % mod;
      }
      mul = (mul * mul) % mod;
      y = y / 2;
    }
    return res;
  }
};