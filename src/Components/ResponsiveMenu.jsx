import React from "react";

const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`${open ? "left-0" : "-left-full"} fixed top-0 bottom-0 x-30 flex h-screen w-[75%] flex-col justify-between bg-amber-950 text-black px-8 pb-6 pt-16 rounded-r-xl shadow-md transition-all md:hidden`}
    >
      <div>
        <nav className="mt-12">
          <ul className="flex flex-col gap-7 text-lg font-semibold text-white">
            <a href="#home">
              <li onClick={()=>setOpen(false)} className="cursor-pointer">Home</li>
            </a>
            <a href="#menu">
              <li onClick={()=>setOpen(false)} className="cursor-pointer">Menu</li>
            </a>
            <a href="#about">
              <li onClick={()=>setOpen(false)} className="cursor-pointer">About</li>
            </a>
            <a href="#testimonial">
              <li onClick={()=>setOpen(false)} className="cursor-pointer">Testimonial</li>
            </a>
             <a href="#contact">
            <button onClick={()=>setOpen(false)} className="bg-amber-800 hover:bg-amber-900 text-white py-1 px-3 rounded-md">
              Contact
            </button>
          </a>
          </ul>
        </nav>
      </div>
      <div className="text-white">
        <h1>Made with ❤️ by Saeed.</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
