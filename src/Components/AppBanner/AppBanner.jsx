import React from "react";
import banner from "../../assets/banner.jpg";
import appStore from "../../assets/app_store.png";
import playStore from "../../assets/play_store.png";
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
            <h1 className="text-2xl text-center font-semibold sm:text-4xl">
              Download the app
            </h1>
            <p className="text-center sm:px-20">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis quo dicta accusamus.
            </p>
            <div className="flex justify-center items-center">
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                {" "}
                <img src={appStore} alt="app store logo" />
              </a>
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <img src={playStore} alt="play store logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
