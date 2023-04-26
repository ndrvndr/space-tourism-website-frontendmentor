import * as React from "react";
import Navbar from "../components/navbar";

import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import ansari from "../assets/crew/image-anousheh-ansari.png";

import douglasTablet from "../assets/crew/image-douglas-tablet.svg";
import markTablet from "../assets/crew/image-mark-tablet.svg";
import victorTablet from "../assets/crew/image-victor-tablet.svg";
import ansariTablet from "../assets/crew/image-ansari-tablet.svg";

import douglasDesktop from "../assets/crew/image-douglas-desktop.svg";
import markDesktop from "../assets/crew/image-mark-desktop.svg";
import victorDesktop from "../assets/crew/image-victor-desktop.svg";
import ansariDesktop from "../assets/crew/image-ansari-desktop.svg";

export default function CrewPage() {
  const [crew, setCrew] = React.useState("DOUGLAS");

  const handleCrewChange = (newCrew) => {
    setCrew(newCrew);
  };

  let crewInfo;
  switch (crew) {
    case "DOUGLAS":
      crewInfo = {
        image: douglas,
        imageTablet: douglasTablet,
        imageDesktop: douglasDesktop,
        title: "DOUGLAS HURLEY",
        position: "COMMANDER",
        description:
          "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      };
      break;
    case "MARK":
      crewInfo = {
        image: mark,
        imageTablet: markTablet,
        imageDesktop: markDesktop,
        title: "MARK SHUTTLEWORTH",
        position: "MISSION SPECIALIST",
        description:
          "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      };
      break;
    case "VICTOR":
      crewInfo = {
        image: victor,
        imageTablet: victorTablet,
        imageDesktop: victorDesktop,
        title: "VICTOR GLOVER",
        position: "PILOT",
        description:
          "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      };
      break;
    case "ANSARI":
      crewInfo = {
        image: ansari,
        imageTablet: ansariTablet,
        imageDesktop: ansariDesktop,
        title: "ANOUSHEH ANSARI",
        position: "FLIGHT ENGINEER",
        description:
          "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
      };
      break;
    default:
      crewInfo = {
        image: douglas,
        imageTablet: douglasTablet,
        imageDesktop: douglasDesktop,
        title: "DOUGLAS HURLEY",
        position: "COMMANDER",
        description:
          "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      };
  }
  return (
    <>
      <Navbar />
      <main className="bg-bg-mobile-crew w-full h-screen bg-no-repeat bg-cover -z-10 px-6 flex flex-col items-center md:bg-tablet-crew min-h-screen md:h-full lg:bg-desktop-crew">
        <div className="mt-[88px] mb-8 flex justify-center md:mt-[136px] md:self-start md:mb-[60px] lg:mt-[212px] lg:ml-[142.5px] lg:mb-[154px]">
          <span className="font-barlowcond font-bold tracking-[2.7px] text-[#4D5157] mr-[18px] md:text-xl md:tracking-[3.38px] md:font-bold md:mr-[19px] lg:text-[28px] lg:tracking-[4.72px]">
            02
          </span>
          <span className="font-barlowcond tracking-[2.7px] text-white md:text-xl md:tracking-[3.38px] lg:text-[28px] lg:tracking-[4.72px]">
            MEET YOUR CREW
          </span>
        </div>
        <div className="my-8 flex flex-col items-center md:hidden">
          <img src={crewInfo.image} alt={crewInfo.title}></img>
          <hr className="w-[327px] border-1 border-[#383B4B]" />
        </div>

        <div className="flex space-x-4 mb-8 md:hidden">
          <div
            onClick={() => handleCrewChange("DOUGLAS")}
            className={`${
              crew === "DOUGLAS"
                ? "bg-white w-[10px] h-[10px] rounded-full"
                : "bg-[#383B4B] w-[10px] h-[10px] rounded-full"
            } cursor-pointer`}
          ></div>
          <div
            onClick={() => handleCrewChange("MARK")}
            className={`${
              crew === "MARK"
                ? "bg-white w-[10px] h-[10px] rounded-full"
                : "bg-[#383B4B] w-[10px] h-[10px] rounded-full"
            } cursor-pointer`}
          ></div>
          <div
            onClick={() => handleCrewChange("VICTOR")}
            className={`${
              crew === "VICTOR"
                ? "bg-white w-[10px] h-[10px] rounded-full"
                : "bg-[#383B4B] w-[10px] h-[10px] rounded-full"
            } cursor-pointer`}
          ></div>
          <div
            onClick={() => handleCrewChange("ANSARI")}
            className={`${
              crew === "ANSARI"
                ? "bg-white w-[10px] h-[10px] rounded-full"
                : "bg-[#383B4B] w-[10px] h-[10px] rounded-full"
            } cursor-pointer`}
          ></div>
        </div>
        <div className="flex flex-col items-center lg:self-start lg:flex-row">
          <div>
            <div className="flex flex-col items-center lg:items-start lg:self-start lg:ml-[142.5px]">
              <span className="font-bellefair text-[#919397] md:text-2xl lg:text-[32px]">
                {crewInfo.position}
              </span>
              <h1 className="font-bellefair text-2xl text-white text-center mt-2 mb-4 md:text-[40px] md:mt-[22px] md:mb-7 lg:text-[56px] lg:mb-[42px] lg:mt-[40px]">
                {crewInfo.title}
              </h1>
              <p className="font-barlow text-[15px] text-[#D0D6F9] text-center leading-[25px] md:text-base md:leading-7 md:w-[592px] lg:text-[18px] lg:leading-[32px] lg:text-left lg:w-[444px]">
                {crewInfo.description}
              </p>
            </div>

            <div className="hidden md:flex md:space-x-4 md:my-[40px] lg:self-start lg:ml-[142.5px] lg:my-0 lg:mt-[120px]">
              <div
                onClick={() => handleCrewChange("DOUGLAS")}
                className={`${
                  crew === "DOUGLAS"
                    ? "bg-white w-[10px] h-[10px] rounded-full"
                    : "bg-[#383B4B] w-[10px] h-[10px] rounded-full"
                } cursor-pointer`}
              ></div>
              <div
                onClick={() => handleCrewChange("MARK")}
                className={`${
                  crew === "MARK"
                    ? "bg-white w-[10px] h-[10px] rounded-full"
                    : "bg-[#383B4B] w-[10px] h-[10px] rounded-full"
                } cursor-pointer`}
              ></div>
              <div
                onClick={() => handleCrewChange("VICTOR")}
                className={`${
                  crew === "VICTOR"
                    ? "bg-white w-[10px] h-[10px] rounded-full"
                    : "bg-[#383B4B] w-[10px] h-[10px] rounded-full"
                } cursor-pointer`}
              ></div>
              <div
                onClick={() => handleCrewChange("ANSARI")}
                className={`${
                  crew === "ANSARI"
                    ? "bg-white w-[10px] h-[10px] rounded-full"
                    : "bg-[#383B4B] w-[10px] h-[10px] rounded-full"
                } cursor-pointer`}
              ></div>
            </div>
          </div>

          <img
            src={crewInfo.imageTablet}
            alt={crewInfo.title}
            className="hidden md:block lg:hidden"
          ></img>

          <img
            src={crewInfo.imageDesktop}
            alt={crewInfo.title}
            className="hidden lg:block lg:absolute lg:bottom-0 lg:right-[137px]"
          ></img>
        </div>
      </main>
    </>
  );
}
