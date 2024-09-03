import React from "react";

const EmptyState = () => {
  return (
    <div className="w-full h-screen p-2">
      <div className="h-full flex flex-col justify-center items-center">
        <p className="md:text-2xl text-lg font-semibold text-center">
          No data to show
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
