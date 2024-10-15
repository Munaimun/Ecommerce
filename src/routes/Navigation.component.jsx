import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import { useContext } from "react";

import { UserContexts } from "../contexts/user.contexts";
import { signOutUser } from "../utils/firebase/Firebase.utils";

import logo from "../assets/logo.svg";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContexts);

  //SignOut User
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <>
      <div className="text-center justify-center">
        <div className="bg-sky-900">
          <div className="max-w-screen-xl m-auto flex justify-between items-center h-14 text-slate-200">
            {/* the logo */}
            <div>
              <Link to="/">
                <img src={logo} alt="" className="w-9 sm:ml-0 ml-3" />
              </Link>
            </div>

            {/* nav links */}
            <div className="flex sm:w-3/5 w-2/4 justify-between sm:mr-0 mr-4">
              <Link to="shop">Shop</Link>

              {currentUser ? (
                <Link
                  className="focus:font-semibold focus:text-white"
                  onClick={signOutHandler}
                >
                  Sign Out
                </Link>
              ) : (
                <Link
                  className="focus:font-semibold focus:text-white"
                  to="auth"
                >
                  Sign In
                </Link>
              )}
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
