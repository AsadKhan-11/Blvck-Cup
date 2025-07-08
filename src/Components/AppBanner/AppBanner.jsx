import React from "react";
import banner from "../../assets/banner.jpg";
import appStore from "../../assets/app_store.png";
import playStore from "../../assets/play_store.png";
import { motion } from "framer-motion";
const AppBanner = () => {
  const BannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };

  return (
    <div className="container my-14">
      <div
        style={BannerStyle}
        className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <motion.h1
              className="text-2xl text-center font-semibold sm:text-4xl"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                type: "spring",
                damping: 10,
                stiffness: 100,
              }}
            >
              Download the app
            </motion.h1>
            <motion.p
              className="text-center sm:px-20"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                type: "spring",
                damping: 10,
                stiffness: 100,
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis quo dicta accusamus.
            </motion.p>
            <div className="flex justify-center items-center">
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                {" "}
                <motion.img
                  src={appStore}
                  alt="app store logo"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4,
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                  }}
                />
              </a>
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <motion.img
                  src={playStore}
                  alt="play store logo"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5,
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
