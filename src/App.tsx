import React from "react";
import { autorun } from "mobx";
import { observer } from "mobx-react";
import store from "./store";

// 컴포넌트를 observer로 감싸주어 state가 실시간으로 변경되는 것을 감지한다
const App: React.FC = observer(() => {
  const { countClass, countObject, doubleClass, doubleObject } = store;
  // autorun을 통해 해당 computed 값이 어떻게 바뀌는지 감지
  autorun(() => {
    console.log("만약 double이 8이라면 value를 0으로 초기화");
    if (doubleClass.double === 8) {
      doubleClass.value = 0;
    }
    if (doubleObject.double === 8) {
      doubleObject.value = 0;
    }
  });

  return (
    <div style={{ padding: "50px" }}>
      <div style={{ marginBottom: "50px" }}>
        <h1>Count (Class)</h1>
        <div>number: {countClass.number}</div>
        <button onClick={() => countClass.increase()}>plus</button>
        <button onClick={() => countClass.decrease()}>minus</button>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <h1>Count (Object)</h1>
        <div>num: {countObject.num}</div>
        <button onClick={() => countObject.increase()}>plus</button>
        <button onClick={() => countObject.decrease()}>minus</button>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <h1>Computed (Class)</h1>
        <div>value: {doubleClass.value}</div>
        <div>double number: {doubleClass.double}</div>
        <button onClick={() => doubleClass.increment()}>
          double increment
        </button>
      </div>

      <div>
        <h1>Computed (Object)</h1>
        <div>value: {doubleObject.value}</div>
        <div>double number: {doubleObject.double}</div>
        <button onClick={() => doubleObject.increment()}>
          double increment
        </button>
      </div>
    </div>
  );
});

export default App;
// export default observer(App) // 이렇게 감싸줄수도 있다
