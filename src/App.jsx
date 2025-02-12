import React, { useState } from "react";
import Chat from "./Chat";
import Header from "./Header";
import './App.css'

const App = () => {
  const [username, setUsername] = useState("");
  const [joined, setJoined] = useState(false);

  return (
<>

<Header></Header>



<div className="body">
       <div className="box">
      {!joined ? (
        <div className="box-content">
          <h2>Enter Your Name</h2>
          <input
            type="text"
            placeholder="Your name..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setJoined(true)}>Join Chat</button>
        </div>
      ) : (
        <Chat username={username} />
      )}
    </div>

    </div>



</>

   
   
  );
};

export default App;
