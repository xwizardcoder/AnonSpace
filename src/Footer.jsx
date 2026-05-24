function Footer() {
  return (
    <>
      <footer className="w-full bg-slate-950 border-t border-white/10">
        
        <div className="max-w-7xl mx-auto px-6 py-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                ANONYMOUS HELP FORUM
              </h2>

              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                A safe and supportive space where people can connect,
                communicate, and help each other anonymously in real time.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>

              <ul className="space-y-3">
                <li>
                  <a
                    href=""
                    className="text-slate-400 hover:text-cyan-400 transition duration-300"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="text-slate-400 hover:text-cyan-400 transition duration-300"
                  >
                    Community
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="text-slate-400 hover:text-cyan-400 transition duration-300"
                  >
                    Support
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="text-slate-400 hover:text-cyan-400 transition duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Stay Connected
              </h3>

              <p className="text-slate-400 text-sm md:text-base mb-4">
                Join our growing anonymous community and stay updated with new
                features and discussions.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-slate-700 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-cyan-400"
                />

                <button className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>

          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            
            <p className="text-slate-500 text-sm text-center md:text-left">
              © 2026 Anonymous Help Forum. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <a
                href=""
                className="text-slate-400 hover:text-cyan-400 transition duration-300"
              >
                Privacy
              </a>

              <a
                href=""
                className="text-slate-400 hover:text-cyan-400 transition duration-300"
              >
                Terms
              </a>

              <a
                href=""
                className="text-slate-400 hover:text-cyan-400 transition duration-300"
              >
                Security
              </a>
            </div>

          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;