import { useState } from "react";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4 hover:text-[#0065ff]`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full "
      } drop-shadow-md lg:hidden`}
    >
      <div className="flex  items-center space-x-2 ml-3 p-5 border-b ">
        <img
          className="h-7"
          src="images/trello.png"
          alt="trello-logo"
          loading="lazy"
        />
        <p className="font-ubuntu font-bold text-3xl tracking-tight ">Trello</p>
      </div>
      <div className="flex flex-col ml-2 mr-2 text-[#293856] text-xl leading-10 space-y-3 py-3  ">
        <NavLink to="/contact">Features</NavLink>
        <hr />
        <NavLink to="/about">Solutions</NavLink>
        <hr />
        <NavLink to="/contact">Plans</NavLink>
        <hr />
        <NavLink to="/about">Pricing</NavLink>
        <hr />
        <NavLink to="/about">Resources</NavLink>
        <hr />

        <button className=" btn ">Get Trello for free</button>

        <button className="bg-white border-solid border border-[#0065ff]  px-3 py-2 mt-0 mb-0 text-[#293856] ">
          Log In
        </button>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex filter  drop-shadow-md hover:drop-shadow-lg bg-white  items-center p-1 sticky top-0 ">
      <MobileNav open={open} setOpen={setOpen} />

      {/* <a className="text-2xl font-semibold">LOGO</a> */}
      <div className="flex items-center  text-[#293856] ">
        <div className="flex items-center space-x-2 ml-3">
          <img
            className="h-7"
            src="images/trello.png"
            alt="trello-logo"
            loading="lazy"
          />
          <p className="font-ubuntu font-bold text-3xl tracking-tight  ">
            Trello
          </p>
        </div>
        <div className="hidden lg:flex  space-x-10 tracking-wide ml-10  ">
          <NavLink to="/contact">Features</NavLink>
          <NavLink to="/about">Solutions</NavLink>
          <NavLink to="/contact">Plans</NavLink>
          <NavLink to="/about">Pricing</NavLink>
          <NavLink to="/about">Resources</NavLink>
        </div>
      </div>

      <div className="w-9/12 flex justify-end items-center ">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center lg:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-[#293856] rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-[#293856] rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-[#293856] rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>
      </div>
      <div className=" hidden lg:flex  items-center  space-x-5 text-md lg:text-xl ">
        <p className="truncate ">Log in</p>
        <button className="btn truncate ">Get Trello for free</button>
      </div>
    </nav>
  );
}
