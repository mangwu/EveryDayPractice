// 给你一个类似 Lisp 语句的字符串表达式 expression，求出其计算结果。

// 表达式语法如下所示:

// 表达式可以为整数，let 表达式，add 表达式，mult 表达式，或赋值的变量。表达式的结果总是一个整数。
// (整数可以是正整数、负整数、0)
// let 表达式采用 "(let v1 e1 v2 e2 ... vn en expr)" 的形式，其中 let 总是以字符串 "let"来表示，接下来会跟随一对或多对交替的变量和表达式，也就是说，第一个变量 v1被分配为表达式 e1 的值，第二个变量 v2 被分配为表达式 e2 的值，依次类推；最终 let 表达式的值为 expr表达式的值。
// add 表达式表示为 "(add e1 e2)" ，其中 add 总是以字符串 "add" 来表示，该表达式总是包含两个表达式 e1、e2 ，最终结果是 e1 表达式的值与 e2 表达式的值之 和 。
// mult 表达式表示为 "(mult e1 e2)" ，其中 mult 总是以字符串 "mult" 表示，该表达式总是包含两个表达式 e1、e2，最终结果是 e1 表达式的值与 e2 表达式的值之 积 。
// 在该题目中，变量名以小写字符开始，之后跟随 0 个或多个小写字符或数字。为了方便，"add" ，"let" ，"mult" 会被定义为 "关键字" ，不会用作变量名。
// 最后，要说一下作用域的概念。计算变量名所对应的表达式时，在计算上下文中，首先检查最内层作用域（按括号计），然后按顺序依次检查外部作用域。测试用例中每一个表达式都是合法的。有关作用域的更多详细信息，请参阅示例。

/**
 * @param {string} expression
 * @return {number}
 */
var evaluate = function (expression) {
  const contextStack = []; // 作用域栈
  const varStack = []; // 变量栈
  const opStack = []; // 操作栈
  const numStack = []; // 数值栈
  const n = expression.length;
  for (let i = 0; i < n; i++) {
    const ch = expression[i];
    if (ch === "(") {
      // 获取表达式
      const [op, end] = getExpName(expression, i + 1);
      // 新的作用域
      if (op === "let") contextStack.push(new Map());
      opStack.push(op);
      i = end;
    } else if (ch === ")") {
      // 出栈操作符
      const op = opStack.pop();
      if (op === "add") {
        numStack.push(numStack.pop() + numStack.pop());
      } else if (op === "mult") {
        numStack.push(numStack.pop() * numStack.pop());
      } else if (op === "let") {
        // 出栈作用域
        let preContext = contextStack.pop();
        let k = 2;
        if (varStack.length) {
          const varName = varStack.pop();
          while (!preContext.has(varName)) {
            preContext = contextStack[contextStack.length - k++];
          }
          numStack.push(preContext.get(varName));
        }
      }
    } else if (isDigit(ch)) {
      // 数值
      const [num, end] = getNumber(expression, i);
      if (opStack[opStack.length - 1] === "let" && varStack.length) {
        // 当前是赋值操作
        const curVar = varStack.pop();
        const curContext = contextStack[contextStack.length - 1];
        curContext.set(curVar, num);
      } else {
        // 不是赋值操作
        numStack.push(num);
      }
      i = end;
    } else if (ch !== " ") {
      // 变量
      const [varName, end] = getExpName(expression, i + 1);
      const curOp = opStack[opStack.length - 1];
      let curContext = contextStack[contextStack.length - 1];
      if (curOp === "let") {
        varStack.push(varName);
      } else {
        let k = 2;
        while (!curContext.has(varName)) {
          curContext = contextStack[contextStack.length - k++];
        }
        numStack.push(curContext.get(varName));
      }
      i = end;
    }
  }
};

/**
 * @description 获取关键字或者
 * @param {string} str
 * @param {number} start
 * @returns {[string, number]}
 */
function getExpName(str, start) {
  const res = [];
  const n = str.length;
  while (start < n && (str[start] !== " " || str[start] !== ")"))
    res.push(str[start++]);
  return [res.join(""), start - 1];
}

/**
 * @description 获取数字
 * @param {string} str
 * @param {number} start
 * @returns {[number,number]}
 */
function getNumber(str, start) {
  let cur = 0;
  while (isDigit(str[start])) {
    cur = cur * 10 + parseInt(str[start++]);
  }
  return [cur, start - 1];
}

/**
 * @description 是否是数字
 * @param {string} ch
 * @returns {boolean}
 */
function isDigit(ch) {
  return !isNaN(parseInt(ch));
}
