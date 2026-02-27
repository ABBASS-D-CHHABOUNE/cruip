import { useState } from "react";
import  video from "../assets/Videos/video-hero.mp4"
import  Heroimage from "../assets/img/hero-image-01.jpg"
import { ArrowRight , Play } from "lucide-react";
import ServicesCards from "../components/ServicesCards";
import ImageSwitcher from "../components/ImageSwitcher";
import Built from "../components/Built"
import CountoUp from "../components/CountoUp";
import imageforcountdown from "../assets/img/imageforcountdown.png"
import PricingDes from "../components/PricingDes";

function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);

  return (
    
    <>
    <main className="#101D2D">

        {/* Create stunning web experiences */}
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


    {/* The quick brown fox jumped over the lazy dog */}

    <section className="w-full pt-5 pb-5 bg-amber-50" >



         <div className=" p-4 flex flex-col justify-center items-center gap-5">
                <h1 className=" md:text-5xl md:font-bold text-center tex " >Built exclusively for you</h1>
                
            </div>


             <div className="w-full">
                <Built></Built>
            </div>




       

       
    </section>



    {/* Simplify operating and manage with transparency */}


    <section className="flex justify-center gap-5 md:gap-10 items-center flex-col p-8">
        <div className="w-full flex justify-center items-center p-5">

            <h1 className=" font-bold text-center text-3xl md:text-6xl text-white md:w-[60%] w-full">Simplify operating and manage with transparency</h1>


        </div>

         <div class="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-16 max-w-6xl w-full">


          



    {/* <!-- Card 1 --> */}
    <div class="bg-white  overflow-hidden shadow-lg  ">
        {/* Adding badge using before */}
    <div className="absolute before:content-['1'] before:relative before:left-13 before:-top-8 before:z-20  before:w-15 before:h-15 before:flex before:justify-center before:items-center before:rounded-full before:bg-[#4A8EFA] before:text-white before:text-lg before:font-bold">
  </div>      
      <div class="overflow-hidden z-5">
        <img src={Heroimage} alt="Nature" class="w-full h-100 object-cover transform transition duration-500 hover:scale-110"/>
      </div>
      <div class="p-2">
        <h1 class="text-2xl font-bold mb-2">Advanced Features</h1>
        <p class="text-gray-600 text-1xl">
            Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.
        </p>
      </div>
    </div>

    {/* <!-- Card 2 --> */}

    <div class="bg-white  overflow-hidden shadow-lg">
        {/* Adding badge using before */}
    <div className="absolute before:content-['2'] before:relative before:left-13 before:-top-8 before:z-20  before:w-15 before:h-15 before:flex before:justify-center before:items-center before:rounded-full before:bg-[#4A8EFA] before:text-white before:text-lg before:font-bold">
  </div>  
      <div class="overflow-hidden z-5">
        <img src={Heroimage} alt="Nature" class="w-full h-100 object-cover transform transition duration-500 hover:scale-110"/>
      </div>
      <div class="p-2">
        <h1 class="text-2xl font-bold mb-2">Advanced Features</h1>
        <p class="text-gray-600 text-1xl">
            Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.
        </p>
      </div>
    </div>
    

    {/* <!-- Card 3 --> */}


    <div class="bg-white  overflow-hidden shadow-lg">
        {/* Adding badge using before */}
    <div className="absolute before:content-['3'] before:relative before:left-13 before:-top-8 before:z-20  before:w-15 before:h-15 before:flex before:justify-center before:items-center before:rounded-full before:bg-[#4A8EFA] before:text-white before:text-lg before:font-bold">
        
  </div>  
      <div class="overflow-hidden z-5 ">
        <img src={Heroimage} alt="Nature" class="w-full h-100 object-cover transform transition duration-500 hover:scale-110"/>
      </div>
      <div class="p-2">
        <h1 class="text-2xl font-bold mb-2">Advanced Features</h1>
        <p class="text-gray-600 text-1xl">
            Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.
        </p>
      </div>
    </div>
    

  </div>
    </section>

    {/* We're experts and brand creators */}


    <section className=" w-full flex justify-center items-center flex-col bg-white p-5  ">

        {/* The Headline */}

        <div className="w-full md:w-[70%] flex justify-center items-center flex-col gap-5  ">

            <h1 className="w-full text-center text-6xl font-bold " >We're experts and brand creators</h1>
            <p  className="w-full text-center text-[20px] " >Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est 
            laborum — semper quis lectus nulla at volutpat diam ut venenatis.
            </p>

        </div>


        {/* counters + image */}

        <div className="flex justify-center items-center flex-col md:flex-row gap-5 ">


            <div>
                <CountoUp></CountoUp>
            </div>

            <div>

                <img src={imageforcountdown} width={700} alt="More taht image By Abbass chahboune " />

            </div>


        </div>

    </section>

    {/* pricing  */}

    <section className="bg-gradient-b from-[#101D2D] to-white flex justify-center items-center flex-col ">
        
        
        <div >
            <PricingDes></PricingDes>
        </div>
    </section>



    {/* Say goodbye to long queues, big updates, and */}


    <section className="w-full flex justify-center items-center flex-col bg-[#F1F5F9] h-screen " >

        <div className="w-full flex justify-center items-center flex-col md:w-[74%] p-4 gap-5" >
            <h1 className="text-5xl font-bold text-center" >Say goodbye to long queues, big updates, and <span className="text-[#00BC7D]">confusion</span></h1>
            <p  className="text-2xl text-[#62748E] text-center " >Excepteur sint occaecat cupidatat non proident, 
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


    </main>  
    </>
    
  );
}

export default Hero;