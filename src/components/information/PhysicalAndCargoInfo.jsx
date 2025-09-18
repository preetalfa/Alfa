import React from 'react';

const PhysicalAndCargoInfo = () => {
  return (
    <div className="border-r border-gray-200">
      <div className="bg-teal-800 text-white text-sm font-medium px-3 py-2 h-10"></div>
      <div className="p-0 text-sm mx-3 mt-6 rounded-2xl space-y-3">
        <div className="text-sm space-y-3 rounded-2xl bg-sky-200">
          <div className="pt-3 pl-2 gap-29">
            <p className="font-semibold border rounded-br-lg pl-2 text-white w-1/4 bg-sky-800">
              Physical
            </p>
            <p className="font-semibold pt-1">
              963541587 <br />
              Malwa Insurance <br />
              Nankiana Road , Sangrur 148001 <br />
              steve smith
            </p>
          </div>
          <p className="flex gap-8 ml-2">
            <p className="text-blue-600 font-medium underline pt-2 flex">
              908089090
            </p>
            <p className="text-blue-600 underline font-bold">
              admin@outlook.com
            </p>
          </p>
          <div className="flex gap-5 py-1 pl-2">
            <p className="font-thin text-xs">
              DATE ISSUED <span className="font-medium text-xs"> 3/12/2014</span>
            </p>
            <p className="font-thin text-xs">
              DATE EXP. <span className="font-medium text-xs"> 3/12/2014</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="p-3 text-sm space-y-3c bg-green-200 border-t border-slate-200 mt-5 mb-3 mx-2 rounded-2xl">
          <div className="gap-29">
            <p className="font-semibold border rounded-br-lg pl-3 text-white w-1/4 bg-blue-600">
              Cargo
            </p>
            <p className="font-semibold pt-2">
              963541587 <br />
              <p> Malwa Insurance <br /></p>
              Nankiana Road , Sangrur 148001 <br />
              steve smith
            </p>
          </div>
          <p className="gap-8 flex pt-7">
            <p className="text-blue-600 font-medium underline">98098899</p>
            <p className="text-blue-600 underline font-bold">
              admin@outlook.com
            </p>
          </p>
          <div className="flex gap-2 pt-6">
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

export default PhysicalAndCargoInfo;