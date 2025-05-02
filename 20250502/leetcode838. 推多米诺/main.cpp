#include <string>

using namespace std;

class Solution {
public:
  string pushDominoes(string dominoes) {
    // 找R - L进行向内翻滚
    // 找到L，就把pre - L全部设置为L
    // 找到R，就向后遍历，直到找到L
    int n = dominoes.size();
    int pre = 0;
    for (int i = 0; i < n; i++) {
      if (dominoes[i] == 'L') {
        // 从pre - i全部设置成L
        SetLStr(dominoes, pre, i);
        pre = i + 1;
      } else if (dominoes[i] == 'R') {
        int j = i + 1;
        int start = i; // 找到最后一个R
        while (j < n && dominoes[j] != 'L') {
          if (dominoes[j] == 'R') {
            start = j;
          }
          j++;
        }
        // 后面全部是R
        if (j == n) {
          SetRStr(dominoes, i, j);
          break;
        }
        SetRStr(dominoes, i, start);
        // dominoes[j]是L
        SetRLStr(dominoes, start + 1, j - 1);
        i = j;
        pre = i + 1;
      }
    }
    return dominoes;
  }
  void SetRLStr(string &str, int start, int end) {
    int len = end - start + 1;
    for (int i = 0; i < len / 2; i++) {
      str[i + start] = 'R';
      str[end - i] = 'L';
    }
  }
  void SetLStr(string &str, int start, int end) {
    for (int i = start; i < end; i++) {
      str[i] = 'L';
    }
  }
  void SetRStr(string &str, int start, int end) {
    for (int i = start; i < end; i++) {
      str[i] = 'R';
    }
  }
};