import { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

function UseScroll() {
  const { y } = useScroll();
  return (
      <div style={{ height: "1000vh" }}>
        <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>useScroll</h1>
      </div>
  );
}

export default UseScroll;
