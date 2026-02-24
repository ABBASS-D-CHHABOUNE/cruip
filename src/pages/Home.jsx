import { useState } from "react";
import  video from "../assets/Videos/video-hero.mp4"
import  Heroimage from "../assets/img/hero-image-01.jpg"
import { ArrowRight , Play } from "lucide-react";
import ServicesCards from "../components/ServicesCards";
import ImageSwitcher from "../components/ImageSwitcher"

function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);

  return (
    
    <>
    <main className="#101D2D">
        <section className=" md:p-13 p-5 #101D2D flex flex-col md:flex-row items-center justify-between w-full 
        ">
      
      {/* Left container: Headline + Paragraph + CTA */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className=" text-white text-6xl  md:text-6xl font-bold mb-4 text-center md:text-left ">
          Create stunning web experiences
        </h1>
        <p className="text-white text-lg md:text-left text-center mb-6 md:w-[70%]">
          Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
        </p>
        <div className="w-full flex justify-between items-center flex-row md:flex md:justify-start md:gap-10">

            <button className=" flex gap-2 bg-blue-600 text-white px-6 py-3 rounded-[3px] hover:bg-blue-700 transition">
          Request demo  <ArrowRight/>
        </button>
        <button className=" flex gap-2 bg-[#314158] text-white px-6 py-3 rounded-[3px]">
          Explore Product     
        </button>
        

        </div>
      </div>

      {/* Right container: Click-to-play video */}
      <div className="md:w-1/2 relative cursor-pointer">
        {!isPlaying ? (
          // Thumbnail image overlay
          <div
            className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden shadow-lg"
            onClick={handlePlay}
          >
            <img
              src={Heroimage} // replace with your thumbnail image
              alt="Video Thumbnail"
              className="w-full h-full object-fill"
            />
            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center  bg-opacity-40">
              <span className="text-black text-3xl font-extra p-5 rounded-[100%] bg-white ">
                <Play />
              </span>
              
            </div>
          </div>
        ) : (
          // Video element
          <video
            src= {video}
            controls
            autoPlay
            className="w-full h-64 md:h-96 object-fill rounded-lg shadow-lg"
          />

        )}
      </div>
      
    </section>   


   {/* The ServicesCards section */}
    <ServicesCards />

    {/* Built exclusively for you */}

    <section className="w-full pt-5 pb-5 bg-[#F1F5F9] flex justify-center items-center flex-col  ">

        <div className="md:w-[80%] w-full flex flex-col justify-center items-center" >



            <div className=" p-4 flex flex-col justify-center items-center gap-5">
                <h1 className=" md:text-5xl md:font-bold text-center " >Built exclusively for you</h1>
                <p  className="md:text-[20px]  text-1xl text-gray-500 md:w-[80%]  text-center " >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — 
                semper quis lectus nulla at volutpat diam ut venenatis.</p>
            </div>

            <div className="w-full">
                <ImageSwitcher/>
            </div>





        </div>

    </section>


    </main>  
    </>
    
  );
}

export default Hero;