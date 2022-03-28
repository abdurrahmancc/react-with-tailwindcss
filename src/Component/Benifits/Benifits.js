import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";
const Benifits = ({ benifit }) => {
  return (
    <div className="flex ">
      <CheckCircleIcon
        className="w-6 h-6 text-green-500
      "
      ></CheckCircleIcon>
      <span className="ml-6 text-xl">{benifit}</span>
    </div>
  );
};

export default Benifits;
