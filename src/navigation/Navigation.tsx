import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { Navbar } from "../componets";

const Navigation = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </Router>
  );
};

export default Navigation;
