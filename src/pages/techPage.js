import * as React from "react";
import Navbar from "../components/navbar";

import vehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import capsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";

import vehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import capsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";

export default function TechPage() {
  const [tech, setTech] = React.useState("VEHICLE");

  const handleTechChange = (newTech) => {
    setTech(newTech);
  };

  let techInfo;
  switch (tech) {
    case "VEHICLE":
      techInfo = {
        image: vehicleLandscape,
        imageDesktop: vehiclePortrait,
        title: "LAUNCH VEHICLE",
        description:
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      };
      break;
    case "SPACEPORT":
      techInfo = {
        image: spaceportLandscape,
        imageDesktop: spaceportPortrait,
        title: "SPACEPORT",
        description:
          "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      };
      break;
    case "CAPSULE":
      techInfo = {
        image: capsuleLandscape,
        imageDesktop: capsulePortrait,
        title: "SPACE CAPSULE",
        description:
          "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      };
      break;
    default:
      techInfo = {
        image: vehicleLandscape,
        imageDesktop: vehiclePortrait,
        title: "LAUNCH VEHICLE",
        description:
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      };
  }
  return (
    <>
      <Navbar />
      <main className="bg-bg-mobile-tech w-full h-screen bg-no-repeat bg-cover -z-10 flex flex-col items-center md:bg-tablet-tech min-h-screen md:h-full lg:bg-desktop-tech">
        <div className="mt-[88px] mb-8 flex justify-center md:mt-[136px] md:ml-6 md:self-start md:mb-[60px] lg:mt-[212px] lg:ml-[166.5px] lg:mb-[137px]">
          <span className="font-barlowcond font-bold tracking-[2.7px] text-[#4D5157] mr-[18px] md:text-xl md:tracking-[3.38px] md:font-bold md:mr-[19px] lg:text-[28px] lg:tracking-[4.72px]">
            03
          </span>
          <span className="font-barlowcond tracking-[2.7px] text-white md:text-xl md:tracking-[3.38px] lg:text-[28px] lg:tracking-[4.72px]">
            SPACE LAUNCH 101
          </span>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:self-start lg:ml-[166.5px]">
          <img
            src={techInfo.image}
            alt={techInfo.title}
            className="my-8 md:my-0 md:mb-[56px] lg:hidden"
          ></img>

          <div className="flex space-x-4 mb-[26px] md:mb-[44px] lg:flex-col lg:items-center lg:space-x-0 lg:space-y-8 lg:self-start lg:mr-[80px]">
            <div
              onClick={() => handleTechChange("VEHICLE")}
              className={`${
                tech === "VEHICLE"
                  ? "w-10 h-10 rounded-full bg-white flex items-center justify-center font-bellefair tracking-[1px] md:w-[60px] md:h-[60px] md:tracking-[1.5px] md:text-2xl lg:w-[80px] lg:h-[80px] lg:text-[32px] lg:tracking-[2px]"
                  : "w-10 h-10 rounded-full bg-transparent flex items-center justify-center font-bellefair tracking-[1px] text-white border border-[#979797] md:w-[60px] md:h-[60px] md:tracking-[1.5px] md:text-2xl lg:w-[80px] lg:h-[80px] lg:text-[32px] lg:tracking-[2px]"
              } cursor-pointer`}
            >
              1
            </div>
            <div
              onClick={() => handleTechChange("SPACEPORT")}
              className={`${
                tech === "SPACEPORT"
                  ? "w-10 h-10 rounded-full bg-white flex items-center justify-center font-bellefair tracking-[1px] md:w-[60px] md:h-[60px] md:tracking-[1.5px] md:text-2xl lg:w-[80px] lg:h-[80px] lg:text-[32px] lg:tracking-[2px]"
                  : "w-10 h-10 rounded-full bg-transparent flex items-center justify-center font-bellefair tracking-[1px] text-white border border-[#979797] md:w-[60px] md:h-[60px] md:tracking-[1.5px] md:text-2xl lg:w-[80px] lg:h-[80px] lg:text-[32px] lg:tracking-[2px]"
              } cursor-pointer`}
            >
              2
            </div>
            <div
              onClick={() => handleTechChange("CAPSULE")}
              className={`${
                tech === "CAPSULE"
                  ? "w-10 h-10 rounded-full bg-white flex items-center justify-center font-bellefair tracking-[1px] md:w-[60px] md:h-[60px] md:tracking-[1.5px] md:text-2xl lg:w-[80px] lg:h-[80px] lg:text-[32px] lg:tracking-[2px]"
                  : "w-10 h-10 rounded-full bg-transparent flex items-center justify-center font-bellefair tracking-[1px] text-white border border-[#979797] md:w-[60px] md:h-[60px] md:tracking-[1.5px] md:text-2xl lg:w-[80px] lg:h-[80px] lg:text-[32px] lg:tracking-[2px]"
              } cursor-pointer`}
            >
              3
            </div>
          </div>

          <div className="flex flex-col items-center px-6 md:mb-[80px] md:px-0 lg:items-start">
            <span className="font-barlowcond text-[14px] text-[#D0D6F9] tracking-[2.36px] mb-[9px] md:text-base md:tracking-[2.7px] md:mb-[26px] lg:text-base lg:tracking-[2.7px] lg:mb-[30px]">
              THE TERMINOLOGY...
            </span>
            <h1 className="font-bellefair text-2xl text-white text-center mb-4 md:text-[40px] md:mb-7 lg:text-[56px] lg:mb-[32px]">
              {techInfo.title}
            </h1>
            <p className="font-barlow text-[15px] leading-[25px] text-[#D0D6F9] text-center md:text-base md:leading-7 md:w-[458px] lg:text-[18px] lg:leading-[32px] lg:text-left">
              {techInfo.description}
            </p>
          </div>

          <img
            src={techInfo.imageDesktop}
            alt={techInfo.title}
            className="hidden lg:block lg:absolute lg:bottom-[101px] lg:right-0"
          ></img>
        </div>
      </main>
    </>
  );
}
