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
      <nav className="fixed w-screen max-w-3xl flex items-center justify-between my-6 px-6 md:px-0 md:pl-[39px] md:my-0 md:mb-6 md:max-w-5xl">
        <button onClick={() => navigate("/")}>
          <img src={logo} alt="Logo"></img>
        </button>

        <div className="hidden w-[450px] h-[96px] bg-white bg-opacity-5 md:flex md:items-center md:justify-center">
          <ul className="w-fit font-barlowcond text-[14px] text-white flex">
            <li onClick={() => navigate("/")} className="cursor-pointer">
              HOME
            </li>
            <li
              onClick={() => navigate("/destination")}
              className="ml-[37px] mr-[42px] cursor-pointer"
            >
              DESTINATION
            </li>
            <li
              onClick={() => navigate("/crew")}
              className="mr-[37px] cursor-pointer"
            >
              CREW
            </li>
            <li
              onClick={() => navigate("/technology")}
              className="cursor-pointer"
            >
              TECHNOLOGY
            </li>
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
