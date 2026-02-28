import { useState } from "react";

function PricingDes() {
  const [yearly, setYearly] = useState(false);

  const pricingPlans = [
    {
      name: "Essential",
      monthly: 55,
      yearly: 49,
      sale: false,
    },
    {
      name: "Premium",
      monthly: 85,
      yearly: 79,
      sale: true,
    },
    {
      name: "Advanced",
      monthly: 135,
      yearly: 129,
      sale: false,
    },
  ];

  return (
    <section className=" bg-[#101D2D] h-500 md:h-screen">
      <div className="text-center w-full ">
        <div className="w-full flex justify-center items-center p-5  ">
            <h1 className="text-6xl font-bold md:w-[50%] w-full text-center text-white ">Find the right plan for your business</h1>
        </div>

        {/* Toggle */}
        <div className="flex justify-center items-center gap-10 mt-6 text-[#62748E]">
          <span className={!yearly ? "font-extra" : ""} >Pay Monthly</span>

          <button
            onClick={() => setYearly(!yearly)}
            className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
              yearly ? "bg-blue-600" : "bg-gray-400"
            }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${
                yearly ? "translate-x-7" : ""
              }`}
            ></div>
          </button>

          <span className={yearly ? "font-extra" : ""}>
            Pay Yearly <p className="text-[#00BC7D]">Save 20%</p>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto h-75">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white p-5  shadow-md text-left"
          > 
          {/* Sale Badge */}
  {plan.sale && (
    <span className=" z-20 relative -top-8 left-50 p-5 bg-[#A4F4CF] text-[#007A55] text-xs font-bold px-3 py-1 rounded-full">
      Most Popular
    </span>
  )}
            {/* Headline cards  */}
            <div className="w-full flex flex-col ">
                 
                <h3 className="text-2xl font-semibold mb-4  ">{plan.name}</h3>

            <p className="text-5xl font-semibold ">
              <span className="text-[#62748E] text-4xl m-0 p-0">$</span> {yearly ? plan.yearly : plan.monthly}
              <span className="text-lg text-gray-500">
                /{yearly ? "mo (billed yearly)" : "mo"}
              </span>
            </p>
            {/* paragraph */}
            <div className="border-b border-gray-300 pt-2 pb-2 text-[#62748E] " >
                <p>Better insights for growing businesses that want more customers.</p>
            </div>
            </div>

            {/* paragraph */}


            {/* Features */}

           
                <div className="flex flex-col justify-center gap-4 h-60  ">
                    <h2 className="pt-1 pb-1">All features of Essential plus:</h2>
                <div><i>I</i> <span>50 Placeholder text commonly</span></div>
                <div><i>I</i> <span>50 Placeholder text commonly</span></div>
                <div><i>I</i> <span>50 Placeholder text commonly</span></div>
                <div><i>I</i> <span>50 Placeholder text commonly</span></div>
                </div>
            

            <div className="w-full">
                <button className=" w-full mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Choose Plan
            </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingDes;