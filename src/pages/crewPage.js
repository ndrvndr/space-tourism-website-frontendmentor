import * as React from "react";
import Navbar from "../components/navbar";

import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import ansari from "../assets/crew/image-anousheh-ansari.png";

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
        title: "DOUGLAS HURLEY",
        position: "COMMANDER",
        description:
          "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      };
      break;
    case "MARK":
      crewInfo = {
        image: mark,
        title: "MARK SHUTTLEWORTH",
        position: "MISSION SPECIALIST",
        description:
          "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      };
      break;
    case "VICTOR":
      crewInfo = {
        image: victor,
        title: "VICTOR GLOVER",
        position: "PILOT",
        description:
          "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      };
      break;
    case "ANSARI":
      crewInfo = {
        image: ansari,
        title: "ANOUSHEH ANSARI",
        position: "FLIGHT ENGINEER",
        description:
          "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
      };
      break;
    default:
      crewInfo = {
        image: douglas,
        title: "DOUGLAS HURLEY",
        position: "COMMANDER",
        description:
          "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      };
  }
  return (
    <>
      <Navbar />
      <main className="bg-bg-mobile-crew w-full h-screen bg-no-repeat bg-cover -z-10 px-6 flex flex-col items-center">
        <div className="h-[19px] mt-[88px] flex justify-center">
          <span className="font-barlowcond font-bold tracking-[2.7px] text-[#4D5157] mr-[18px]">
            02
          </span>
          <span className="font-barlowcond tracking-[2.7px] text-white">
            MEET YOUR CREW
          </span>
        </div>
        <div className="my-8 flex flex-col items-center">
          <img src={crewInfo.image} alt={crewInfo.title}></img>
          <hr className="w-[327px] border-1 border-[#383B4B]" />
        </div>

        <div className="flex space-x-4 mb-8">
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

        <div className="flex flex-col items-center">
          <span className="font-bellefair text-[#919397]">
            {crewInfo.position}
          </span>
          <h1 className="font-bellefair text-2xl text-white text-center mt-2 mb-4">
            {crewInfo.title}
          </h1>
          <p className="font-barlow text-[15px] text-[#D0D6F9] text-center leading-[25px]">
            {crewInfo.description}
          </p>
        </div>
      </main>
    </>
  );
}
