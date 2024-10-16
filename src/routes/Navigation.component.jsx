import { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom"; // Combine imports from react-router-dom

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { UserContexts } from "../contexts/user.contexts";
import { signOutUser } from "../utils/firebase/Firebase.utils";

import logo from "../assets/logo.svg";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContexts);
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  //SignOut User
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items for both desktop and mobile
  const navItems = [
    { id: 1, text: "Shop", to: "/" },
    { id: 2, text: "Contact", to: "/contact" },
    currentUser
      ? { id: 3, text: "Sign Out", to: "auth", action: signOutHandler }
      : { id: 3, text: "Sign In", to: "auth" },
  ];

  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
        {/* Logo */}
        <Link to="/" className="w-8">
          <img src={logo} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={item.action || null}
              className="p-4 hover:bg-sky-300 rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              <Link to={item.to}>{item.text}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-10"
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            REACT.
          </h1>

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                handleNav();
                if (item.action) item.action(); // Execute signOutHandler on mobile if necessary
              }}
              className="p-4 border-b rounded-xl text-white hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
            >
              <Link to={item.to}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* For this outlet the navbar will show in every page */}
      <Outlet />
    </>
  );
};

export default Navigation;
