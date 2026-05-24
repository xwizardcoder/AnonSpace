import React, { useState } from "react";
import Chat from "./Chat";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4 py-10">
        
        <div
          className={`w-full ${
            joined ? "max-w-6xl h-[85vh]" : "max-w-md"
          } bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-6 md:p-8 transition-all duration-300`}
        >
          
          {!joined ? (
            <div className="flex flex-col gap-6">
              
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Welcome Back
                </h2>

                <p className="text-slate-300 text-sm md:text-base">
                  Join the anonymous help community and start chatting.
                </p>
              </div>

              <input
                type="text"
                placeholder="Enter your name..."
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-slate-500 text-white placeholder:text-slate-300 outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
              />

              <button
                onClick={() => setJoined(true)}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold py-3 rounded-xl transition duration-300 shadow-lg hover:scale-[1.02]"
              >
                Join Chat
              </button>
            </div>
          ) : (
            <div className="h-full">
              <Chat username={username} />
            </div>
          )}
        </div>

      </div>

      <Footer />
    </>
  );
};

export default App;
