import PricingDes from "../components/PricingDes"

export default function Pricing() {

    return <main>
        <section className="w-full h-500 md:h-190 bg-white">

            <PricingDes></PricingDes>

        </section>

        {/* For Young Startups */}

        <section className="w-full flex justify-center items-center bg-white md:h-70 h-90 ">

            <div className=" bg-white  w-full md:w-[85%] flex justify-between  flex-col md:h-38 h-80   shadow-2xl ">
                <div className="p-3 md:text-left text-center ">

                    <p className="md:p-1 p-2 md:text-[14px] text-2xl font-bold rounded-full bg-[#A4F4CF] text-[#007A55] md:w-40 w-full text-center " >For Young Startups</p>

                </div>

                <div className=" pt-3 pb-3 w-full flex justify-between items-center md:flex-row flex-col ">


                    <div>
                        <h1  className="p-3 text-[25px] font-bold  " >Launched a business making less than $100K in revenue?</h1>
                    </div>

                    

                    <div className="p-3 bg-[#F8FAFC] w-[18%] ">
                        <button className="text-white bg-blue-600 w-full h-10 ">Contact Us</button>
                    </div>

                </div>
            </div>

        </section>
    </main>
    
}