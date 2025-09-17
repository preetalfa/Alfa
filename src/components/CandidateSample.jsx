import React from "react";

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

      <div className="grid grid-cols-1 md:grid-cols-4 border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col border-gray-200 h-full border-r">
          <div className="bg-teal-800 text-white text-sm font-medium  px-3 py-2 flex items-center h-10">
            Student Entity
          </div>
          <div className="p-3 text-sm space-y-3  ">
            <div className="flex gap-29">
              <p>
                <span className="text-gray-500">
                  S. No:
                  <br />
                </span>{" "}
                123454
              </p>
              <p className="text-gray-500">
                Admission:
                <br />
                <span className=" font-black"> 342343</span>
              </p>
            </div>
            <p>
              <span className=" flex text-gray-500">Admission Date:</span>{" "}
              3/12/2022
            </p>
            <p className="font-bold  border-t pt-2 border-slate-300">
              Alfa Dispatch
            </p>
            <span className="bg-black text-white text-sm px-3 py-1   rounded-xl">
              DBA: Stark
            </span>

            <p className="text-gray-600  pt-2 font-medium text-xs">
              Nankiana Road, Sangrur 148001
            </p>
            <p>
              <span className="font-semibold flex">Contact:</span>{" "}
              <a
                href="#"
                className="text-blue-600 font-bold  underline flex "
              >
                +91 (203) 432 5975
              </a>
              <a href="#" className="text-blue-600 font-bold underline ">
                +91 (203) 432 5975
              </a>
            </p>
            <p className="text-blue-600 underlin font-bold">
              admin@outlook.com
            </p>
            <p className="text-orange-500 cursor-pointer">+ Add More</p>
          </div>
        </div>

        {/* Information */}
        <div className="border-r border-gray-200">
          <div className="bg-teal-800  text-white text-sm font-medium px-3 py-2 h-10">
            Information
          </div>
          <div className="p-3 text-sm space-y-3">
            <div>
              <p className="">Manager Name</p>
              <p className="font-semibold text-gray-600 pt-3">Harry Singh</p>
              <p className="text-blue-600 font-bold underline">+91 (446) 235 6484</p>
              <p className="text-blue-600 underline font-bold pt-6">admin@outlook.com</p>
            </div>
            <div>
              <p className="">Dispatcher</p>
              <p className="font-semibold pt-2">
                Harry –{" "}
                <span className="text-blue-600 font-bold underline">
                  +91 (535) 647 2159
                </span>
              </p>
              <p className="text-orange-500 cursor-pointer pt-2">+ Add More</p>
            </div>
            <div>
              <p className="font-semibold text-gray-600 pt-9">Office Compliance Required</p>
              <div className="flex items-center gap-4 mt-1">
                <label className="flex items-center gap-1 border   border-gray-300 px-3 rounded-md">
                  <input type="radio" name="compliance" defaultChecked /> Yes
                </label>
                <label className="flex items-center border   border-gray-300 px-5 rounded-md gap-1">
                  <input type="radio" name="compliance" /> No
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Accounting */}
        <div className="border-r border-gray-200">
          <div className="bg-teal-800  text-white text-sm font-medium px-3 py-2 h-10">
            Accounting
          </div>
          <div className="p-3 text-sm space-y-3">
            <div>
              <p className=" mb-1">Payment Method</p>
              <div className="flex gap-17">
                <label className="felx-6 items-center border   border-gray-300 px-3 rounded-md  font-semibold">
                  <input type="radio" name="payment" defaultChecked /> Factoring
                </label>
                <label className="flex items-center border border-gray-300 rounded-md px-3 gap-2 font-semibold ">
                  <input type="radio" name="payment" /> Direct
                </label>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-1 pt-9">Bank Name</p>
              <select className="w-full border rounded px-2 py-1 text-sm">
                <option>Select</option>
              </select>
            </div>
          </div>
        </div>

        {/* On Board */}
        <div>
          <div className="bg-teal-800 text-white text-sm font-medium px-3 py-2 h-10">
            On Board
          </div>
          <div className="p-3 text-sm space-y-3">
            <div>
              <p className="font-normal pt-4">Manager</p>
              <p className="font-semibold pt-3" >Navjot Kaur</p>
              <p className="font-semibold pt-2 ">07/01/2024 11:38 AM</p>
            </div>
            <div>
              <p className="pt-3">Coordinator</p>
              <p className="font-semibold pt-2">Harwin</p>
            </div>
            <div>
              <p className="font-semibold mb-1 text-gray-500 pt-6">Special Instructions</p>
              <textarea
                placeholder="Enter"
                className="w-full border rounded pt-13  px-2 py-1 text-sm"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateInfo;
