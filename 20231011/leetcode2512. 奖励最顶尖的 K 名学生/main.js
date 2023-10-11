// 给你两个字符串数组 positive_feedback 和 negative_feedback ，分别包含表示正面的和负面的词汇。不会 有单词同时是正面的和负面的。

// 一开始，每位学生分数为 0 。每个正面的单词会给学生的分数 加 3 分，每个负面的词会给学生的分数 减  1 分。

// 给你 n 个学生的评语，用一个下标从 0 开始的字符串数组 report 和一个下标从 0 开始的整数数组 student_id 表示，其中 student_id[i] 表示这名学生的 ID ，这名学生的评语是 report[i] 。每名学生的 ID 互不相同。

// 给你一个整数 k ，请你返回按照得分 从高到低 最顶尖的 k 名学生。如果有多名学生分数相同，ID 越小排名越前。

/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function (
  positive_feedback,
  negative_feedback,
  report,
  student_id,
  k
) {
  const positive_set = new Set(positive_feedback);
  const negative_set = new Set(negative_feedback);
  const student_cores = report
    .map((v, i) => {
      const id = student_id[i];
      const report_score = v.split(" ").reduce((pre, cur) => {
        if (positive_set.has(cur)) pre += 3;
        if (negative_set.has(cur)) pre--;
        return pre;
      }, 0);
      return {
        report_score,
        id,
      };
    })
    .sort((a, b) => {
      if (a.report_score !== b.report_score)
        return b.report_score - a.report_score;
      return a.id - b.id;
    });
  return student_cores.map((v) => v.id).slice(0, k);
};
