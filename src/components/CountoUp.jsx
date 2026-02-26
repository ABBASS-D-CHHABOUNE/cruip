// src/components/CounterSection.jsx
import React from "react";
import CountUp from "react-countup";
import { ArrowRight, Phone, ShoppingCart, User} from "lucide-react";

function CountoUp() {
  return (
    <section className=" bg-[#F1F5F9] md:p-20 p-5  flex flex-col items-center gap-6">
  
      <div className="flex flex-col flex-wrap justify-center gap-5 ">
        {/* Example Counter */}

        {/* <CountUp start={0} end={50000} duration={3} separator="," /> */}
        <div className=" w-full flex  flex-col items-center gap-3">

          <div className=" w-full items-center flex flex-row ">
            <ArrowRight className=" h-10 w-[10%]" ></ArrowRight>
            <CountUp className="text-5xl" start={0} end={79} duration={3} suffix="+" />
          </div>

          <div>
            
            <p >Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.</p>
          </div>
          
        </div>

        <div className=" w-full flex  flex-col items-center gap-3">

          <div className=" w-full items-center flex flex-row ">
            <ArrowRight className=" h-10 w-[10%]" ></ArrowRight>
            <CountUp className="text-5xl" start={0} end={79} duration={3} suffix="+" />
          </div>

          <div>
            
            <p >Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.</p>
          </div>
          
        </div>


        <div className=" w-full flex  flex-col items-center gap-3">

          <div className=" w-full items-center flex flex-row ">
            <ArrowRight className=" h-10 w-[10%]" ></ArrowRight>
            <CountUp className="text-5xl" start={0} end={79} duration={3} suffix="+" />
          </div>

          <div>
            
            <p >Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.</p>
          </div>
          
        </div>


        
      </div>
    </section>
  );
}

export default CountoUp;