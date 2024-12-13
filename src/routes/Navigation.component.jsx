import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { selectIsCartOpen } from "../store/cart/cartSelector";
import { selectCurrentUser } from "../store/user/userSelector";
import { signOutUser } from "../utils/firebase/Firebase.utils";

import CartDropdown from "../components/cart-dropdown/CartDropdown.component";
import CartIcon from "../components/cart-icon/CartIcon.component";

import logo from "../assets/logo.png";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "categories", to: "/" },
    { id: 2, text: "Shop", to: "shop" },
    currentUser
      ? { id: 3, text: "Sign Out", to: "auth", action: signOutUser }
      : { id: 3, text: "Sign In", to: "auth" },
  ];

  return (
    <>
      <div className="fixed w-full top-0 left-0 z-20 bg-zinc-50 shadow-lg">
        <div className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 text-black">
          {/* Logo */}
          <Link to="/" className="w-8">
            <img src={logo} alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center">
            {navItems.map((item) => (
              <Link
                to={item.to}
                key={item.id}
                onClick={item.action || null}
                className="p-4 hover:bg-slate-200 rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
              >
                <p>{item.text.toUpperCase()}</p>
              </Link>
            ))}

            {/* Cart Icon */}
            <CartIcon />
          </ul>
          {isCartOpen && <CartDropdown />}

          {/* Mobile Navigation Icon */}
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          {/* Mobile Navigation Menu */}
          <ul
            className={
              nav
                ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]/70 backdrop-blur-sm ease-in-out duration-500 z-10"
                : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-10"
            }
          >
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  handleNav();
                  if (item.action) item.action();
                }}
                className="p-4 border-b rounded-xl text-white hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-400 duration-300 hover:text-black focus:text-black active:text-black cursor-pointer border-gray-600"
              >
                <Link to={item.to}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* For this outlet the navbar will show in every page */}
      <Outlet />
    </>
  );
};

export default Navigation;
