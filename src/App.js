import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Aside from "./components/Aside";
import SidebarAsideMobile from "./components/SidebarAsideMobile";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import AddResponse from "./components/AddResponse";
import Conversations from "./pages/Conversations";
import User from "./pages/User";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Registration";

function App() {
  const [mobileSidebarAside,setMobileSidebarAside] = useState(false)
  const [loginPage,setLoginPage] = useState(true);
  useEffect(() => {
    const currentPage = window.location.pathname
    if(currentPage == '/login' || currentPage == '/registration') {
      setLoginPage(true);
    } else {
      setLoginPage(false)
    }
  },[loginPage]);
  return (
    <>
      {!loginPage && <><Navbar/>
      <div className=" flex 2xl:container 2xl:mx-auto">
        <Sidebar />
        <div className="md:hidden h-[50px] light-first-bg-color flex items-center rounded-r-md p-[1px]">
          <button onClick={() => setMobileSidebarAside(true)}>
            <FontAwesomeIcon icon={faChevronRight}/>
          </button>
        </div>
        <SidebarAsideMobile mobileSidebarAside={mobileSidebarAside} setMobileSidebarAside={setMobileSidebarAside}/>
        <Routes>
          <Route path="/" element={<Home/>} className="w-full h-full"/>
          <Route path="/addresponse" element={<AddResponse/>} className="w-full h-full"/>
          <Route path="/user" element={<User/>} className="w-full h-full"/>
          <Route path="/conversations" element={<Conversations/>} className="w-full h-full"/>
        </Routes>
        <Aside/>
      </div></>}
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
      </Routes>
    </>
  );
}

export default App;
