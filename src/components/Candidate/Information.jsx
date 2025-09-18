import React from 'react'

const Information = () => {
  return (
    <div>
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

    </div>
  )
}

export default Information