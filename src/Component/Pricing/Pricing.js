import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOption = [
    {
      id: 24,
      name: "Free",
      price: 0,
      benifits: [
        "everything on free",
        "unlimited deals",
        "unlimited deals",
        "unlimited deals",
        "unlimited deals",
        "unlimited deals",
        "crazy deals",
        "fantastic deals",
        "crazy deals",
        "fantastic deals",
      ],
    },
    {
      id: 2,
      name: "Reguler",
      price: 424,
      benifits: [
        "everything on free",
        "unlimited deals",
        "unlimited deals",
        "unlimited deals",
        "unlimited deals",
        "unlimited deals",
        "crazy deals",
        "fantastic deals",
        "crazy deals",
        "fantastic deals",
      ],
    },
    {
      id: 4,
      name: "Premium",
      price: 4234,
      benifits: [
        "everything on free",
        "unlimited deals",
        "unlimited deals",
        "unlimited deals",
        "unlimited deals",
        "unlimited deals",
        "crazy deals",
        "fantastic deals",
        "crazy deals",
        "fantastic deals",
      ],
    },
  ];
  return (
    <div className="bg-indigo-300 container mx-auto mt-20 rounded">
      <h1 className="text-5xl text-white py-5">Best of the Town</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sapiente!</p>
      <div className="grid md:grid-cols-3 gap-10 p-4">
        {pricingOption.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
