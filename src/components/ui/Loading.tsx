import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="md:absolute md:inset-1/2">
      <FaSpinner className="mr-2 top-0.5 animate-spin" size={40} />
    </div>
  );
};

export default Loading;
