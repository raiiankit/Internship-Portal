import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import Deletebyid from "./pages/Deletebyid";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addemployee" element={<CreateEmployeePage />} />
        <Route path="/delete" element={<Deletebyid/>} />
      </Routes>
    </div>
  );
}

export default App;
