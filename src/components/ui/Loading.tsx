import React from "react";
import { FaSpinner } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div className=" ">
      <Skeleton />
    </div>
  );
};

export default Loading;
