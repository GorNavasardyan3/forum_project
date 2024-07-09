import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar/>
      <div className=" flex">
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
