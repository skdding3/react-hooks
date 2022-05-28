import React from "react";

export default function Hookprac5() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("componentDidMount");

    return () => {
      // cleanup
      // componentWillUnmount
    };
  }, []);

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);

    return () => {
      // cleanup
      console.log("cleanup by count", count);
    };
  }, [count]); // []가 들어가면 최초만 실행하게 해준다.

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
