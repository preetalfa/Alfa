import React from "react";

const OfficeInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl mx-auto">
      {/* Header */}
      <div className="bg-teal-800 text-white px-4 py-2 flex items-center justify-between rounded-t-lg">
        <h3 className="text-sm font-medium">Office Info</h3>
        <button className="text-white hover:text-gray-200">✕</button>
      </div>

      {/* Form Body */}
      <div className="p-6 space-y-4">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              POLICY NUMBER
            </label>
            <input
              type="text"
              placeholder="Policy Number"
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              AGENT NAME
            </label>
            <input
              type="text"
              placeholder="Agent Information"
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              COMPANY NAME
            </label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              AGENT PHONE NO.
            </label>
            <input
              type="text"
              placeholder="Agent Phone No."
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              COMPANY ADDRESS
            </label>
            <input
              type="text"
              placeholder="Company Address"
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              AGENT EMAIL
            </label>
            <input
              type="text"
              placeholder="Agent Email"
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              PHONE NO.
            </label>
            <input
              type="text"
              placeholder="Phone No."
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              DATE ISSUED
            </label>
            <input
              type="date"
              defaultValue="2024-03-12"
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              EXPIRATION DATE
            </label>
            <input
              type="date"
              defaultValue="2024-03-12"
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* Trailer Interchange link */}
        <p className="text-orange-500 text-sm cursor-pointer">
          Trailer Interchange
        </p>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfficeInfo;
