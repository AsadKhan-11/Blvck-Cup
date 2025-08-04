import React, { useState } from "react";
import BgImage from "../../assets/bg-slate.png";
import CoffeeCup from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Hero = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <main style={bgImage} className="z-50">
      <section className="relative min-h-[750px] w-full ">
        <div className="container">
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[850px] place-items-center">
            <div className="max-w-[100%] lightOrange mt-[100px] p-4 md:mt-0 space-y-24">
              <motion.h1
                className="text-6xl font-bold  leading-tight text-center md:text-left "
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.2,
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                }}
              >
                SIP IN BLACK ELEGANCE{" "}
              </motion.h1>
              <div className="relative  ">
                <div className=" relative z-10 space-y-4 ml-2 max-w-[350px] ">
                  <h2 className="text-2xl">Black Lifestyle Lovers</h2>
                  <p className="opacity-55 leading-loose text-sm ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem quo laborum expedita nisi cumque? Et, quos. Iste
                    doloribus optio ut, voluptatum vel explicabo exercitationem
                  </p>
                </div>
                <div className="absolute -top-6 left-0 w-[250px] h-[180px] bg-gray-700/25 "></div>
              </div>
            </div>
            {/* Middle Hero Section */}
            <div className="relative">
              <motion.img
                src={CoffeeCup}
                alt="Cup Image"
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.4,
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                }}
              />
              {/* orange circle ring */}
              <motion.div
                className="absolute rounded-full top-24  -right-16 primary border-[20px] h-[180px] w-[180px] z-10 "
                initial={{ clipPath: "circle(0% at 50% 50%)" }}
                animate={{ clipPath: "circle(75% at 50% 50%)" }}
                transition={{
                  delay: 0.4,
                  duration: 2,
                }}
              ></motion.div>
            </div>
            {/* Third Section */}
            <div className="relative lightOrange mt-[100px] p-4 md:mt-0 space-y-24 hidden lg:block">
              <h1 className="opacity-0 text-7xl font-bold ml-14 leading-tight ">
                Blvck Cup
              </h1>
              <div className="relative ">
                <div className=" relative z-10 space-y-4">
                  <h2 className="text-2xl">The Design</h2>
                  <p className="opacity-55 leading-loose text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem quo laborum expedita nisi cumque?
                  </p>
                </div>
                <div className="absolute -top-6 right-0 w-[250px] h-[180px] bg-gray-950 opacity-50 "></div>
              </div>
              <div className="absolute -top-30 left-[0] z-[1] ">
                <div className="darkGrey opacity-5 leading-none text-[120px]  scale-120 font-bold ml-4">
                  Blvck Cup
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar */}

          {sidebar && (
            <motion.div
              className="absolute top-0 right-0 h-full w-36 bg-gradient-to-b from-[#f19509]/80 to-[#e86f00]/80 backdrop-blur-sm z-10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col gap-5 items-center justify-center">
                  <div className="h-16 w-[1px] bg-white"></div>
                  <div className="icons-container ">
                    <FaFacebook color="white" />
                  </div>
                  <div className="icons-container">
                    <FaInstagram color="white" />
                  </div>
                  <div className="icons-container">
                    <FaTwitter color="white" />
                  </div>
                  <div className="h-16 w-[1px] bg-white"></div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Hero;
