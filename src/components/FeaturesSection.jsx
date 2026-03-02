import { FaRocket, FaShieldAlt, FaHeadset } from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <section className="py-10 bg-[#F1F5F9] flex justify-center items-center gap-5">


        <div className=" w-[80%] flex justify-center items-center md:flex-row flex-col gap-5">


            <div className="flex justify-center items-center flex-col">
            <div><FaHeadset className="text-[#2174EA] text-5xl" /></div>
            <div className="w-full flex justify-center items-center flex-col">
            <h1 className="text-center py-4 text-4xl">
                Shangai
            </h1> 
            <p className="text-center ">
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <span className=" w-full  text-center font-bold ">14 open positions</span>
            </div>
        </div>



        <div className="flex justify-center items-center flex-col">
            <div><FaHeadset className="text-[#2174EA] text-5xl" /></div>
            <div className="w-full flex justify-center items-center flex-col">
            <h1 className="text-center py-4 text-4xl">
                Shangai
            </h1>  
            <p className="text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <span className=" w-full  text-center font-bold ">14 open positions</span>
            </div>
        </div>




        <div className="flex justify-center items-center flex-col">
            <div><FaHeadset className="text-[#2174EA] text-5xl" /></div>
            <div className="w-full flex justify-center items-center flex-col">
            <h1 className="text-center py-4 text-4xl">
                Shangai
            </h1> 
            <p className="text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <span className=" w-full  text-center font-bold ">14 open positions</span>
            </div>
        </div>
            

        

        
        </div>
    

    </section>
  );
}