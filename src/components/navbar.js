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
      <nav className="fixed w-screen max-w-3xl flex items-center justify-between my-6 px-6">
        <button onClick={() => navigate("/")}>
          <img src={logo} alt="Logo"></img>
        </button>

        <button onClick={() => toggleContent()}>
          <img src={menu} alt="Icon Hamburger Menu"></img>
        </button>
      </nav>
      <Menu isContentActive={isContentActive} toggleContent={toggleContent} />
    </>
  );
}
