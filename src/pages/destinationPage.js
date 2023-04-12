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
      <main className="bg-bg-mobile-destination w-full bg-no-repeat bg-cover -z-10 px-6 flex flex-col items-center">
        <div className="w-[221px] h-[19px] mt-[88px] mb-8">
          <span className="font-barlowcond font-bold tracking-[2.7px] text-[#4D5157] mr-[18px]">
            01
          </span>
          <span className="font-barlowcond tracking-[2.7px] text-white">
            PICK YOUR DESTINATION
          </span>
        </div>
        <img
          src={destinationInfo.image}
          alt={destinationInfo.title}
          className="w-[170px] h-[170px] mb-[26px]"
        ></img>
        <ul className="font-barlowcond text-[#D0D6F9] text-[14px] tracking-[2.36px] flex space-x-7 w-[237.5px] h-[28px] mb-5">
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
          <h1 className="font-bellefair text-white text-[56px] mb-[1px] w-[187px] h-[64px]">
            {destinationInfo.title}
          </h1>
          <p className="font-barlow text-[#D0D6F9] text-[15px] text-center leading-[25px] w-[327px] h-[125px]">
            {destinationInfo.description}
          </p>
        </div>
        <hr className="w-[327px] border-1 border-[#979797] my-8" />
        <div className="flex flex-col h-[61px] justify-between mb-8">
          <span className="font-barlowcond text-[#D0D6F9] tracking-[2.36px] text-[14px] text-center">
            AVG. DISTANCE
          </span>
          <span className="font-bellefair text-white text-[28px] text-center">
            {destinationInfo.distance}
          </span>
        </div>
        <div className="flex flex-col h-[61px] justify-between mb-[58px]">
          <span className="font-barlowcond text-[#D0D6F9] tracking-[2.36px] text-[14px] text-center">
            EST. TRAVEL TIME
          </span>
          <span className="font-bellefair text-white text-[28px] text-center">
            {destinationInfo.travelTime}
          </span>
        </div>
      </main>
    </>
  );
}
