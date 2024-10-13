import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home.component";

import "./App.css";
import Navigation from "./routes/Navigation.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
