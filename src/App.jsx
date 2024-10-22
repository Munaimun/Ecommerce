import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./routes/Home.component";

import "./App.css";
import Navigation from "./routes/Navigation.component";
import Authentication from "./routes/Authentication";
import Shop from "./routes/shop/Shop.component";
import CheckOut from "./routes/chekout/CheckOut.component";

function App() {
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
