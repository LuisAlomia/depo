import { Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import ArraysPage from "./page/arraysPage/ArraysPage";

const RoutesApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arrays/:languageId" element={<ArraysPage />} />
        <Route path="/strings" element={"Strings"} />
        <Route path="/comandos" element={"Comandos"} />
      </Routes>
    </div>
  );
};

export default RoutesApp;
