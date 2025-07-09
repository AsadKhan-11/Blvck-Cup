import credits from "../../assets/credit-cards.webp";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaPhone,
  FaGoogle,
  FaLocationArrow,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#f19509] to-[#e86f00] pt-12 pb-8 text-white ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold uppercase">Blvck Cup</h1>
            <p className="text-sm max-w-[300px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              vero dolor laudantium suscipit in harum nemo eligendi
              voluptatibus.
            </p>
            <div>
              <p className="flex items-center gap-2 ">
                <FaPhone />
                +1 (123) 456-7890
              </p>
            </div>

            <p className="flex items-center gap-2">
              <FaLocationArrow />
              Texas , United States
            </p>
          </div>
          {/* Company Links */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About </li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              {/* Another Links Section */}
              <div className="">
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About </li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Social Links Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">Payment methods</h1>
              <img src={credits} alt="payment methods" className="w-[80%]" />
            </div>
          </div>
          <p className="text-white text-center mt-8 pt-8 border-t-2">
            Copyright &copy; 2024 Company Name. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
