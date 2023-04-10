import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";

export default function Navbar() {
  return (
    <nav className="fixed w-screen max-w-3xl flex items-center justify-between my-6 px-6">
      <img src={logo} alt="Logo"></img>
      <img src={menu} alt="Icon Hamburger Menu"></img>
    </nav>
  );
}
