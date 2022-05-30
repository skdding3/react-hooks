import { useCallback, useMemo, useState } from "react";

function sum(persons) {
  console.log("sum...");
  return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
}

export default function Hookprac7() {
  const [value, setValue] = useState("");
  const [persons] = useState([
    { name: "Sunki", age: 31 },
    { name: "Gilbert", age: 27 },
  ]);

  // useMemo

  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);

  // useCallback

  const click = useCallback(() => {
    console.log(value);
  }, []);

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>클릭!</button>
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
