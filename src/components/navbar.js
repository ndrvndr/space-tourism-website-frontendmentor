import * as React from "react";

import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";

import { useNavigate } from "react-router-dom";
import Menu from "./hamburgerMenu";

export default function Navbar() {
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
          <ul className="w-fit font-barlowcond text-[14px] text-white flex">
            <div className="flex cursor-pointer" onClick={() => navigate("/")}>
              <span className="hidden lg:block font-barlowcond font-bold tracking-[2.7px] text-white mr-[11px]">
                00
              </span>
              <li className="md:tracking-[2.36px] lg:tracking-[2.7px]">HOME</li>
            </div>

            <div
              className="flex ml-[37px] mr-[42px] lg:ml-12 lg:mr-12 cursor-pointer"
              onClick={() => navigate("/destination")}
            >
              <span className="hidden lg:block  font-barlowcond font-bold tracking-[2.7px] text-white mr-[11px]">
                01
              </span>
              <li className="md:tracking-[2.36px] lg:tracking-[2.7px]">
                DESTINATION
              </li>
            </div>

            <div
              className="flex cursor-pointer lg:mr-12"
              onClick={() => navigate("/crew")}
            >
              <span className="hidden lg:block lg:cursor-pointer font-barlowcond font-bold tracking-[2.7px] text-white mr-[11px]">
                02
              </span>
              <li className="mr-[37px] md:tracking-[2.36px] lg:tracking-[2.7px] lg:mr-0">
                CREW
              </li>
            </div>

            <div
              className="flex cursor-pointer"
              onClick={() => navigate("/technology")}
            >
              <span className="hidden lg:block  font-barlowcond font-bold tracking-[2.7px] text-white mr-[11px]">
                03
              </span>
              <li className="md:tracking-[2.36px] lg:tracking-[2.7px]">
                TECHNOLOGY
              </li>
            </div>
          </ul>
        </div>

        <button onClick={() => toggleContent()} className="md:hidden">
          <img src={menu} alt="Icon Hamburger Menu"></img>
        </button>
      </nav>
      <Menu isContentActive={isContentActive} toggleContent={toggleContent} />
    </>
  );
}
