#include <iostream>
#include <map>
#include <string>
using namespace std;

class Solution {
public:
  int lengthAfterTransformations(string s, int t) {
    // a -> 经过26次转换，变成 ab 剩下 t - 26 次转换
    // b -> 经过25次转换，变成 ab 剩下 t - 25 次转换
    // c -> 经过24次转换，变成 ab 剩下 t - 24 次转换
    // ...
    // z -> 经过1次转换，变成 ab  剩下 t - 1 次转换

    // 记录所有字符的
    return 0;
  }

  int dfs(char ch, int t, map<char, map<int, int>> caches) {
    int x = 26 + ch - 'a'; // 需要经过x次转换变成 ab
    if (caches.count(ch) > 0 && caches[ch].count(t) > 0) {
      return caches[ch][t];
    }
    if (t < x) {
      return 1; // 不会变成ab
    }
    int res = (dfs('a', t - x, caches) + dfs('b', t - x, caches)) % mod;
    caches[ch][t] = res;
    return res;
  }

private:
  const int mod = 1000000007;
};

int main(void) {
  Solution s;
  map<char, map<int, int>> caches;
  cout << s.dfs('a', 500, caches);
  return 0;
}