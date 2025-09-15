import React from "react";

const FleetTable = () => {
  const data = [
    {
      unit: "9343",
      vin: "1234gh4332345435435",
      make: "Freightliner",
      driver1: "Ravi Singh",
      phone1: "+91 (356) 658 9874",
      driver2: "Steve",
      phone2: "+91 (356) 658 3850",
      cab: "N/A",
    },
    {
      unit: "9343",
      vin: "1234gh4332345435435",
      make: "Freightliner",
      driver1: "Karan Singh",
      phone1: "+91 (356) 658 8764",
      driver2: "Rahul",
      phone2: "+91 (356) 658 9237",
      cab: "N/A",
    },
    {
      unit: "9343",
      vin: "1234gh4332345435435",
      make: "Freightliner",
      driver1: "Mohit Singh",
      phone1: "+91 (356) 658 2329",
      driver2: "Kuldeep",
      phone2: "+91 (356) 658 1274",
      cab: "N/A",
    },
    {
      unit: "9343",
      vin: "1234gh4332345435435",
      make: "Freightliner",
      driver1: "Love Singh",
      phone1: "+91 (356) 658 4350",
      driver2: "Harman",
      phone2: "+91 (356) 658 9735",
      cab: "N/A",
    },
    {
      unit: "9343",
      vin: "1234gh4332345435435",
      make: "Freightliner",
      driver1: "Ammy Singh",
      phone1: "+91 (356) 658 3497",
      driver2: "Ranjeet",
      phone2: "+91 (356) 658 2298",
      cab: "N/A",
    },
  ];

  return (
    <div className="bg-white shadow border-collapse border border-gray-400 rounded-lg overflow-hidden">
      <div className="flex items-center  justify-between px-4 py-2 border-b">
        <h2 className="text-lg font-semibold">Fleet Information</h2>
        <button className="text-yellow-600 font-medium hover:underline">
          + Add Fleet
        </button>
      </div>

      <div className="overflow-x-auto ">
        <table className="min-w-full text-md  border-collapse">
          <thead>
            <tr className="bg-teal-800 divide-x divide-gray-300  text-white text-left">
              <th className="px-4  py-2">Unit Number</th>
              <th className="px-4 py-2">Vin Number</th>
              <th className="px-4 py-2">Make Model</th>
              <th className="px-4 py-2">Driver 1</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Driver 2</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Cab Card</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className={`border-b divide-x divide-gray-500 hover:bg-gray-50 ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-4 py-2 text-blue-600 divide-x divide-gray-300 underline cursor-pointer">
                  {row.unit}
                </td>
                <td className="px-4  py-2">{row.vin}</td>
                <td className="px-4 py-2">{row.make}</td>
                <td className="px-4 py-2">{row.driver1}</td>
                <td className="px-4 py-2 text-blue-600 underline cursor-pointer">
                  {row.phone1}
                </td>
                <td className="px-4 py-2">{row.driver2}</td>
                <td className="px-4 py-2 text-blue-600 underline cursor-pointer">
                  {row.phone2}
                </td>
                <td className="px-4 py-2">{row.cab}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Pagination */}
      <div className="flex items-center justify-between px-4 py-2 text-sm">
        <p>Showing 1 to 5 of 10</p>
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 border rounded hover:bg-gray-100">
            {"<"}
          </button>
          <button className="px-3 py-1 border rounded bg-emerald-700 text-white">
            1
          </button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">
            2
          </button>
          <button className="px-2 py-1 border rounded hover:bg-gray-100">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FleetTable;
