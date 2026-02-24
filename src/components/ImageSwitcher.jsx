import { useState } from "react";
import featureshome from "../assets/img/features-home-01.jpg"
import { ArrowRight, Phone, ShoppingCart, User} from "lucide-react";

function ImageSwitcher() {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <div className="w-full flex flex-col justify-between items-center gap-6  md:p-20 p-4">

      {/* Buttons */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 justify-between items-center gap-4">
        <div className="flex flex-col justify-between items-center gap-2 ">
          <button
          onClick={() => setActiveImage(1)}
          className="p-4 rounded-full bg-blue-500 text-white ">

            <ArrowRight className="text-center w-full"></ArrowRight>


        </button>
        <p className="text-center font-semibold" >Internal Feedback</p>
        </div>

         <div className="flex flex-col justify-between items-center gap-2 ">
          <button
          onClick={() => setActiveImage(2)}
          className="p-4 rounded-full bg-blue-500 text-white ">

            
            <Phone className="text-center w-full"></Phone>


        </button>
        <p className="text-center font-semibold" >Internal Feedback</p>
        </div>



         <div className="flex flex-col justify-between items-center gap-2 ">
          <button
          onClick={() => setActiveImage(3)}
          className="p-4 rounded-full bg-blue-500 text-white ">

            <ArrowRight className="text-center w-full"></ArrowRight>


        </button>
        <p className="text-center font-semibold" >Internal Feedback</p>
        </div>



         <div className="flex flex-col justify-between items-center gap-2 ">
          <button
          onClick={() => setActiveImage(4)}
          className="p-4 rounded-full bg-blue-500 text-white ">

            <Phone className="text-center w-full"></Phone>


        </button>
        <p className="text-center font-semibold" >Internal Feedback</p>
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

export default ImageSwitcher;