#include <iostream>
#include <unordered_map>
#include <unordered_set>
#include <vector>
using namespace std;

class Solution {
public:
  string smallestEquivalentString(string s1, string s2, string baseStr) {
    vector<int> alpha(26, -1);
    int id = 0;
    int n = s1.size();
    for (int i = 0; i < n; i++) {
      if (s1[i] == s2[i]) {
        continue;
      }
      int code1 = int(s1[i] - 'a');
      int code2 = int(s2[i] - 'a');
      if (alpha[code1] == -1 && alpha[code2] == -1) {
        alpha[code1] = id;
        alpha[code2] = id;
        id++;
      } else if (alpha[code1] == -1) {
        alpha[code1] = alpha[code2];
      } else if (alpha[code2] == -1) {
        alpha[code2] = alpha[code1];
      } else {
        int id1 = alpha[code1];
        int id2 = alpha[code2];
        for (int j = 0; j < 26; j++) {
          if (alpha[j] == id2) {
            alpha[j] = id1;
          }
        }
      }
    }
    // for (int i = 0; i < 26; i++) {
    //   cout << char(i + 'a') << ":" << alpha[i] << " ";
    // }
    // cout << endl;
    int m = baseStr.size();
    for (int i = 0; i < m; i++) {
      char ch = baseStr[i];
      int curId = alpha[ch - 'a'];
      if (curId != -1) {
        for (int j = 0; j < 26; j++) {
          if (alpha[j] == curId) {
            ch = char('a' + j);
            break;
          }
        }
        baseStr[i] = ch;
      }
    }
    return baseStr;
  }
};