import React from "react";

// useState => count
// useState => { count: 0 };

export default function Hookprac3() {
  const [state, setState] = React.useState({ count: 0 });

  return (
    <div>
      <p>클릭 수 {state.count} 번</p>
      <button onClick={click}>눌러 봐</button>
    </div>
  );

  function click() {
    setState((state) => ({
      count: state.count + 1,
    }));
  }
}
