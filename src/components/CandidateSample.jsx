import React from "react";
import Student from "./Candidate/Student";
import Information from "./Candidate/Information";
import Accounting from "./Candidate/Accounting";
import OnBoard from "./Candidate/OnBoard";

const CandidateInfo = () => {
  return (
    <div className="bg-white rounded-2xl  border-gray-200  shadow p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-800">
          Candidate <span className="text-blue-600">Sample Singh</span>
        </h2>
        <span className="bg-green-700 text-white text-sm font-medium px-4 py-1 rounded-xl">
          Active
        </span>
      </div>
      {/* STUDENT Entity */}
      <div className="grid grid-cols-1 md:grid-cols-4 border border-gray-200 rounded-2xl overflow-hidden">
        <Student />

        {/* Information */}
            <Information />

        {/* Accounting */}
            <Accounting />

        {/* On Board */}
       <OnBoard />  
      </div>
    </div>
  );
};

export default CandidateInfo;
