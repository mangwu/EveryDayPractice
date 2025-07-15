#include <cctype>
#include <string>
#include <unordered_set>
using namespace std;

class Solution {
public:
  bool isValid(string word) {
    int n = word.size();
    if (n < 3) {
      return false;
    }
    unordered_set<char> a = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
    bool hasA = false;
    bool hasNA = false;
    for (int i = 0; i < n; i++) {
      if (isalnum(word[i])) {
        if (isalpha(word[i])) {
          hasA = bool(a.count(word[i])) || hasA;
          hasNA = !bool(a.count(word[i])) || hasNA;
        }
      } else {
        return false;
      }
    }
    return hasA && hasNA;
  }
};