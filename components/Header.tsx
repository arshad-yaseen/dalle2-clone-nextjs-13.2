import Image from "next/image";
import React from "react";
import OpenaiLogo from "../public/SVGs/openailogo.svg";
import ProfileImage from "../public/images/profile.jpeg";

function Header() {
  return (
    <header className="sticky top-0 z-[100] bg-[#FAFBFD]" >
      <div className="w-full h-[4.2rem] flex border-b items-center border-b-[#EDEDEF]">
        <div className="md:w-1/2 w-full md:static absolute h-full flex items-center pl-5 md:justify-start justify-center">
          <Image
            src={OpenaiLogo}
            alt="openai-logo"
            priority={true}
            className=" cursor-pointer absolute left-5"
          />
          <h1 className="font-bold md:text-[0.930rem] text-[0.980rem] md:ml-10 flex items-center cursor-pointer">
            DALL·E
          </h1>
          <ul className="md:flex hidden">
            <li className="font-regular text-[0.930rem] text-[#767677] ml-5 hover:opacity-80 cursor-pointer transition-opacity">
              History
            </li>
            <li className="font-regular text-[0.930rem] text-[#767677] ml-5 hover:opacity-80 cursor-pointer transition-opacity">
              Collections
            </li>
          </ul>
        </div>
        <div className="w-1/2 h-full flex justify-end items-center md:static absolute right-0">
          <div className="w-7 h-7 rounded-full mr-5 overflow-hidden">
            <Image
              src={ProfileImage}
              alt="profile-image"
              priority={true}
              className="object-cover hover:opacity-80 transition-opacity cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
