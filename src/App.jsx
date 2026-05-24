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

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4 py-8">
        
        <div
          className={`w-full transition-all duration-500 ${
            joined ? "max-w-6xl" : "max-w-md"
          }`}
        >
          
          {!joined ? (
            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-[0_8px_40px_rgba(0,0,0,0.45)] p-8 md:p-10">
              
              <div className="text-center mb-8">
                
                <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-5">
                  <span className="text-4xl text-white font-bold">A</span>
                </div>

                <h2 className="text-4xl font-bold text-white mb-3">
                  Welcome Back
                </h2>

                <p className="text-slate-400 leading-relaxed">
                  Join the anonymous help community and start chatting with people around the world.
                </p>
              </div>

              <div className="space-y-5">
                
                <input
                  type="text"
                  placeholder="Enter your name..."
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full h-14 px-5 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300"
                />

                <button
                  onClick={() => setJoined(true)}
                  className="w-full h-14 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-lg shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Join Chat
                </button>

              </div>
            </div>
          ) : (
            <div className="h-[85vh] overflow-hidden rounded-[32px]">
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