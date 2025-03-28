#include <iostream>
#include <string>
#include <unordered_set>
using namespace std;

class Solution {
public:
  int minimizedStringLength(string s) {
    unordered_set<char> set1 = {};
    for (char ch : s) {
      set1.insert(ch);
    }
    return set1.size();
  }
};

int main(void) {
  Solution solution;
  cout << solution.minimizedStringLength("aschasuicgashcgsycf") << endl;
  return 0;
}