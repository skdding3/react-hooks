import { createRef, useRef, useState } from "react";

export default function Hookprac8() {
  const [value, setValue] = useState("");
  const input1ref = createRef();
  const input2ref = useRef();

  console.log(input1ref.current, input2ref.current);

  return (
    <div>
      {/* 컨트롤 컴포넌트 */}
      <input value={value} onChange={change} />
      {/* 언컨트롤드 컴포넌트 */}
      <input ref={input1ref} />
      <input ref={input2ref} />
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
