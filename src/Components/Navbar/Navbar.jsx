import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-5 text-white z-20">
      <div className="container">
        <div className="flex justify-between items-center">
          <motion.h1
            className="text-2xl font-semibold uppercase "
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              dampness: 10,
              stiffness: 100,
            }}
          >
            <span className="primary">Blvck </span> cup
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              dampness: 10,
              stiffness: 100,
            }}
          >
            <GiHamburgerMenu
              className="text-3xl cursor-pointer"
              onClick={() => setSidebar(!sidebar)}
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
