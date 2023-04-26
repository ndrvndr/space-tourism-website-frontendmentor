import * as React from "react";

import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";

import { useNavigate } from "react-router-dom";
import Menu from "./hamburgerMenu";

export default function Navbar() {
  const path = window.location.pathname;
  const navigate = useNavigate();

  const [isContentActive, setIsContentActive] = React.useState(false);

  const toggleContent = () => {
    setIsContentActive(!isContentActive);
  };
  return (
    <>
      <nav className="fixed w-screen flex items-center justify-between my-6 px-6 md:px-0 md:pl-[39px] md:my-0 md:mb-6 lg:pl-[55px] lg:mt-10">
        <button onClick={() => navigate("/")}>
          <img src={logo} alt="Logo"></img>
        </button>

        <div className="hidden w-[450px] h-[96px] bg-white bg-opacity-5 md:flex md:items-center md:justify-center lg:w-[830px] lg:backdrop-blur-2xl">
          <hr className="hidden lg:block w-[473px] border-1 border-[#383B4B] absolute -left-[443px]" />
          <div className="w-fit font-barlowcond text-[14px] text-white flex h-full items-center">
            <div
              className="flex flex-col cursor-pointer h-full justify-center relative"
              onClick={() => navigate("/")}
            >
              <div className="flex">
                <span className="hidden lg:block font-barlowcond font-bold tracking-[2.7px] text-white mr-[11px] text-base">
                  00
                </span>
                <span className="md:tracking-[2.36px] lg:text-base lg:tracking-[2.7px]">
                  HOME
                </span>
              </div>
              <hr
                className={`${
                  path === "/"
                    ? "border-white border-[3px] absolute bottom-0 w-full"
                    : "hidden"
                } cursor-pointer`}
              />
            </div>

            <div
              className="flex flex-col ml-[37px] mr-[42px] lg:ml-12 lg:mr-12 cursor-pointer h-full justify-center relative"
              onClick={() => navigate("/destination")}
            >
              <div className="flex">
                <span className="hidden lg:block font-barlowcond font-bold tracking-[2.7px] text-white mr-[11px] text-base">
                  01
                </span>
                <span className="md:tracking-[2.36px] lg:text-base lg:tracking-[2.7px]">
                  DESTINATION
                </span>
              </div>
              <hr
                className={`${
                  path === "/destination"
                    ? "border-white border-[3px] absolute bottom-0 w-full"
                    : "hidden"
                } cursor-pointer`}
              />
            </div>

            <div
              className="flex flex-col cursor-pointer h-full justify-center mr-[37px] relative lg:mr-12"
              onClick={() => navigate("/crew")}
            >
              <div className="flex">
                <span className="hidden lg:block font-barlowcond font-bold tracking-[2.7px] text-white mr-[11px] text-base">
                  02
                </span>
                <span className="md:tracking-[2.36px] lg:text-base lg:tracking-[2.7px]">
                  CREW
                </span>
              </div>
              <hr
                className={`${
                  path === "/crew"
                    ? "border-white border-[3px] absolute bottom-0 w-full"
                    : "hidden"
                } cursor-pointer`}
              />
            </div>

            <div
              className="flex flex-col cursor-pointer h-full justify-center relative"
              onClick={() => navigate("/technology")}
            >
              <div className="flex">
                <span className="hidden lg:block font-barlowcond font-bold tracking-[2.7px] text-white mr-[11px] text-base">
                  03
                </span>
                <span className="md:tracking-[2.36px] lg:text-base lg:tracking-[2.7px]">
                  TECHNOLOGY
                </span>
              </div>
              <hr
                className={`${
                  path === "/technology"
                    ? "border-white border-[3px] absolute bottom-0 w-full"
                    : "hidden"
                } cursor-pointer`}
              />
            </div>
          </div>
        </div>

        <button onClick={() => toggleContent()} className="md:hidden">
          <img src={menu} alt="Icon Hamburger Menu"></img>
        </button>
      </nav>
      <Menu isContentActive={isContentActive} toggleContent={toggleContent} />
    </>
  );
}
