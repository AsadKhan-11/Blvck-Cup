import React from "react";
import BgImage from "../../assets/bg-slate.png";
import CoffeeCup from "../../assets/black.png";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Hero = () => {
  return (
    <main style={bgImage} className="">
      <section className="min-h-[750px] w-full">
        {/* Hero section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[850px] place-items-center">
          <div className="lightOrange mt-[100px] p-4 md:mt-0 space-y-24">
            <h1 className="text-7xl font-bold ml-14 leading-tight ">
              Blvck Cup
            </h1>
            <div className="relative ">
              <div className=" relative z-10 space-y-4">
                <h2 className="text-2xl">Black Lifestyle Lovers</h2>
                <p className="opacity-55 leading-loose text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem quo laborum expedita nisi cumque? Et, quos. Iste
                  doloribus optio ut, voluptatum vel explicabo exercitationem
                </p>
              </div>
              <div className="absolute -top-6 -left-10 w-[250px] h-[180px] bg-gray-700/25 "></div>
            </div>
          </div>
          <div className="relative">
            <img
              src={CoffeeCup}
              alt="Cup Image"
              className="relative z-40 h-[400px] md:h-[700px] img-shadow"
            />
            {/* orange circle ring */}
            <div className="absolute rounded-full top-24 -right-16 primary border-[20px] h-[180px] w-[180px] z-10 "></div>

            <div className="absolute -top-20 left-[200px] z-[1]">
              <div className="darkGrey opacity-40 leading-none text-[140px] scale-150 font-bold">
                Blvck Cup
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
