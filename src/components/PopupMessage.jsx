import React, { useEffect, useState } from "react";
import "../styles/popUp.css";

const PopupMessage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedMessage = localStorage.getItem("popupMessage");
    if (storedMessage) {
      setMessage(storedMessage);
      localStorage.removeItem("popupMessage");
    }
  }, []);

  if (!message) return null;

  return (
    <div className="popup">
      <p>{message}</p>
      <button onClick={() => setMessage("")}>OK</button>
    </div>
  );
};

export default PopupMessage;

