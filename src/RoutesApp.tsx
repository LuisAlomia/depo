import { Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import ArraysPage from "./page/arraysPage/ArraysPage";
import StringPage from "./page/stringsPage/StringPage";
import CommandsPage from "./page/commandPage/CommandsPage";

const RoutesApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arrays/:languageId" element={<ArraysPage />} />
        <Route path="/strings/:languageId" element={<StringPage />} />
        <Route path="/commands/:languageId" element={<CommandsPage />} />
      </Routes>
    </div>
  );
};

export default RoutesApp;
