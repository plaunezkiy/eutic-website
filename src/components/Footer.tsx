import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const IconLink = ({ icon, link }: { icon: React.ReactNode; link: string }) => {
  return (
    <a
      className="text-3xl p-2 border-2 border-gray-700 hover:bg-gray-700 text-gray-700 hover:text-white rounded-lg shadow duration-300"
      href={link}
    >
      {icon}
    </a>
  );
};

const Footer = () => {
  return (
    <div className="w-full border-t flex flex-col items-center">
      {/* by ed uni and eutic */}
      <div className="w-full lg:w-3/4 p-4 flex items-center justify-center">
        <a href="/">
          <img className="h-20" src="logo.png" alt="eutic_logo" />
        </a>
        <a className="mx-auto" href="https://www.ed.ac.uk/">
          <img
            className="h-20"
            src="edinburgh_university.png"
            alt="edinburgh_university_logo"
          />
        </a>
        <div className="flex gap-2 items-center">
          <IconLink
            icon={<FaInstagram />}
            link="https://www.instagram.com/eutic24_25/"
          />
          <IconLink
            icon={<FaFacebook />}
            link="https://www.facebook.com/EUTIC/"
          />
          <IconLink
            icon={<FaLinkedin />}
            link="https://uk.linkedin.com/company/edinburgh-university-trading-and-investment-club"
          />
        </div>
      </div>
      <div className="bg-gray-500 h-12 w-full flex items-center justify-center">
        <p className="text-white">
          EUTIC 2024 | Design by Nik Peleshatyi
        </p>
      </div>
    </div>
  );
};

export default Footer;
