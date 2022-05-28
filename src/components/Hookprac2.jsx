import React from "react";

export default function Hookprac2() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>클릭 수 {count} 번</p>
      <button onClick={click}>눌러 봐</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}
