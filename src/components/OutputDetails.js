import React from "react";

const getStatusBgColor = (status) => {
  switch (status) {
    case "Accepted":
      return "bg-green-200 text-green-900";
    case "Time Limit Exceeded":
      return "bg-yellow-200 text-yellow-900";
    default:
      return "bg-red-200 text-red-900";
  }
};

const OutputDetails = ({ outputDetails }) => {
  const status = outputDetails?.status?.description || "";

  return (
    <div className="metrics-container space-y-3 text-sm -mt-6">
      <div className="flex items-center gap-2">
        <span className="font-medium whitespace-nowrap">Status:</span>
        <span className={`font-bold px-3 py-1.5 rounded-md ${getStatusBgColor(status)}`}>
          {status}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-medium whitespace-nowrap">Memory:</span>
        <span className="font-bold px-3 py-1.5 rounded-md bg-gray-200">
          {outputDetails?.memory || "—"}
        </span>
        <span className="text-sm text-gray-500">MB</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-medium whitespace-nowrap">Time:</span>
        <span className="font-bold px-3 py-1.5 rounded-md bg-gray-200">
          {outputDetails?.time || "—"}
        </span>
        <span className="text-sm text-gray-500">ms</span>
      </div>
    </div>
  );
};

export default OutputDetails;
