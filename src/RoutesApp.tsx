import { Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";

const RoutesApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arrays" element={"Arrays"} />
        <Route path="/strings" element={"Strings"} />
        <Route path="/comandos" element={"Comandos"} />
      </Routes>
    </div>
  );
};

export default RoutesApp;
