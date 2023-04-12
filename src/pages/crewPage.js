import Navbar from "../components/navbar";

import douglas from "../assets/crew/image-douglas-hurley.png";
// import mark from "../assets/crew/image-mark-shuttleworth.png";
// import victor from "../assets/crew/image-victor-glover.png";
// import ansari from "../assets/crew/image-anousheh-ansari.png";

export default function CrewPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg-mobile-crew w-full h-screen bg-no-repeat bg-cover -z-10 px-6 flex flex-col items-center">
        <div className="w-[221px] h-[19px] mt-[88px] flex justify-center">
          <span className="font-barlowcond font-bold tracking-[2.7px] text-[#4D5157] mr-[18px]">
            02
          </span>
          <span className="font-barlowcond tracking-[2.7px] text-white">
            MEET YOUR CREW
          </span>
        </div>
        <div className="my-8 flex flex-col items-center">
          <img src={douglas} alt="Douglas Hurley"></img>
          <hr className="w-[327px] border-1 border-[#383B4B]" />
        </div>

        <div className="flex space-x-4 mb-8">
          <div className="bg-white w-[10px] h-[10px] rounded-full"></div>
          <div className="bg-[#383B4B] w-[10px] h-[10px] rounded-full"></div>
          <div className="bg-[#383B4B] w-[10px] h-[10px] rounded-full"></div>
          <div className="bg-[#383B4B] w-[10px] h-[10px] rounded-full"></div>
        </div>

        <div className="flex flex-col items-center mb-[104px]">
          <span className="font-bellefair text-[#919397]">COMMANDER</span>
          <h1 className="font-bellefair text-2xl text-white text-center mt-2 mb-4">
            DOUGLAS HURLEY
          </h1>
          <p className="font-barlow text-[15px] text-[#D0D6F9] text-center leading-[25px]">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
      </main>
    </>
  );
}
