import React from 'react';

const OfficeAndGeneralInfo = () => {
  return (
    <div className="flex flex-col h-full border-r border-gray-200">
      <div className="bg-teal-800 text-white text-sm font-medium px-3 py-2 flex items-center h-10">
        Office
      </div>
      <div>
        <div className="p-3 text-sm space-y-3 bg-gray-200 mx-3 mt-6 rounded-2xl">
          <div className="gap-29">
            <p className="font-semibold border rounded-br-lg pl-3 mb-1 text-white w-1/4 bg-blue-600">
              Auto
            </p>
            <p className="font-semibold pb-2">
              963541587 <br />
              Malwa Insurance <br />
              Nankiana Road , Sangrur 148001 <br />
              steve smith
            </p>
          </div>
          <p className="flex gap-8">
            <p className="text-blue-600 font-medium underline flex">
              908089090
            </p>
            <p className="text-blue-600 underline font-bold">
              admin@outlook.com
            </p>
          </p>
          <div className="flex gap-2">
            <p className="font-thin text-xs">
              DATE ISSUED <span className="font-medium text-xs"> 3/12/2014</span>
            </p>
            <p className="font-thin text-xs">
              DATE EXP. <span className="font-medium text-xs"> 3/12/2014</span>
            </p>
          </div>
        </div>
        <div className="p-3 text-sm space-y-3 mt-5 mx-3 bg-yellow-100 rounded-2xl border-t border-slate-200">
          <div className="gap-29">
            <p className="font-semibold border rounded-br-lg pl-2 text-white w-1/3 bg-yellow-500">
              General
            </p>
            <p className="font-semibold pt-2">
              963541587 <br />
              Malwa Insurance <br />
              Nankiana Road , Sangrur 148001 <br />
              steve smith
            </p>
          </div>
          <p className="gap-8 flex pt-4">
            <p className="text-blue-600 font-medium underline">98098899</p>
            <p className="text-blue-600 underline font-bold">
              admin@outlook.com
            </p>
          </p>
          <div className="flex gap-2 pt-3">
            <p className="font-thin text-xs">
              DATE ISSUED <span className="font-medium text-xs"> 3/12/2014</span>
            </p>
            <p className="font-thin text-xs">
              DATE EXP. <span className="font-medium text-xs"> 3/12/2014</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeAndGeneralInfo;