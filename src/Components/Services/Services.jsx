import React, { useState } from "react";
import { motion, stagger } from "framer-motion";
import coffee1 from "../../assets/coffee1.png";
import coffee3 from "../../assets/coffee3.png";
const Services = () => {
  const [services, setServices] = useState([
    {
      img: coffee1,
      title: "Black Coffee",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: coffee3,
      title: "Hot Chocolate",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: coffee1,
      title: "Cold Coffee",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        ease: "easeInOut",
      },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.7,
      },
    },
  };
  return (
    <div className="container my-16 space-y-4">
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          className="text-3xl font-bold text-[#272c35]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            type: "spring",
            damping: 10,
            stiffness: 100,
          }}
        >
          {" "}
          Fresh and
          <span className="text-[#f15909] z-10"> Tasty Coffee</span>
        </motion.h1>
        <motion.p
          className="text-sm opacity-50"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.8,
            type: "spring",
            damping: 10,
            stiffness: 100,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          molestias minima fugiat aut deserunt veritatis nihil dicta, alias
          molestiae! Nulla neque, hic commodi expedita illum ipsa aliquid,
          veritatis ad laborum sequi suscipit quo.
        </motion.p>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.5 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="text-center p-4 space-y-6"
            variants={cardVariants}
          >
            <img
              src={service.img}
              alt="Coffee Image"
              className="drop-shadow-2xl max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-[#f19509]">
                {service.title}
              </h1>
              <h1 className="text-[#1a1f25]">{service.desc}</h1>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {}
    </div>
  );
};

export default Services;
