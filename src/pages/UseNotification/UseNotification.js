const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    console.error("Notification API not supported in this browser.");
    return () => alert("Your browser does not support Notification API.");
  }

  const fireNotif = () => {
    if (Notification.permission === "granted") {
      new Notification(title, options);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          console.warn("Notification permission denied.");
        }
      });
    } else {
      console.warn("Notification permission is already denied.");
    }
  };

  return fireNotif;
};

function UseNotification() {
  const triggerNotif = useNotification("Can I steal your kimchi?", {
    body: "I Love kimchi, don't you?",
  });

  return (
      <div>
        <h1>useNotification</h1>
        <button onClick={triggerNotif}>Trigger Notification</button>
      </div>
  );
}

export default UseNotification;
