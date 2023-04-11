import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="bg-bg-mobile-home w-full h-screen bg-no-repeat bg-cover -z-10 px-6 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center w-full">
          <span className="font-barlowcond text-[#D0D6F9] tracking-[2.7px] w-full h-[19px] text-center mt-[112px]">
            SO, YOU WANT TO TRAVEL TO
          </span>
          <h1 className="font-bellefair text-white text-[80px] w-[327px] h-[100px] mt-4 mb-4 text-center leading-[100px]">
            SPACE
          </h1>
          <p className="font-barlow text-[#D0D6F9] text-center text-[15px] leading-[25px] w-[327px] h-[125px]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button
          onClick={() => navigate("/destination")}
          className="font-bellefair text-xl text-[#0B0D17] w-[150px] h-[150px] bg-white rounded-full border-none mt-[81px] mb-12"
        >
          EXPLORE
        </button>
      </main>
    </>
  );
}
