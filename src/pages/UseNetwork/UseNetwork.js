import {useEffect, useState} from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    if (typeof onChange == "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

function UseNetwork() {
  const handleNetworkChange = (online) =>
      console.log(online ? "We just went online" : "We are offline");
  const onLine = useNetwork(handleNetworkChange);
  return (
      <div>
        <h1>useNetwork</h1>
        <p>{onLine ? "Onlin" : "Offline"}</p>
      </div>
  );
}

export default UseNetwork;
