let i = 0;
let j = 0;
const { useState } = window.React;
/**
 * @description 关于state hook的闭包问题
 * @function FunnyButton
 * @returns {object} jsx元素
 */
function FunnyButton() {
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);

  const add = () => {
    setList(
      list.concat(
        <button key={i} onClick={add}>
          {i++}
        </button>
      )
    );
  };
  const add2 = () => {
    setList2((list2) =>
      list2.concat(
        <button key={j} onClick={add2}>
          {j++}
        </button>
      )
    );
  };
  return (
    <React.Fragment>
      <button onClick={add}>add</button>
      {list}
      <br />
      <button onClick={add2}>add2</button>
      {list2}
    </React.Fragment>
  );
}
ReactDOM.render(<FunnyButton />, document.querySelector("#root"));
