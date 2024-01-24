import React from "react";
import PricePlans from "../../components/PricePlans/PricePlans";
import { pricePlanInterface } from "../../interfaces/dashboardInterfaces/dashboardInterface";

const data: pricePlanInterface[] = [
  {
    memberShipDuration: "Lifetime membership",
    desp: "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaqu amet indis perferendis blanditiis repellendus etur quidem assumenda",
    includedFeatures: [
      "Private forum access",
      "Member resources",
      "Entry to annual conference",
      "Official member t-shirt",
    ],
    payDuration: "Pay once, own it forever",
    planPrice: "$349",
    planCurrency: " USD",
  },
  {
    memberShipDuration: "One month membership",
    desp: "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaqu amet indis perferendis blanditiis repellendus etur quidem assumenda",
    includedFeatures: [
      "Private forum access",
      "Member resources",
      "Entry to annual conference",
      "Official member t-shirt",
    ],
    payDuration: "Pay once, own it forever",
    planPrice: "$100",
    planCurrency: " USD",
  },
];

const PricingPlan: React.FC = () => {
  return (
    <div className="pt-10">
      <div className="mx-auto max-w-2xl sm:text-center px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Simple no-tricks pricing
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet
          indis perferendis blanditiis repellendus etur quidem assumenda.
        </p>
      </div>
      {data?.map((v, i) => {
        return <PricePlans Plandata={v} key={i} />;
      })}
    </div>
  );
};

export default PricingPlan;
