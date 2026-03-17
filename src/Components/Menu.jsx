import React from "react";
import Img1 from "../assets/coffee-white.png";
import Img2 from "../assets/coffee2.png";
import { motion } from "framer-motion";

const MenuData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img1,
    name: "Americano",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Menu = () => {
  return (
    <div className="py-20" id="menu">
      <div className="max-w-7xl mx-auto">
        {/* Heading section */}
        <div className="text-center mb-20">
          <motion.h1 
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:1.5, delay:0.5}}
          className="text-4xl font-bold font-cursive text-amber-900">
            Best Coffee for You
          </motion.h1>
        </div>
        {/* menu card section */}
        <motion.div
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1.5, delay:0.5}}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {MenuData.map((menu)=>(
                <div className="rounded-2xl bg-white hover:bg-amber-900 transition-all hover:text-white relative shadow-xl duration-high group max-w-75">
                    <div className="h-30.5">
                        <img src={menu.img} alt="" className="max-w-50 block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
                    </div>
                    <div className="p-4 text-center">
                        <div className="w-full"></div>
                        <h1 className="text-xl font-bold">{menu.name}</h1>
                        <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">{menu.description}</p>
                        <div className="flex justify-between mt-5 px-6 items-center">
                            <p className="text-lg font-semibold">$3.75</p>
                            <button className="bg-amber-900 text-white px-3 py-2 rounded-md group-hover:bg-white group-hover:text-amber-900">Order Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
