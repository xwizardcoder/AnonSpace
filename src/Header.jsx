function Header() {
  return (
    <>
      <header className="w-full bg-slate-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="right">
            <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-center md:text-left">
              AnonSpace 
            </h3>
          </div>

          <div className="left">
            <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <li>
                <a
                  href=""
                  className="text-sm md:text-base font-medium hover:text-cyan-400 transition duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="text-sm md:text-base font-medium hover:text-cyan-400 transition duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="text-sm md:text-base font-medium hover:text-cyan-400 transition duration-300"
                >
                  Community
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="text-sm md:text-base font-medium hover:text-cyan-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

        </div>
      </header>
    </>
  )
}

export default Header
