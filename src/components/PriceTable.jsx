import React from "react";

const PricingTable = () => {
  const data = [
    { feature: "Feature 1", tidy: "Monthly fees", essential: "$49/mo", premium: "$79/mo", advanced: "$129/mo" },
    { feature: "Feature 2", tidy: "Free trial", essential: "✔", premium: "✔", advanced: "✔" },
    { feature: "Feature 3", tidy: "Startup Plan", essential: "✔", premium: "✔", advanced: "✔" },
    { feature: "Feature 4", tidy: "Contributors", essential: "Up to 2", premium: "Up to 10", advanced: "Unlimited" },
    { feature: "Feature 5", tidy: "Virtual Desk", essential: "", premium: "✔", advanced: "✔" },
    { feature: "Feature 6", tidy: "Incoming Transfers", essential: "20", premium: "50", advanced: "Unlimited" },
    { feature: "Feature 7", tidy: "Automate Tasks", essential: "", premium: "", advanced: "✔" },
  ];

  return (
    <div className="overflow-x-auto md:w-[80%] p-5">
      <table className="min-w-full  bg-white text-center">
        <thead className="border-b border-b-gray-500 border-t-0">
          <tr className=" ">
            <th className="px-0 py-5 text-left">Tidy Essential</th>
            <th className="px-0 py-5 text-center ">Essential</th>
            <th className="px-0 py-5 text-center ">Premium</th>
            <th className="px-0 py-5 text-center ">Advanced</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="bg-white">
              <td className="px-0 py-4 text-left ">{row.tidy}</td>
              <td className="px-0 py-4 text-center ">{row.essential}</td>
              <td className="px-0 py-4 text-center ">{row.premium}</td>
              <td className="px-0 py-4 text-center ">{row.advanced}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;