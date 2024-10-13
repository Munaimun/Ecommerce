import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

const Navigation = () => {
  return (
    <>
      <div className="text-center justify-center">
        <div className="max-w-screen-xl m-auto text-center flex justify-between items-center h-14 ">
          {/* the logo */}
          <div>
            <Link>
              <img src={logo} alt="" className="w-9" />
            </Link>
          </div>

          {/* nav links */}
          <div className="flex w-3/5 justify-between">
            <Link>links</Link>
            <Link>links</Link>
            <Link>links</Link>
            <Link>links</Link>
          </div>
        </div>

        {/* This outlet will keep the navbar in every page */}
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
