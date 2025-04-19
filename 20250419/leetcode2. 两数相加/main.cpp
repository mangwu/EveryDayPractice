
using namespace std;

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
  ListNode *addTwoNumbers(ListNode *l1, ListNode *l2) {
    int carry = 0; // 进位
    ListNode *header = new ListNode();
    ListNode *pre = header;
    while (l1 || l2 || carry) {
      int sum = (l1 ? l1->val : 0) + (l2 ? l2->val : 0) + carry;
      carry = sum / 10;
      sum = sum % 10;
      pre->next = new ListNode(sum);
      pre = pre->next;
      l1 && (l1 = l1->next);
      l2 && (l2 = l2->next);
    }
    ListNode *res = header->next;
    delete header;
    return res;
  }
};