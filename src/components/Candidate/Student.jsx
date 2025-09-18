import React from 'react'

const Student = () => {
  return (
    <div>
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

    </div>
  )
}

export default Student