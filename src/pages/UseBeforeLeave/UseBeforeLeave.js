import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore?.();
    }
  };

  useEffect(() => {
    if (typeof onBefore !== "function") return;

    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, [onBefore]);
};


function UseBeforeLeave() {
  const begForLife = () => console.log("please dont leave");
  useBeforeLeave(begForLife);
  return (
      <>
        <h1>useBeforeLeave</h1>
      </>
  );
}

export default UseBeforeLeave;
