import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Home() {
  return (
    <BrowserRouter>
      <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
        <div className="sm:flex hidden mr-10 relative">
          <Routes>
            <Route path="/" element={<Sidebar />} />
            {/* Define other routes and components */}
          </Routes>
        </div>

        <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <Navbar />
          {/* Other content/components */}
        </div>
      </div>
    </BrowserRouter>
  );
}
