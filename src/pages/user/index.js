"use client";

import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:3000");
    socket.on("notifyUser", (message) => {
      setMessage(message);
      toast(message);
    });
    // Cleanup function to remove the event listener
    return () => {
      socket.off("notifyUser ");
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <ToastContainer />
      <div>
        <p>User Page</p>
      </div>
    </div>
  );
};

export default User;
