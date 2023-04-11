import Navbar from "../components/navbar";

import moon from "../assets/destination/image-moon.png";

export default function DestinationPage() {
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
          src={moon}
          alt="Moon"
          className="w-[170px] h-[170px] mb-[26px]"
        ></img>
        <ul className="font-barlowcond text-[#D0D6F9] text-[14px] tracking-[2.36px] flex space-x-7 w-[237.5px] h-[28px] mb-5">
          <li className="underline underline-offset-8 decoration-4 decoration-white text-white">
            MOON
          </li>
          <li>MARS</li>
          <li>EUROPA</li>
          <li>TITAN</li>
        </ul>
        <div className="flex flex-col items-center">
          <h1 className="font-bellefair text-white text-[56px] mb-[1px] w-[187px] h-[64px]">
            MOON
          </h1>
          <p className="font-barlow text-[#D0D6F9] text-[15px] text-center leading-[25px] w-[327px] h-[125px]">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
        </div>
        <hr className="w-[327px] border-1 border-[#979797] my-8" />
        <div className="flex flex-col h-[61px] justify-between mb-8">
          <span className="font-barlowcond text-[#D0D6F9] tracking-[2.36px] text-[14px] text-center">
            AVG. DISTANCE
          </span>
          <span className="font-bellefair text-white text-[28px] text-center">
            384,400 KM
          </span>
        </div>
        <div className="flex flex-col h-[61px] justify-between mb-[58px]">
          <span className="font-barlowcond text-[#D0D6F9] tracking-[2.36px] text-[14px] text-center">
            EST. TRAVEL TIME
          </span>
          <span className="font-bellefair text-white text-[28px] text-center">
            3 DAYS
          </span>
        </div>
      </main>
    </>
  );
}
