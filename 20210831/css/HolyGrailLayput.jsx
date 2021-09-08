/**
 * 圣杯布局
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
      <div className="holy-grail-layout" style={{ width: width + "px" }}>
        <div className="center">
          A In the process of internal desktop applications development, many
          different design specs and implementations would be involved.
        </div>
        <div className="left">left</div>
        <div className="right">right</div>
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
