import React from 'react';
import OfficeAndGeneralInfo from './information/OfficeAndGeneralInfo';
import PhysicalAndCargoInfo from './information/PhysicalAndCargoInfo';
import AccountingAndDocument from './information/AccountingAndDocument';

const Information = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-2">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-gray-800">Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 border border-gray-200 rounded-t-lg overflow-hidden">
        <OfficeAndGeneralInfo />
        <PhysicalAndCargoInfo />
        <AccountingAndDocument />
      </div>

      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-b-lg">
        <h2 className="text-lg font-semibold"></h2>
        <button className="text-yellow-600 pr-52 font-medium hover:underline">
          + Add More
        </button>
      </div>
    </div>
  );
};

export default Information;