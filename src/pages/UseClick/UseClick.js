import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }

    const currentElement = element.current;
    if (currentElement) {
      currentElement.addEventListener("click", onClick);
    }

    return () => {
      if (currentElement) {
        currentElement.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return element;
};

function UseClick() {
  const sayHello = () => console.log("Hello");
  const click = useClick(sayHello);
  return (
      <div>
        <h1>useClick</h1>
        <div ref={click}>Click Here</div>
      </div>
  );
}

export default UseClick;
