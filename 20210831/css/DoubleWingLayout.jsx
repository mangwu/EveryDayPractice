/**
 * @description 双飞翼布局
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-13 20:21:40
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * 双飞翼布局
 */
const { useState } = window.React;
function App() {
  const [width, setWidth] = useState(800);
  const [value, setValue] = useState(100);
  const handleRangeChange = (e) => {
    const v = e.target.value;
    setValue(v);
    const width = 400 + v * 4;
    setWidth(width);
  };
  return (
    <div className="main">
      <div className="range">
        <input
          type="range"
          value={value}
          onChange={(e) => handleRangeChange(e)}
        />
      </div>
      <div className="double-wing-layout" style={{ width: width + "px" }}>
        <div className="center">
          <div className="inner-center">
            A In the process of internal desktop applications development, many
            different design specs and implementations would be involved.
          </div>
        </div>
        <div className="left">left</div>
        <div className="right">right</div>
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
