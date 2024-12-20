import { useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();

  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      runCb(true);
    }
  };

  const exitFull = () => {
    if (document.fullscreenElement) { // 전체 화면 상태인지 확인
      document.exitFullscreen();
      runCb(false);
    } else {
      console.warn("Cannot exit fullscreen because no element is in fullscreen mode");
    }
  };

  return { element, triggerFull, exitFull };
};


function UseFullscreen() {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
      <div>
        <h1>useFullscreen</h1>
        <div ref={element}>
          <img src="/images/image.webp" width="250" alt="grape"/>
          <div>
            <button onClick={exitFull}>Exit Fullscreen</button>
            <button onClick={triggerFull}>Make Fullscreen</button>
          </div>
        </div>
      </div>
  );
}

export default UseFullscreen;
