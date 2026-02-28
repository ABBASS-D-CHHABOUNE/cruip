import PricingDes from "../components/PricingDes"
import { Users, CheckCircle , ArrowRight } from "lucide-react";
import AccordionSection from "../components/AccordionSection";
import PricingTable from "../components/PriceTable";

export default function Pricing() {

    return <>
    {/* Pricing Section */}
        <section className="w-full  h-500 md:h-200 bg-white">

            
                <PricingDes></PricingDes>
            

        </section>

        {/* For Young Startups Section */}

        <section className="w-full bg-white flex justify-center items-center flex-col h-[80%] ">


            <div className="w-full md:w-[90%] p-5 flex justify-left items-center flex-col gap-0">
                <div className="w-full flex justify-start  items-center md:w-full  ">
                <h3 className="w-[50%] md:w-[20%] md:-mb-2 md:z-10 text-center text-1xl bg-[#A4F4CF] text-[#007A55] p-2 rounded-full font-bold " > For Young Startups</h3>
            </div>

            <div className="w-full bg-white p-10 md:flex md:justify-between md:items-center shadow">
                <h1 className="text-center text-3xl font-bold" >Launched a business making less than $100K in revenue?</h1>
                <div className="w-full md:w-[15%] text-center  p-3 bg-[#F8FAFC] ">
                    <button className="w-full bg-[#2174EA] pt-2 pb-2  text-white md:text-[14px] text-2xl" >Contact Us</button>
                </div>
            </div>
            </div>

        </section>

        {/* It's easy to add extra benefits to all of our plans */}

        <section className="w-full h-300 md:h-200 flex justify-center items-center flex-col bg-[#F1F5F9] " >
            <div className="w-full p-4 flex justify-center items-center flex-col md:w-[90%] md:h-screen   ">

                {/* The Head Line  */}

                <div className="w-full flex justify-center items-center pt-5 pb-5  md:h-60   ">

                    <h1 className=" w-full md:text-6xl text-4xl text-center md:text-left font-bold ">It's easy to add extra benefits to all of our plans.</h1>

                </div>

                {/* The cards  */}


                <div className="w-full flex justify-between items-center flex-col md:flex-row h-screen ">

                    <div className="max-w-100 mx-auto  p-6 hover:shadow-2xl transition-all duration-300 ">
      
                     {/* Icon Section */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl ">
                    <Users size={28} />
                  </div>
                   {/* Content */}
                   <div>
                     <h1 className="text-4xl font-boldmb-3">
                       Workers' Wallet
                     </h1>

                     <p className="text-gray-600 leading-relaxed text-[20px] mb-4">
                       Duis aute irure 
                       dolor in reprehenderit in voluptate velit esse 
                       cillum dolore eu fugiat nulla pariatur.
                     </p>

                      {/* Price + Icon */}
                      <div className="flex items-center gap-2 text-sm font-medium text-green-600">
                        <CheckCircle size={18} />
                        <p>From $6/mo per participant. No setup fee</p>
                      </div>
      </div>
                    </div>

                    <div className="max-w-100 mx-auto  p-6 hover:shadow-2xl transition-all duration-300 ">
      
                     {/* Icon Section */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl ">
                    <Users size={28} />
                  </div>
                   {/* Content */}
                   <div>
                     <h1 className="text-4xl font-boldmb-3">
                       Workers' Wallet
                     </h1>

                     <p className="text-gray-600 leading-relaxed text-[20px] mb-4">
                       Duis aute irure 
                       dolor in reprehenderit in voluptate velit esse 
                       cillum dolore eu fugiat nulla pariatur.
                     </p>

                      {/* Price + Icon */}
                      <div className="flex items-center gap-2 text-sm font-medium text-green-600">
                        <CheckCircle size={18} />
                        <p>From $6/mo per participant. No setup fee</p>
                      </div>
      </div>
                    </div>

                    <div className="max-w-100 mx-auto  p-6 hover:shadow-2xl transition-all duration-300 ">
      
                     {/* Icon Section */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl ">
                    <Users size={28} />
                  </div>
                   {/* Content */}
                   <div>
                     <h1 className="text-4xl font-boldmb-3">
                       Workers' Wallet
                     </h1>

                     <p className="text-gray-600 leading-relaxed text-[20px] mb-4">
                       Duis aute irure 
                       dolor in reprehenderit in voluptate velit esse 
                       cillum dolore eu fugiat nulla pariatur.
                     </p>

                      {/* Price + Icon */}
                      <div className="flex items-center gap-2 text-sm font-medium text-green-600">
                        <CheckCircle size={18} />
                        <p>From $6/mo per participant. No setup fee</p>
                      </div>
      </div>
                    </div>

                </div>

            </div>

        </section>


        {/* Compare plans by features  */}

        <section className="w-full bg-white flex justify-center items-center h-screen" >


            <div className="w-full flex justify-center items-center bg-white">

                <PricingTable></PricingTable>

            </div>

        </section>


         {/* Frequently Asked Questions */}
        <section className="w-full bg-[#F8FAFC] flex justify-center items-center h-200">
            <div className="pt-4 pb-4">
            
            <div className="w-full flex justify-center items-center h-40" >
                <h1 className="md:text-6xl text-4xl text-center  ">Frequently Asked Questions</h1>
            </div>

            
            <div>
                <AccordionSection></AccordionSection>
           
            </div>

            </div>
        </section>


            {/* Say goodbye to long queues, big updates, and */}


    <section className="w-full flex justify-center items-center flex-col bg-[#101D2D] h-screen " >

        <div className="w-full flex justify-center items-center flex-col md:w-[74%] p-4 gap-5" >
            <h1 className="text-5xl font-bold text-center text-white" >Say goodbye to long queues, big updates, and <span className="text-[#00BC7D]">confusion</span></h1>
            <p  className="text-2xl text-[#ffffff] text-center " >Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum — 
            semper quis lectus nulla at volutpat diam ut venenatis.
            </p>
        </div>
        <div>
        <button className=" flex gap-2 bg-blue-600 text-white px-6 py-3 rounded-[3px] hover:bg-blue-700 transition">
          Request demo  <ArrowRight/>
        </button>
        </div>
        </section>


        

        
    </>
    
}