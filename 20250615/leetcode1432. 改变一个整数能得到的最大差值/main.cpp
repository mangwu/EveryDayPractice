#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
  int maxDiff(int num) {
    // 最大值
    string strNum = to_string(num);
    int n = strNum.size();
    int maxVal = 0;
    for (int i = 0; i < n; i++) {
      if (strNum[i] < '9') {
        // 将后续strNum[i]都变成9
        char ch = strNum[i];
        for (int j = i; j < n; j++) {
          if (strNum[j] == ch) {
            strNum[j] = '9';
          }
          maxVal = maxVal * 10 + int(strNum[j] - '0');
        }
        break;
      }
      maxVal = maxVal * 10 + int(strNum[i] - '0');
    }
    // 最小值
    strNum = to_string(num);
    int minVal = 0;
    if (strNum[0] > '1') {
      char ch = strNum[0];
      for (int i = 0; i < n; i++) {
        if (strNum[i] == ch) {
          strNum[i] = '1';
        }
        minVal = minVal * 10 + int(strNum[i] - '0');
      }
    } else {
      for (int i = 1; i < n; i++) {
        if (strNum[i] > '1') {
          // 将后续strNum[i]都变成0
          char ch = strNum[i];
          for (int j = i; j < n; j++) {
            if (strNum[j] == ch) {
              strNum[j] = '0';
            }
            minVal = minVal * 10 + int(strNum[j] - '0');
          }
          break;
        }
        minVal = minVal * 10 + int(strNum[i] - '0');
      }
    }

    return maxVal - minVal;
  }
};