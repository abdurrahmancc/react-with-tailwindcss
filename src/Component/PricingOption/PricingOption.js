import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benifits from "../Benifits/Benifits";

const PricingOption = (props) => {
  const { name, price, benifits } = props.option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h1 className="bg-indigo-300 py-4 text-2xl font-bold rounded">{name}</h1>
      <p>
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-xl text-gray-600 font-bold">/mo</span>
      </p>
      <div>
        <h3 className="text-xl text-left">benifits:</h3>
        {benifits.map((benifit) => (
          <Benifits key={props.key} benifit={benifit}></Benifits>
        ))}
        <div className="">
          <button className="bg-green-500 flex text-white justify-center rounded py-2  w-full  ">
            Buy Now <ArrowRightIcon className="w-6 h-6 ml-2"></ArrowRightIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingOption;
