import React from "react";
import worldMap from "../../assets/world-map.png";
import { delay, motion } from "framer-motion";
const WhereToBuy = () => {
  return (
    <div className="container mb-36 mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-8">
        {/* Form section */}
        <div className="space-y-8">
          <motion.h1
            className="text-4xl font-bold font-serif text-[#1a1f25]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
          >
            Buy Our Products From Anywhere
          </motion.h1>
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 100 }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
          >
            <input
              type="text"
              placeholder="Name"
              className="input-style w-full "
            />
            <input
              type="email"
              placeholder="Email"
              className="input-style w-full lg:w-[150px]"
            />
          </motion.div>
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.6,
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
          >
            <input
              type="text"
              placeholder="Country"
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="text"
              placeholder="ZipCode"
              className="input-style w-full "
            />
          </motion.div>
          <motion.button
            className="primary-btn w-full cursor-pointer"
            viewport={{ once: true, amount: 0.5 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
          >
            Order Now
          </motion.button>
        </div>
        {/* World map section  */}
        <div className="col-span-2">
          <motion.img
            src={worldMap}
            alt="Map image"
            className="w-full sm:w-[500px] mx-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1,
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
