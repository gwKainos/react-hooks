import {useEffect, useState} from "react";

function UseEffect() {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  useEffect(() => {
    sayHello()
  }, []);

  return (
      <div>
        <h1>Hi</h1>
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
      </div>
  );
}

export default UseEffect;
