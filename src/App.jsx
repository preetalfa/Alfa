import React from "react";
import Sidebar from "./components/Sidebar";
import CandidateSample from "./components/CandidateSample";
import OfficeInfo from "./components/Officeinfo";
import Information from "./components/Information";
import FleetTable from "./components/FleetTable";
import CarrierHistory from "./components/CarrierHistory";
import Last from "./components/Last";

import { Logs } from "lucide-react";
import Nav from "./components/Nav";

function App() {
  return (
    
     <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-6 space-y-6">
        <Nav />
        <CandidateSample />
        <OfficeInfo />
        <Information />
        <FleetTable />
        <CarrierHistory />
        <Last/>
      </main>

    </div>
    
    
  );
}

export default App;
