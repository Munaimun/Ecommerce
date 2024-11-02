import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/Firebase.utils";
import { setCurrentUser } from "./store/user/userAction";

import Navigation from "./routes/Navigation.component";
import Home from "./routes/Home.component";
import Shop from "./routes/shop/Shop.component";
import Authentication from "./routes/Authentication";
import CheckOut from "./routes/chekout/CheckOut.component";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        // If user is authenticated, create a user document in the database
        createUserDocumentFromAuth(user);
      }
      // Update the currentUser state with the authenticated user
      dispatch(setCurrentUser(user));
    });

    // Cleanup function to unsubscribe from the listener on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          {/* The * is for nested route */}
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
      {/* For showing the react toast */}
      <ToastContainer />
    </>
  );
}

export default App;
