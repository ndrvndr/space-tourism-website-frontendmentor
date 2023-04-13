import * as React from "react";
import Navbar from "../components/navbar";

import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

export default function DestinationPage() {
  const [destination, setDestination] = React.useState("MOON");

  const handleDestinationChange = (newDestination) => {
    setDestination(newDestination);
  };

  let destinationInfo;
  switch (destination) {
    case "MOON":
      destinationInfo = {
        image: moon,
        title: "MOON",
        distance: "384,400 KM",
        travelTime: "3 DAYS",
        description:
          "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      };
      break;
    case "MARS":
      destinationInfo = {
        image: mars,
        title: "MARS",
        distance: "225 MIL. KM",
        travelTime: "9 MONTHS",
        description:
          "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      };
      break;
    case "EUROPA":
      destinationInfo = {
        image: europa,
        title: "EUROPA",
        distance: "628 MIL. KM",
        travelTime: "3 YEARS",
        description:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      };
      break;
    case "TITAN":
      destinationInfo = {
        image: titan,
        title: "TITAN",
        distance: "1.6 BIL. KM",
        travelTime: "7 YEARS",
        description:
          "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      };
      break;
    default:
      destinationInfo = {
        image: moon,
        title: "MOON",
        distance: "384,400 KM",
        travelTime: "3 DAYS",
        description:
          "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      };
  }
  return (
    <>
      <Navbar />
      <main className="bg-bg-mobile-destination h-full bg-cover -z-10 px-6 md:bg-tablet-destination md:px-[39px] min-h-screen md:h-full">
        <div className="flex flex-col items-center">
          <div className="h-[19px] mt-[88px] mb-8 flex justify-center md:mt-[136px] md:self-start md:mb-[60px]">
            <span className="font-barlowcond font-bold tracking-[2.7px] text-[#4D5157] mr-[18px] md:text-xl md:tracking-[3.38px] md:font-bold md:mr-[19px]">
              01
            </span>
            <span className="font-barlowcond tracking-[2.7px] text-white md:text-xl md:tracking-[3.38px]">
              PICK YOUR DESTINATION
            </span>
          </div>
          <img
            src={destinationInfo.image}
            alt={destinationInfo.title}
            className="w-[170px] h-[170px] mb-[26px] md:w-[300px] md:h-[300px] md:mb-[53px]"
          ></img>
          <ul className="font-barlowcond text-[#D0D6F9] text-[14px] tracking-[2.36px] flex space-x-7 h-[28px] mb-5 md:text-base md-tracking-[2.7px] md:mb-8">
            <li
              onClick={() => handleDestinationChange("MOON")}
              className={`${
                destination === "MOON"
                  ? "underline underline-offset-8 decoration-4 decoration-white text-white"
                  : ""
              } cursor-pointer`}
            >
              MOON
            </li>
            <li
              onClick={() => handleDestinationChange("MARS")}
              className={`${
                destination === "MARS"
                  ? "underline underline-offset-8 decoration-4 decoration-white text-white"
                  : ""
              } cursor-pointer`}
            >
              MARS
            </li>
            <li
              onClick={() => handleDestinationChange("EUROPA")}
              className={`${
                destination === "EUROPA"
                  ? "underline underline-offset-8 decoration-4 decoration-white text-white"
                  : ""
              } cursor-pointer`}
            >
              EUROPA
            </li>
            <li
              onClick={() => handleDestinationChange("TITAN")}
              className={`${
                destination === "TITAN"
                  ? "underline underline-offset-8 decoration-4 decoration-white text-white"
                  : ""
              } cursor-pointer`}
            >
              TITAN
            </li>
          </ul>
          <div className="flex flex-col items-center">
            <h1 className="font-bellefair text-white text-[56px] mb-[1px] h-[64px] text-center md:text-[80px] md:mb-[30px]">
              {destinationInfo.title}
            </h1>
            <p className="font-barlow text-[#D0D6F9] text-[15px] text-center leading-[25px] h-[125px] md:text-base md:leading-7 md:w-[573px]">
              {destinationInfo.description}
            </p>
          </div>
          <hr className="w-[327px] border-1 border-[#383B4B] my-8 md:w-[573px]" />
          <div className="md:flex">
            <div className="flex flex-col h-[61px] justify-between mb-8 md:w-[216px] md:mr-[11px]">
              <span className="font-barlowcond text-[#D0D6F9] tracking-[2.36px] text-[14px] text-center">
                AVG. DISTANCE
              </span>
              <span className="font-bellefair text-white text-[28px] text-center">
                {destinationInfo.distance}
              </span>
            </div>
            <div className="flex flex-col h-[61px] justify-between mb-[58px] md:w-[223px]">
              <span className="font-barlowcond text-[#D0D6F9] tracking-[2.36px] text-[14px] text-center">
                EST. TRAVEL TIME
              </span>
              <span className="font-bellefair text-white text-[28px] text-center">
                {destinationInfo.travelTime}
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
