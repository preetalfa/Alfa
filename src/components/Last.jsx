import React from "react";
// import { class } from './../../node_modules/@babel/parser/lib/index';
import { Eye, File } from "lucide-react";
const Last = () => {
  return (
    <div className="bg-white rounded-b-lg  shadow  p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-300 rounded-b-lg overflow-hidden">
        <div className="flex flex-col h-full border-r border-gray-200">
          <div className="bg-teal-800 text-white text-2xl  px-7 h-11 flex items-center font-bold">
            Logs
          </div>
        </div>
        {/* 3333333333333333333333 */}
        {/* Information */}
        <div className="border-r border-gray-200">
          <div className="bg-teal-800 text-2xl px-7 h-11 flex justify-between items-center font-bold text-white py-2">
            <div>Document</div>
            <span className="bg-green-700 text-white text-sm font-medium px-3 py-1 rounded-xl">
              ADD NOTE
            </span>
          </div>
        </div>

        <div className="border-r border-gray-200">
          <div className="p-3 m-3   space-y-4">
            <p className="text-lg font-bold ">Load Manifest: was generated</p>
            <div className="font-thin text-sm">
              <p className="text-gray-500">byYou .parten Admin . tue .Apr 2024 @04:0 GMT+5</p>
            </div>

            <div>
              <p className="text-lg font-bold ">
                LastCheckCall chnaged from 3/30/2024 6:43:28 PM + 00:00 to
                4/1/2024 6:43:28 PM + 00:00 for Trip 10000024
                 </p>
                <h1>
                  Reason :{" "}
                  <span className="font-light"> last check Date Changed</span>
                </h1>
                <div className="font-thin text-sm py-1">
                  <p className="text-gray-500">byYou .parten Admin . tue .Apr 2024 @04:0 GMT+5</p>
                </div>
             
            </div>
            <div>
              <p className="text-lg font-bold ">
                Status Changed from In-Transit to Delivered for Trip 10000024
                <h1>
                  Reason :{" "}
                  <span className="font-light"> last check Date Changed</span>
                </h1>
                <div className=" text-sm font-thin  py-2 ">
                  <p className="text-gray-500">byYou .parten Admin . tue .Apr 2024 @04:0 GMT+5</p>
                </div>
              </p>
            </div>
            <div>
              <p className="text-lg font-bold ">
                Status Changed from In-Transit to Delivered for Trip 10000024
                <h1 cla>
                  Reason :{" "}
                  <span className="font-light"> last check Date Changed</span>
                </h1>
                <div className="font-thin text-sm py-1">
                  <p className="text-gray-500">byYou .parten Admin . tue .Apr 2024 @04:0 GMT+5</p>
                </div>
              </p>
            </div>
          </div>
        </div>

        {/* On Board66 */}
        <div>
          {/* <div className="bg-cyan-700 text-white text-sm font-medium px-3 py-2 h-10">
            Document
          </div> */}
          <div className="">
            <div className="p-2 m-2  space-y-2">
              <div className="">
                <p className="text-lg font-bold py-2 ">
                  On Location
                  <div className="font-normal text-base">
                    <p>1905 Mchenry ave , Escalon , CA</p>
                  </div>
                </p>

                <h1 className="font-bold py-1">
                  Note :{" "}
                  <span className="font-normal">
                    Driver has dropped off commondity{" "}
                  </span>
                </h1>
                <h1 className="font-bold py-1">
                  Driver :{" "}
                  <span className="font-normal">SIDDHARTH SHARMA </span>
                </h1>
                <h1 className="font-bold py-1">
                  Trip NUmber : <span className="font-normal">10000024</span>
                </h1>
                <div className="text-sm py-1">
                  <p className="text-gray-500">
                    by : Amrit Dispatcher / tue , Apr 2 , 2024 @ 00:46 GMT+5
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-lg font-bold py-2">
                    On Location
                    <div className="font-normal text-base">
                      <p>1905 Mchenry ave , Escalon , CA</p>
                    </div>
                  </p>
                </div>
                <h1 className="font-bold  py-1">
                  Note :{" "}
                  <span className="font-normal">
                    Driver has dropped off commondity{" "}
                  </span>
                </h1>
                <h1 className="font-bold  py-1">
                  Driver :{" "}
                  <span className="font-normal">SIDDHARTH SHARMA </span>
                </h1>
                <h1 className="font-bold  py-1">
                  Trip NUmber : <span className="font-normal">10000024</span>
                </h1>
                <div className="text-sm  py-1">
                  <p className="text-gray-500">
                    by : Amrit Dispatcher / tue , Apr 2 , 2024 @ 00:46 GMT+5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
