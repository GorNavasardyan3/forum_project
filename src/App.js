import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Aside from "./components/Aside";

function App() {
  return (
    <>
      <Navbar/>
      <div className=" flex">
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home/>} className="w-full h-full"/>
        </Routes>
        <Aside/>
      </div>
    </>
  );
}

export default App;
