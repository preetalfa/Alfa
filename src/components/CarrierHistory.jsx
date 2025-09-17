import React from "react";
import { ChevronsDownUp } from 'lucide-react';
const CarrierHistory = () => {
  const data = [
    {
      id: "2456859565",
      status: "Pending",
      amount: "$2,400.00",
      pickup: "Austin, TX",
      pickupDate: "1/19/2024",
      delivery: "Sparks, NV",
      deliveryDate: "1/20/2024",
      result: "On Time Delivery",
    },
    {
      id: "2456859565",
      status: "In-Transit",
      amount: "$2,400.00",
      pickup: "Sparks, NV",
      pickupDate: "1/16/2024",
      delivery: "Austin, TX",
      deliveryDate: "1/17/2024",
      result: "Delay",
    },
    {
      id: "2456859565",
      status: "Cancelled",
      amount: "$2,400.00",
      pickup: "Austin, TX",
      pickupDate: "1/15/2024",
      delivery: "Fernley, NV",
      deliveryDate: "1/16/2024",
      result: "Canceled",
    },
    {
      id: "2456859565",
      status: "In-Transit",
      amount: "$2,400.00",
      pickup: "Goodyear, AZ",
      pickupDate: "1/15/2024",
      delivery: "Richmond, VA",
      deliveryDate: "1/16/2024",
      result: "On Time Delivery",
    },
    {
      id: "2456859565",
      status: "Delivered",
      amount: "$2,400.00",
      pickup: "Henrico, VA",
      pickupDate: "1/17/2024",
      delivery: "Fort Worth, TX",
      deliveryDate: "1/18/2024",
      result: "On Time",
    },
  ];

  // status colors
  const statusColors = {
    Pending: "bg-yellow-600 px-5 text-white",
    "In-Transit": "bg-blue-600 text-white",
    Cancelled: "bg-red-600   text-white",
    Delivered: "bg-green-700 text-white",
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      {/* Section Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <h2 className="text-lg font-semibold">Carrier History</h2>
      </div>

      {/* Table Header with Summary */}
      <div className="flex justify-between items-center px-4 py-2">
        <h3 className="font-medium">Load Details</h3>
        <div className="text-sm space-x-4">
          <span>On Time: <b>5</b></span>
          <span>Canceled: <b>2</b></span>
          <span>
            Total Revenue: <b className="text-gray-900">$5,65,222.50</b>
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-base  border border-gray-300 border-collapse">
          <thead>
            <tr className="bg-teal-800 text-white text-left divide-x divide-gray-300">
              <th className="px-4 py-2 flex align-">Load ID </th>
              <th className="px-4  py-1">Status</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Pick-up City</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Delivery City</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Results</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row, idx) => (
              <tr key={idx} className="divide-x divide-gray-200 text-md hover:bg-gray-50">
                <td className="px-4 py-2 text-blue-600 underline cursor-pointer">
                  {row.id}
                </td>
                <td className="px-1  py-2">
                  <span
                    className={`px-4 py-2 rounded text-sm font-medium ${statusColors[row.status]}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-2">{row.amount}</td>
                <td className="px-4 py-2">{row.pickup}</td>
                <td className="px-4 py-2">{row.pickupDate}</td>
                <td className="px-4 py-2">{row.delivery}</td>
                <td className="px-4 py-2">{row.deliveryDate}</td>
                <td className="px-4 py-2">{row.result}</td>
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

export default CarrierHistory;
