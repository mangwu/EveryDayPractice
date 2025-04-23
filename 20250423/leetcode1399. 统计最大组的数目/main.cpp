/*
 * Filename: d:\Projects\study\EveryDayPractice\20250423\leetcode1399.
 * 统计最大组的数目\main.cpp Path: d:\Projects\study\EveryDayPractice Created
 * Date: Wednesday, April 23rd 2025, 10:01:35 pm Author: mangwu
 *
 * Copyright (c) 2025 Your Company
 */

#include <unordered_map>

using namespace std;
class Solution {
public:
  int countLargestGroup(int n) {
    int res = 0;
    int maxNum = 0;
    unordered_map<int, int> map;
    for (int i = 1; i <= n; i++) {
      int key = computeDigitSum(i);
      map[key]++;
      if (map[key] > maxNum) {
        maxNum = map[key];
        res = 1;
      } else if (map[key] == maxNum) {
        res++;
      }
    }
    return res;
  }
  int computeDigitSum(int num) {
    int res = 0;
    while (num) {
      res += num % 10;
      num = num / 10;
    }
    return res;
  }
};