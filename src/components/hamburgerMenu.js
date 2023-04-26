import close from "../assets/shared/icon-close.svg";
import { useNavigate } from "react-router-dom";

export default function Menu({ isContentActive, toggleContent }) {
  const navigate = useNavigate();
  const appContentClass = isContentActive
    ? "fixed w-[254px] h-screen bg-white bg-opacity-5 backdrop-blur-2xl -right-[254px] transition-all ease duration-[0.5s] -translate-x-[254px]"
    : "fixed w-[254px] h-screen bg-white bg-opacity-5 backdrop-blur-2xl -right-[254px] transition-all ease duration-[0.5s]";

  return (
    <div className={appContentClass}>
      <button
        className="absolute right-[26.45px] top-[33.95px]"
        onClick={() => toggleContent()}
      >
        <img src={close} alt="Icon Close"></img>
      </button>
      <div className="space-y-8 ml-4 mt-[118px]">
        <div className="flex cursor-pointer" onClick={() => navigate("/")}>
          <span className="font-barlowcond font-bold tracking-[2.7px] text-white mr-[11px]">
            00
          </span>
          <span className="font-barlowcond tracking-[2.7px] text-white">
            HOME
          </span>
        </div>
        <div
          className="flex cursor-pointer"
          onClick={() => navigate("/destination")}
        >
          <span className="font-barlowcond font-bold tracking-[2.7px] text-white mr-[11px]">
            01
          </span>
          <span className="font-barlowcond tracking-[2.7px] text-white">
            DESTINATION
          </span>
        </div>
        <div className="flex cursor-pointer" onClick={() => navigate("/crew")}>
          <span className="font-barlowcond font-bold tracking-[2.7px] text-white mr-[11px]">
            02
          </span>
          <span className="font-barlowcond tracking-[2.7px] text-white">
            CREW
          </span>
        </div>
        <div
          className="flex cursor-pointer"
          onClick={() => navigate("/technology")}
        >
          <span className="font-barlowcond font-bold tracking-[2.7px] text-white mr-[11px]">
            03
          </span>
          <span className="font-barlowcond tracking-[2.7px] text-white">
            TECHNOLOGY
          </span>
        </div>
      </div>
    </div>
  );
}
