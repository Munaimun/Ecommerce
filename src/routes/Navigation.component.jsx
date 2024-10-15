import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

const Navigation = () => {
  return (
    <>
      <div className="text-center justify-center">
        <div className="bg-sky-900">
          <div className="max-w-screen-xl m-auto flex justify-between items-center h-14 text-slate-200">
            {/* the logo */}
            <div>
              <Link to="/">
                <img src={logo} alt="" className="w-9" />
              </Link>
            </div>

            {/* nav links */}
            <div className="flex w-3/5 justify-between">
              <Link to="shop">Shop</Link>

              <Link className="focus:font-semibold focus:text-white" to="auth">
                Sign In
              </Link>
            </div>
          </div>
        </div>

        {/* This outlet will keep the navbar in every page */}
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
