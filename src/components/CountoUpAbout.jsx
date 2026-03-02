// src/components/CounterSection.jsx
import React from "react";
import CountUp from "react-countup";

function CountoUpAbout() {
  return (
    <section className=" w-full bg-[#2174EA] md:p-10 p-5  flex flex-col items-center gap-6">
  
      <div className=" w-full flex flex-row  justify-between items-center gap-5 ">
        {/* Example Counter */}

        {/* <CountUp start={0} end={50000} duration={3} separator="," /> */}
        

        <div className=" text-white w-full flex  flex-col items-center gap-3">

          <div className=" w-full items-center flex flex-col">
            <CountUp className="text-4xl" start={0} end={79} duration={3} suffix="+" />
          </div>

          <div>
            
            <p className="text-center" >Paying Customers</p>
          </div>
          
        </div>

        <div className=" text-white w-full flex  flex-col items-center gap-3">

          <div className=" w-full items-center flex flex-col">
            <CountUp className="text-4xl" start={0} end={79} duration={3} suffix="+" />
          </div>

          <div>
            
            <p className="text-center" >Capital Raised</p>
          </div>
          
        </div>


        <div className=" text-white w-full flex  flex-col items-center gap-3">

          <div className=" w-full items-center flex flex-col">
            <CountUp className="text-4xl" start={0} end={79} duration={3} suffix="+" />
          </div>

          <div>
            
            <p className="text-center" >Team Members</p>
          </div>
          
        </div>



        


        
      </div>
    </section>
  );
}

export default CountoUpAbout;