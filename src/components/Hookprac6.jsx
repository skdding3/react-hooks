import { useReducer } from "react";

// reducer => state 를 변경하는 로직이 담겨있는 함수
const reducer = (state, action) => {
  if (action.type === "PLUS") {
    return {
      count: state.count + 1,
    };
  }
  return state;
};

// dispatch => action 객체를 넣어 실행

// action => 객체이고 필수 프로퍼티로 type 가진다.

export default function Hookprac6() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>클릭 수 {state.count} 번</p>
      <button onClick={click}>눌러 봐</button>
    </div>
  );

  function click() {
    dispatch({ type: "PLUS" });
  }
}
