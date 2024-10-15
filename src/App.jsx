import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./routes/Home.component";

import "./App.css";
import Navigation from "./routes/Navigation.component";
import SignIn from "./routes/SignIn.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
      {/* For showing the react toast */}
      <ToastContainer />
    </>
  );
}

export default App;
