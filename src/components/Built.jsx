import { useState } from "react";
import featureshome from "../assets/img/features-home-01.jpg"
import { ArrowRight, Phone, ShoppingCart, User} from "lucide-react";

function Built() {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <div className="w-full flex flex-col  justify-between items-center md:flex-row-reverse   md:p-20 p-4">

      {/* Buttons */}
      <div className="w-full grid grid-cols-1 md:grid-cols-1 justify-between items-center gap-2 p-4">
        {/* Built exclusively for you */}
        <div className="w-full " >
            <h1 className="md:text-[32px] font-bold text-center">Built exclusively for you</h1>
            <p className="text-[20px] text-[#62748E] text-center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</p>
        </div>
        <div className="flex flex-row justify-center items-center gap-10 bg-white p-5 rounded-2xl ">
          <button
          onClick={() => setActiveImage(1)}
          className=" rounded-full  text-blue-500 
          flex flex-row justify-between items-center gap-5 bg-white p-1   ">

            <ArrowRight className="text-center w-12.5 bg-transparent"></ArrowRight>

            <div className="flex flex-col w-full">
            <h1 className="text-left">Internal Feedback</h1>
            <p className=" text-left font-semibold" >
                
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur velit.
            </p>
        </div>


        </button>
        
        </div>

        <div className="flex flex-row justify-center items-center gap-10 bg-white p-5 rounded-2xl ">
          <button
          onClick={() => setActiveImage(2)}
          className=" rounded-full  text-blue-500 
          flex flex-row justify-between items-center gap-5 bg-white p-1   ">

            <ArrowRight className="text-center w-12.5 bg-transparent"></ArrowRight>

            <div className="flex flex-col w-full">
            <h1 className="text-left">Internal Feedback</h1>
            <p className=" text-left font-semibold" >
                
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur velit.
            </p>
        </div>


        </button>
        
        </div>

        



        <div className="flex flex-row justify-center items-center gap-10 bg-white p-5 rounded-2xl ">
          <button
          onClick={() => setActiveImage(3)}
          className=" rounded-full  text-blue-500 
          flex flex-row justify-between items-center gap-5 bg-white p-1   ">

            <ArrowRight className="text-center w-12.5 bg-transparent"></ArrowRight>

            <div className="flex flex-col w-full">
            <h1 className="text-left">Internal Feedback</h1>
            <p className=" text-left font-semibold" >
                
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur velit.
            </p>
        </div>


        </button>
        
        </div>


        

         

        

        
      </div>

      {/* Images */}
      <div className="relative w-full h-[80vh]  ">

        <img
          src={featureshome}
          className={`md:absolute md:w-full md:h-full md:object-cover object-contain  transition-opacity duration-500 ${
            activeImage === 1 ? "opacity-100" : "opacity-0"
          }`}
        />

        <img
          src={featureshome}
          className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
            activeImage === 2 ? "opacity-100" : "opacity-0"
          }`}
        />

        <img
          src={featureshome}
          className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
            activeImage === 3 ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={featureshome}
          className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
            activeImage === 4 ? "opacity-100" : "opacity-0"
          }`}
        />

      </div>
    </div>
  );
}

export default Built;