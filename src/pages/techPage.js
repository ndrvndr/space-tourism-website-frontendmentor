import * as React from "react";
import Navbar from "../components/navbar";

import vehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import capsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";

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
        title: "LAUNCH VEHICLE",
        description:
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      };
      break;
    case "SPACEPORT":
      techInfo = {
        image: spaceportLandscape,
        title: "SPACEPORT",
        description:
          "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      };
      break;
    case "CAPSULE":
      techInfo = {
        image: capsuleLandscape,
        title: "SPACE CAPSULE",
        description:
          "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      };
      break;
    default:
      techInfo = {
        image: vehicleLandscape,
        title: "LAUNCH VEHICLE",
        description:
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      };
  }
  return (
    <>
      <Navbar />
      <main className="bg-bg-mobile-tech w-full h-screen bg-no-repeat bg-cover -z-10 flex flex-col items-center">
        <div className="w-[221px] h-[19px] mt-[88px] flex justify-center">
          <span className="font-barlowcond font-bold tracking-[2.7px] text-[#4D5157] mr-[18px]">
            03
          </span>
          <span className="font-barlowcond tracking-[2.7px] text-white">
            SPACE LAUNCH 101
          </span>
        </div>

        <img src={techInfo.image} alt={techInfo.title} className="my-8"></img>

        <div className="flex space-x-4 mb-[26px]">
          <div
            onClick={() => handleTechChange("VEHICLE")}
            className={`${
              tech === "VEHICLE"
                ? "w-10 h-10 rounded-full bg-white flex items-center justify-center font-bellefair tracking-[1px]"
                : "w-10 h-10 rounded-full bg-transparent flex items-center justify-center font-bellefair tracking-[1px] text-white border border-[#979797]"
            } cursor-pointer`}
          >
            1
          </div>
          <div
            onClick={() => handleTechChange("SPACEPORT")}
            className={`${
              tech === "SPACEPORT"
                ? "w-10 h-10 rounded-full bg-white flex items-center justify-center font-bellefair tracking-[1px]"
                : "w-10 h-10 rounded-full bg-transparent flex items-center justify-center font-bellefair tracking-[1px] text-white border border-[#979797]"
            } cursor-pointer`}
          >
            2
          </div>
          <div
            onClick={() => handleTechChange("CAPSULE")}
            className={`${
              tech === "CAPSULE"
                ? "w-10 h-10 rounded-full bg-white flex items-center justify-center font-bellefair tracking-[1px]"
                : "w-10 h-10 rounded-full bg-transparent flex items-center justify-center font-bellefair tracking-[1px] text-white border border-[#979797]"
            } cursor-pointer`}
          >
            3
          </div>
        </div>

        <div className="flex flex-col items-center px-6">
          <span className="font-barlowcond text-[14px] text-[#D0D6F9] tracking-[2.36px] mb-[9px]">
            THE TERMINOLOGY...
          </span>
          <h1 className="font-bellefair text-2xl text-white text-center mb-4">
            {techInfo.title}
          </h1>
          <p className="font-barlow text-[15px] leading-[25px] text-[#D0D6F9] text-center">
            {techInfo.description}
          </p>
        </div>
      </main>
    </>
  );
}
