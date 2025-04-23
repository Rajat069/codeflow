import React from "react";

const OutputWindow = ({ outputDetails }) => {
  const getOutput = () => {
    const statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // Compilation Error
      return (
        <pre className="px-4 py-2 font-normal text-sm font-mono text-red-500 whitespace-pre-wrap leading-relaxed">
          {window.atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      // Success
      return (
        <pre className="px-4 py-2 font-normal text-sm font-mono text-green-500 whitespace-pre-wrap leading-relaxed">
          {window.atob(outputDetails.stdout) !== null
            ? `${window.atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      // Time Limit Exceeded
      return (
        <pre className="px-4 py-2 font-normal text-sm font-mono text-yellow-500 whitespace-pre-wrap leading-relaxed">
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      // Runtime Error or other
      return (
        <pre className="px-4 py-2 font-normal text-sm font-mono text-red-500 whitespace-pre-wrap leading-relaxed">
          {window.atob(outputDetails?.stderr)}
        </pre>
      );
    }
  };

  return (
    <>
      <h1 className="font-bold text-xl mb-1 -mt-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">
        Output
      </h1>
      <div className="w-full min-h-[12rem] max-h-[16rem] bg-[#1e293b] rounded-md text-white text-sm overflow-y-auto shadow-lg border border-slate-600 p-2">
        {outputDetails ? getOutput() : null}
      </div>
    </>
  );
};

export default OutputWindow;
