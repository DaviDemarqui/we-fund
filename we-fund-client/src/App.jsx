import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

{/* PAGES */}
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CreateCampaign from "./pages/CreateCampaign";
import CampaignDetails from "./pages/CampaignDetails";

export default function App() {
  return (
    <>
      <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
        
          <div className="sm:flex hidden mr-10 relative">
            <Routes>
              <Route path="*" element={<Sidebar />} />
            </Routes>
          </div>

          <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
            <Routes>
              <Route path="*" element={<Navbar />} />
            </Routes>

            {/* PAGES */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/create-campaign" element={<CreateCampaign />} />
              <Route path="/create-details" element={<CampaignDetails />} />
            </Routes>
          </div>

          
        
      </div>
    </>
  );
}
