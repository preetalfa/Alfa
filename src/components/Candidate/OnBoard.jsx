import React from 'react'

const OnBoard = () => {
  return (
    <div>
        {/* OnBoard */}

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
  )
}

export default OnBoard