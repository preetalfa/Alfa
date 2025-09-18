import React from 'react'

const Accounting = () => {
  return (
    <div>
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
        </div>
  )
}

export default Accounting