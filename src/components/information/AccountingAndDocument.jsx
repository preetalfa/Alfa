import React from 'react';
import { Eye, File, ReceiptText } from 'lucide-react';

const AccountingAndDocument = () => {
  return (
    <>
      <div className="border-r border-gray-200">
        <div className="bg-teal-800 text-white text-sm font-medium px-3 py-2 h-10"></div>
        <div className="pt-5">
          <p1 className="font-bold text-2xl p-5 text-red-400">
            Interchnage
          </p1>
        </div>
        <div className="pl-5 py-39 space-y-20">
          <p1 className="font-bold text-2xl text-red-400">Computer</p1>
        </div>
      </div>
      <div>
        <div className="bg-teal-800 text-white text-sm font-medium px-3 py-2 h-10">
          Document
        </div>
        <div className="p-3 flex space-y-3">
          <div>
            <p className="font-bold text-red-700 flex">
              Onboarding Packet
            </p>
            <span>
              <Eye className="p-1 ml-66 m-2 text-black" />
            </span>
            <div>
              <div className="flex">
                <File />
                <div className="flex pt-4 pl-19 gap-2">
                  <p className="font-thin flex text-xs">
                    Setup <span className="font-medium text-xs"> 3/12/2014</span>
                  </p>
                  <p className="font-thin text-xs text-red-400">
                    Expire <span className="font-medium text-xs"> 3/12/2014</span>
                  </p>
                </div>
              </div>
            </div>
            <p className="font-bold mt-8 border-t-gray-600 text-green-700 flex">
              Study Certificate
            </p>
            <span>
              <Eye className="p-1 ml-66 m-2 text-black" />
            </span>
            <div className="flex">
              <File />
            </div>
            <p className="font-bold mt-9 text-green-700 flex">
              Computer Certificate
            </p>
            <span>
              <Eye className="p-1 ml-66 m-2 text-black" />
            </span>
            <div className="flex">
              <File />
              <div className="flex pt-4 pl-13 gap-2">
                <p className="font-thin gap-4 flex text-xs">
                  Setup <span className="font-medium text-xs"> 3/12/2014</span>
                </p>
                <p className="font-thin text-xs text-red-400">
                  Expire <span className="font-medium text-xs"> 3/12/2014</span>
                </p>
              </div>
            </div>
            <div className="py-14">
              <ReceiptText />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountingAndDocument;