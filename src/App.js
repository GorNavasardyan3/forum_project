import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Aside from "./components/Aside";
import SidebarAsideMobile from "./components/SidebarAsideMobile";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [mobileSidebarAside,setMobileSidebarAside] = useState(false)


  return (
    <>
      <Navbar/>
      <div className=" flex">
        <Sidebar />
        <div className="md:hidden h-[50px] light-first-bg-color flex items-center rounded-r-md p-[1px]">
          <button onClick={() => setMobileSidebarAside(true)}>
            <FontAwesomeIcon icon={faChevronRight}/>
          </button>
        </div>
        <SidebarAsideMobile mobileSidebarAside={mobileSidebarAside} setMobileSidebarAside={setMobileSidebarAside}/>
        <Routes>
          <Route path="/" element={<Home/>} className="w-full h-full"/>
          <Route path="/home" element={<Home/>} className="w-full h-full"/>
        </Routes>
        <Aside/>
      </div>
    </>
  );
}

export default App;
