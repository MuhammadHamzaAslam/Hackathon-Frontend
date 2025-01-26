import React from "react";
import { FaDiscourse } from "react-icons/fa";

export default function StatsCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <div className="cardShadow mt-8 mr-4 rounded-xl p-5 py-8 w-full bg-white">
        <div className="flex flex-col justify-center items-center gap-5">
          <FaDiscourse className="text-3xl text-blue-600" />
          <p className="text-center">
            <span className="font-bold">0</span> <br /> All Application
          </p>
        </div>
      </div>
      <div className="cardShadow mt-8 mr-4 rounded-xl p-5 py-8 w-full bg-white">
        <div className="flex flex-col justify-center items-center gap-5">
          <FaDiscourse className="text-3xl text-blue-600" />
          <p className="text-center">
            <span className="font-bold">0</span> <br /> Pending Application
          </p>
        </div>
      </div>
      <div className="cardShadow mt-8 mr-4 rounded-xl p-5 py-8 w-full bg-white">
        <div className="flex flex-col justify-center items-center gap-5">
          <FaDiscourse className="text-3xl text-blue-600" />
          <p className="text-center">
            <span className="font-bold">0</span> <br /> Accepted Application
          </p>
        </div>
      </div>
    </div>
  );
}
