"use client";

import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const [message, setMessage] = useState("");
  const sendNotification = () => {
    const socket = io("http://localhost:3000");
    socket.emit("notifyUser");
    toast("Notification Sent by theGoodOldDeveloper 👑");
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <p>Admin Page</p>
      </div>
      <div>
        <button onClick={sendNotification}>Notify All Users</button>
      </div>
    </div>
  );
};

export default Admin;
