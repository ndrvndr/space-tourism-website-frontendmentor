import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="bg-bg-mobile-home w-full h-screen bg-no-repeat bg-cover -z-10 px-6 flex flex-col items-center justify-end">
        <div className="flex flex-col items-center justify-center w-full">
          <span className="font-barlow text-[#D0D6F9] tracking-[2.7px]">
            SO, YOU WANT TO TRAVEL TO
          </span>
          <span className="font-bellefair text-white text-[80px] my-4">
            SPACE
          </span>
          <p className="font-barlow text-[#D0D6F9] text-center text-[15px] leading-[25px] tracking-[1.456px]">
            Let’s face it; if you want to go to space, you might
            <br />
            as well genuinely go to outer space and not hover
            <br />
            kind of on the edge of it. Well sit back, and relax
            <br />
            because we’ll give you a truly out of this world
            <br />
            experience!
          </p>
        </div>
        <button
          onClick={() => navigate("/destination")}
          className="font-bellefair text-xl text-[#0B0D17] w-[150px] h-[150px] bg-white rounded-full border-none mt-20 mb-12"
        >
          EXPLORE
        </button>
      </main>
    </>
  );
}
