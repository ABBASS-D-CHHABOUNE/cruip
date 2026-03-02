import abouthero from "../assets/img/abouthero.jpg";
import aboutintro from "../assets/img/aboutintro.jpg";
import CountoUpAbout from "../components/CountoUpAbout";
import ImageSlider from "../components/ImageSlider";
import FeaturesSection from "../components/FeaturesSection";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (

    
    <>
    <section
      className=" bg-white md:w-full  md:relative h-screen  md:bg-contain md:-z-5 md:-top-30 -top-30 md:bg-center 
       "
      style={{ backgroundImage: `url(${abouthero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 h-screen bg-[#283442]/80"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <h1 className="text-white md:text-7xl text-5xl font-bold text-center md:w-[70%] w-full">
          We're designing a new way to do business
        </h1>
      </div>
    </section>

    <section className=" bg-white w-full flex justify-center items-center flex-col relative -mt-40 ">
  <div className="md:w-[80%] w-full flex justify-center items-center flex-col relative -top-20  ">
        <div className=" p-1 relative " >
            <img src={aboutintro} alt="aboutintro" />
        </div>

        

        <div className=" flex justify-center items-center  md:w-[70%] w-full relative -top-20  ">



            <CountoUpAbout></CountoUpAbout>

            

            


        </div>

        
    </div>
    </section>

    {/* Our Story */}

    <section className="w-full flex justify-center items-center bg-white">

        <div className="md:w-[55%] w-full p-5  flex  flex-col md:pt-4 md:pb-4 gap-5">

            <div><h1 className="text-5xl">Our Story</h1></div>

            <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet how to manage. 
                 Malesuada proin libero nunc consequat interdum varius. Quam pellentesque nec nam aliquam sem et tortor consequat. Pellentesque adipiscing commodo elit at imperdiet. Semper auctor neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo donec enim diam. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Odio pellentesque diam volutpat commodo sed.
                 Elit sed vulputate mi sit amet mauris commodo quis imperdiet.
                </p>
                
            </div>

            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet how to manage. 
                 Malesuada proin libero nunc consequat interdum varius. Quam pellentesque nec nam aliquam sem et tortor consequat. Pellentesque adipiscing commodo elit at imperdiet. Semper auctor neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo donec enim diam. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Odio pellentesque diam volutpat commodo sed.
                 Elit sed vulputate mi sit amet mauris commodo quis imperdiet.
                </p>
            </div>


            <div><span>The Tidy Team</span></div>

            <div><h1 className="font-light italic text-3xl">Tidy Team</h1></div>



        </div>

    </section>



    {/* We are fully distributed, which means you can join us whenever you want. */}


    <section className="w-full bg-[#F1F5F9] md:h-screen h-fit  flex justify-center items-center flex-col">


        <div className="flex justify-center items-center ">

            <h1 className="text-6xl w-[70%] text-center">means you can join us whenever you want.</h1>

        </div>

        {/* Slider */}

        <div id="Slider" className="w-full">
            <ImageSlider></ImageSlider>

        </div>

        

    </section>

    {/* card of slider */}


    <section className="w-full h-screen flex justify-center items-center flex-col bg-[#F1F5F9] ">
        <div className="w-full">
            <FeaturesSection />
        </div>

        <div className="w-full flex justify-center items-center">
            <button className="bg-blue-700 text-white py-5 px-10">See Open Positions  </button>
        </div>
    </section>





        {/* What do we value? All sorts of things!  */}

        <section className="w-full flex justify-center items-center flex-col bg-white   md:h-200 h-380">


            <div className="w-full flex justify-center items-center flex-col gap-5  pt-5 pb-5  ">

                <div className=" w-full flex justify-center items-center   ">
                    <h1 className=" md:text-6xl text-4xl text-center  md:w-[70%] w-full">What do we value? All sorts of things!</h1>
                </div>


                <div className=" w-[80%] h-screen grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-5 ">

                   
                     <div className="w-full flex justify-center items-center flex-col gap-4 ">
                        <div className="w-full flex justify-center items-center"><img className="rounded-full md:w-[60%] w-full" src="https://preview.cruip.com/tidy/images/team-member-01.jpg" alt="CEO" title="CEO" /></div>
                        <div className="w-full">
                            <h1 className="text-center font-bold text-2xl">Mark Lamprecht</h1>
                            <h3 className="text-center text-[#2188EF]">CEO & Co-founde</h3>
                        </div>
                    </div>

                    <div className="w-full flex justify-center items-center flex-col gap-4 ">
                        <div className="w-full flex justify-center items-center"><img className="rounded-full md:w-[60%] w-full " src="https://preview.cruip.com/tidy/images/team-member-02.jpg" alt="CEO" title="CEO" /></div>
                        <div className="w-full">
                            <h1 className="text-center font-bold text-2xl">Elisa Nguyen</h1>
                            <h3 className="text-center text-[#2188EF] ">Co-Founder, Lead Engineer</h3>
                        </div>
                    </div>


                    <div className="w-full flex justify-center items-center flex-col gap-4 ">
                        <div className="w-full flex justify-center items-center"><img className="rounded-full md:w-[60%] w-full" src="https://preview.cruip.com/tidy/images/team-member-03.jpg" alt="CEO" title="CEO" /></div>
                        <div className="w-full">
                            <h1 className="text-center font-bold text-2xl">Travis Stephens</h1>
                            <h3 className="text-center text-[#2188EF] ">Senior Software Engineer</h3>
                        </div>
                    </div>

                    <div className="w-full flex justify-center items-center flex-col gap-4 ">
                        <div className="w-full flex justify-center items-center"><img className="rounded-full md:w-[60%] w-full" src="https://preview.cruip.com/tidy/images/team-member-04.jpg" alt="CEO" title="CEO" /></div>
                        <div className="w-full">
                            <h1 className="text-center font-bold text-2xl">Mark Lamprecht</h1>
                            <h3 className="text-center text-[#2188EF] ">CEO & Co-founde</h3>
                        </div>
                    </div>

                    <div className="w-full flex justify-center items-center flex-col gap-4 ">
                        <div className="w-full flex justify-center items-center"><img className="rounded-full md:w-[60%] w-full" src="https://preview.cruip.com/tidy/images/team-member-05.jpg" alt="CEO" title="CEO" /></div>
                        <div className="w-full">
                            <h1 className="text-center font-bold text-2xl">Mark Lamprecht</h1>
                            <h3 className="text-center text-[#2188EF] ">CEO & Co-founde</h3>
                        </div>
                    </div>

                    <div className="w-full flex justify-center items-center flex-col gap-4 ">
                        <div className="w-full flex justify-center items-center"><img className="rounded-full md:w-[60%] w-full" src="https://preview.cruip.com/tidy/images/team-member-06.jpg" alt="CEO" title="CEO" /></div>
                        <div className="w-full">
                            <h1 className="text-center font-bold text-2xl">Mark Lamprecht</h1>
                            <h3 className="text-center text-[#2188EF] ">CEO & Co-founde</h3>
                        </div>
                    </div>

                    <div className="w-full flex justify-center items-center flex-col gap-4 ">
                        <div className="w-full flex justify-center items-center"><img className="rounded-full md:w-[60%] w-full" src="https://preview.cruip.com/tidy/images/team-member-07.jpg" alt="CEO" title="CEO" /></div>
                        <div className="w-full">
                            <h1 className="text-center font-bold text-2xl">Mark Lamprecht</h1>
                            <h3 className="text-center text-[#2188EF] ">CEO & Co-founde</h3>
                        </div>
                    </div>

                    <div className="w-full flex justify-center items-center flex-col gap-4 ">
                        <div className="w-full flex justify-center items-center"><img className="rounded-full md:w-[60%] w-full" src="https://preview.cruip.com/tidy/images/team-member-08.jpg" alt="CEO" title="CEO" /></div>
                        <div className="w-full">
                            <h1 className="text-center font-bold text-2xl">Mark Lamprecht</h1>
                            <h3 className="text-center text-[#2188EF] ">CEO & Co-founde</h3>
                        </div>
                    </div>

                    

                </div>

            </div>

        </section>



        {/* We're fortunate to have incredible investors. */}

        <section className="w-full flex justify-center items-center flex-col h-screen ">
            <div className="w-full flex flex-col justify-center items-center gap-4 md:p-0 p-5 ">
                <div className="w-full flex justify-center items-center">
                    <h1 className="text-white text-center md:text-6xl text-4xl py-15">We're fortunate to have incredible investors.</h1>
                </div>
                <div className=" w-full md:w-[80%] grid md:grid-cols-4 grid-cols-2 justify-center items-center gap-2 " >
                    
                    <div className="md:p-5 md:w-full  w-full border border-[#90A1B9] p-4 flex justify-center items-center ">
                        <div className=" fill-current text-[#90A1B9] md:fill-current md:text-[#90A1B9]" class=" c1qcz cacg7 crg3v cwx3l cjwki c4naw cwvhy text-white">
                                <svg class="cdpgm cr3wy" width="94" height="30" viewBox="0 0 94 30"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M72.545 24.64c4.03 4.458 10.86 2.11 11.85.22l.24.605a10.143 10.143 0 0 1-3.76 3.193A10.505 10.505 0 0 1 76 29.748a10.305 10.305 0 0 1-9.37-6.222 9.49 9.49 0 0 1-.72-3.368v-.644c.01-.133.01-.267 0-.4a1.363 1.363 0 0 0 0-.23c.03-.1.015-.12.03-.275a5.24 5.24 0 0 1 .06-.43v-.084a9.793 9.793 0 0 1 3.06-5.567c1.63-1.501 3.7-2.44 5.905-2.679.83-.091 1.67-.091 2.5 0l.235.035c1.378.192 2.7.676 3.875 1.42A6.258 6.258 0 0 1 84 14.032c.337.646.553 1.35.635 2.074l-14 3.373.025.275a.969.969 0 0 1 0 .215l.04.324c.014.066.024.133.03.2.03.185.065.37.105.545l.04.185.08.315.05.17.08.274.08.225a7.15 7.15 0 0 0 1.38 2.434Zm6.37-8.3c1.39-.43 1.43-2.783.875-4.197a3.323 3.323 0 0 0-.5-.77c-.553-.666-1.427-.999-2.62-.999a4.662 4.662 0 0 0-2.43.66 6.394 6.394 0 0 0-1.945 1.799 8.933 8.933 0 0 0-1.28 2.598 9.834 9.834 0 0 0-.35 1.534l-.04.325c-.004.08-.004.16 0 .24v.075c-.035.235-.035.485-.035.734l8.325-1.998ZM47.56 24.847l.24.574a10.138 10.138 0 0 1-3.76 3.194 10.505 10.505 0 0 1-4.875 1.089 10.325 10.325 0 0 1-9.375-6.231c-2.62-6.212 1.83-13.837 9.94-13.708.945 0 6.065.555 7.61 4.553l-4.25 1a4.1 4.1 0 0 0 .21-1.405 3.856 3.856 0 0 0-.83-2.538c-.553-.667-1.427-1-2.62-1a4.667 4.667 0 0 0-2.43.66 6.418 6.418 0 0 0-1.91 1.794 8.933 8.933 0 0 0-1.28 2.598 10.488 10.488 0 0 0-.47 3.178 10.783 10.783 0 0 0 .5 3.403c.295.97.79 1.87 1.45 2.639 4.03 4.452 10.85 2.109 11.85.2Zm18.44 0 .26.604a10.143 10.143 0 0 1-3.76 3.193 10.505 10.505 0 0 1-4.885 1.09 10.315 10.315 0 0 1-9.37-6.256c-2.62-6.212 1.83-13.837 9.94-13.708.935 0 6.055.55 7.59 4.548l-4.225 1c.155-.452.228-.928.215-1.405.03-.92-.27-1.82-.845-2.538-.557-.667-1.43-1-2.62-1a4.662 4.662 0 0 0-2.43.66 6.463 6.463 0 0 0-1.91 1.814 8.928 8.928 0 0 0-1.275 2.598 10.488 10.488 0 0 0-.47 3.178 10.788 10.788 0 0 0 .5 3.403 7.29 7.29 0 0 0 1.435 2.619c4.03 4.452 10.85 2.109 11.85.2Zm24.765.89c.045 2.633 1.935 3.032 3.235 3.117v.455H83.515v-.455c1.305-.085 3.235-.48 3.235-3.208V4.023c0-1.25-1.815-1.75-2.025-1.75V1.71h.04l6-1.459v25.485ZM18.24.25s9.935 25.275 10.3 25.995a4.4 4.4 0 0 0 4.09 2.598v.455H20.495v-.455c.105 0 3-.055 3-1.854 0-1.664-3.26-9.554-3.29-9.629L8.09 20.313c-.495 1.205-2.32 5.607-2.32 6.726 0 1.844 3.53 1.804 3.53 1.804v.465H0v-.455c.74-.08 2.535-.08 3.8-2.578.385-.75 7.7-17.395 9.955-22.382.475-1.124-1.29-1.75-1.5-1.75v-.439h.045L18.24.25Zm1.545 16.09h-.005S15.17 4.908 14.915 4.314c-.17.36-6.255 14.611-6.315 14.756l11.185-2.728Z"></path>
                                </svg>
                            </div> 
                    </div>


                    <div className="md:p-5 md:w-full text-white  w-full border border-[#90A1B9] p-4 flex justify-center items-center ">
                        <div className=" fill-current text-[#90A1B9] md:fill-current md:text-[#90A1B9]" class=" c1qcz cacg7 crg3v cwx3l cjwki c4naw cwvhy text-white">
                                <svg class="cdpgm cr3wy" width="94" height="30" viewBox="0 0 94 30"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M72.545 24.64c4.03 4.458 10.86 2.11 11.85.22l.24.605a10.143 10.143 0 0 1-3.76 3.193A10.505 10.505 0 0 1 76 29.748a10.305 10.305 0 0 1-9.37-6.222 9.49 9.49 0 0 1-.72-3.368v-.644c.01-.133.01-.267 0-.4a1.363 1.363 0 0 0 0-.23c.03-.1.015-.12.03-.275a5.24 5.24 0 0 1 .06-.43v-.084a9.793 9.793 0 0 1 3.06-5.567c1.63-1.501 3.7-2.44 5.905-2.679.83-.091 1.67-.091 2.5 0l.235.035c1.378.192 2.7.676 3.875 1.42A6.258 6.258 0 0 1 84 14.032c.337.646.553 1.35.635 2.074l-14 3.373.025.275a.969.969 0 0 1 0 .215l.04.324c.014.066.024.133.03.2.03.185.065.37.105.545l.04.185.08.315.05.17.08.274.08.225a7.15 7.15 0 0 0 1.38 2.434Zm6.37-8.3c1.39-.43 1.43-2.783.875-4.197a3.323 3.323 0 0 0-.5-.77c-.553-.666-1.427-.999-2.62-.999a4.662 4.662 0 0 0-2.43.66 6.394 6.394 0 0 0-1.945 1.799 8.933 8.933 0 0 0-1.28 2.598 9.834 9.834 0 0 0-.35 1.534l-.04.325c-.004.08-.004.16 0 .24v.075c-.035.235-.035.485-.035.734l8.325-1.998ZM47.56 24.847l.24.574a10.138 10.138 0 0 1-3.76 3.194 10.505 10.505 0 0 1-4.875 1.089 10.325 10.325 0 0 1-9.375-6.231c-2.62-6.212 1.83-13.837 9.94-13.708.945 0 6.065.555 7.61 4.553l-4.25 1a4.1 4.1 0 0 0 .21-1.405 3.856 3.856 0 0 0-.83-2.538c-.553-.667-1.427-1-2.62-1a4.667 4.667 0 0 0-2.43.66 6.418 6.418 0 0 0-1.91 1.794 8.933 8.933 0 0 0-1.28 2.598 10.488 10.488 0 0 0-.47 3.178 10.783 10.783 0 0 0 .5 3.403c.295.97.79 1.87 1.45 2.639 4.03 4.452 10.85 2.109 11.85.2Zm18.44 0 .26.604a10.143 10.143 0 0 1-3.76 3.193 10.505 10.505 0 0 1-4.885 1.09 10.315 10.315 0 0 1-9.37-6.256c-2.62-6.212 1.83-13.837 9.94-13.708.935 0 6.055.55 7.59 4.548l-4.225 1c.155-.452.228-.928.215-1.405.03-.92-.27-1.82-.845-2.538-.557-.667-1.43-1-2.62-1a4.662 4.662 0 0 0-2.43.66 6.463 6.463 0 0 0-1.91 1.814 8.928 8.928 0 0 0-1.275 2.598 10.488 10.488 0 0 0-.47 3.178 10.788 10.788 0 0 0 .5 3.403 7.29 7.29 0 0 0 1.435 2.619c4.03 4.452 10.85 2.109 11.85.2Zm24.765.89c.045 2.633 1.935 3.032 3.235 3.117v.455H83.515v-.455c1.305-.085 3.235-.48 3.235-3.208V4.023c0-1.25-1.815-1.75-2.025-1.75V1.71h.04l6-1.459v25.485ZM18.24.25s9.935 25.275 10.3 25.995a4.4 4.4 0 0 0 4.09 2.598v.455H20.495v-.455c.105 0 3-.055 3-1.854 0-1.664-3.26-9.554-3.29-9.629L8.09 20.313c-.495 1.205-2.32 5.607-2.32 6.726 0 1.844 3.53 1.804 3.53 1.804v.465H0v-.455c.74-.08 2.535-.08 3.8-2.578.385-.75 7.7-17.395 9.955-22.382.475-1.124-1.29-1.75-1.5-1.75v-.439h.045L18.24.25Zm1.545 16.09h-.005S15.17 4.908 14.915 4.314c-.17.36-6.255 14.611-6.315 14.756l11.185-2.728Z"></path>
                                </svg>
                            </div> 
                    </div>



                    <div className="md:p-5 md:w-full text-white  w-full border border-[#90A1B9] p-4 flex justify-center items-center ">
                        <div className=" fill-current text-[#90A1B9] md:fill-current md:text-[#90A1B9]" class=" c1qcz cacg7 crg3v cwx3l cjwki c4naw cwvhy text-white">
                                <svg class="cdpgm cr3wy" width="94" height="30" viewBox="0 0 94 30"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M72.545 24.64c4.03 4.458 10.86 2.11 11.85.22l.24.605a10.143 10.143 0 0 1-3.76 3.193A10.505 10.505 0 0 1 76 29.748a10.305 10.305 0 0 1-9.37-6.222 9.49 9.49 0 0 1-.72-3.368v-.644c.01-.133.01-.267 0-.4a1.363 1.363 0 0 0 0-.23c.03-.1.015-.12.03-.275a5.24 5.24 0 0 1 .06-.43v-.084a9.793 9.793 0 0 1 3.06-5.567c1.63-1.501 3.7-2.44 5.905-2.679.83-.091 1.67-.091 2.5 0l.235.035c1.378.192 2.7.676 3.875 1.42A6.258 6.258 0 0 1 84 14.032c.337.646.553 1.35.635 2.074l-14 3.373.025.275a.969.969 0 0 1 0 .215l.04.324c.014.066.024.133.03.2.03.185.065.37.105.545l.04.185.08.315.05.17.08.274.08.225a7.15 7.15 0 0 0 1.38 2.434Zm6.37-8.3c1.39-.43 1.43-2.783.875-4.197a3.323 3.323 0 0 0-.5-.77c-.553-.666-1.427-.999-2.62-.999a4.662 4.662 0 0 0-2.43.66 6.394 6.394 0 0 0-1.945 1.799 8.933 8.933 0 0 0-1.28 2.598 9.834 9.834 0 0 0-.35 1.534l-.04.325c-.004.08-.004.16 0 .24v.075c-.035.235-.035.485-.035.734l8.325-1.998ZM47.56 24.847l.24.574a10.138 10.138 0 0 1-3.76 3.194 10.505 10.505 0 0 1-4.875 1.089 10.325 10.325 0 0 1-9.375-6.231c-2.62-6.212 1.83-13.837 9.94-13.708.945 0 6.065.555 7.61 4.553l-4.25 1a4.1 4.1 0 0 0 .21-1.405 3.856 3.856 0 0 0-.83-2.538c-.553-.667-1.427-1-2.62-1a4.667 4.667 0 0 0-2.43.66 6.418 6.418 0 0 0-1.91 1.794 8.933 8.933 0 0 0-1.28 2.598 10.488 10.488 0 0 0-.47 3.178 10.783 10.783 0 0 0 .5 3.403c.295.97.79 1.87 1.45 2.639 4.03 4.452 10.85 2.109 11.85.2Zm18.44 0 .26.604a10.143 10.143 0 0 1-3.76 3.193 10.505 10.505 0 0 1-4.885 1.09 10.315 10.315 0 0 1-9.37-6.256c-2.62-6.212 1.83-13.837 9.94-13.708.935 0 6.055.55 7.59 4.548l-4.225 1c.155-.452.228-.928.215-1.405.03-.92-.27-1.82-.845-2.538-.557-.667-1.43-1-2.62-1a4.662 4.662 0 0 0-2.43.66 6.463 6.463 0 0 0-1.91 1.814 8.928 8.928 0 0 0-1.275 2.598 10.488 10.488 0 0 0-.47 3.178 10.788 10.788 0 0 0 .5 3.403 7.29 7.29 0 0 0 1.435 2.619c4.03 4.452 10.85 2.109 11.85.2Zm24.765.89c.045 2.633 1.935 3.032 3.235 3.117v.455H83.515v-.455c1.305-.085 3.235-.48 3.235-3.208V4.023c0-1.25-1.815-1.75-2.025-1.75V1.71h.04l6-1.459v25.485ZM18.24.25s9.935 25.275 10.3 25.995a4.4 4.4 0 0 0 4.09 2.598v.455H20.495v-.455c.105 0 3-.055 3-1.854 0-1.664-3.26-9.554-3.29-9.629L8.09 20.313c-.495 1.205-2.32 5.607-2.32 6.726 0 1.844 3.53 1.804 3.53 1.804v.465H0v-.455c.74-.08 2.535-.08 3.8-2.578.385-.75 7.7-17.395 9.955-22.382.475-1.124-1.29-1.75-1.5-1.75v-.439h.045L18.24.25Zm1.545 16.09h-.005S15.17 4.908 14.915 4.314c-.17.36-6.255 14.611-6.315 14.756l11.185-2.728Z"></path>
                                </svg>
                            </div> 
                    </div>


                    <div className="md:p-5 md:w-full text-white  w-full border border-[#90A1B9] p-4 flex justify-center items-center ">
                        <div className=" fill-current text-[#90A1B9] md:fill-current md:text-[#90A1B9]" class=" c1qcz cacg7 crg3v cwx3l cjwki c4naw cwvhy text-white">
                                <svg class="cdpgm cr3wy" width="94" height="30" viewBox="0 0 94 30"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M72.545 24.64c4.03 4.458 10.86 2.11 11.85.22l.24.605a10.143 10.143 0 0 1-3.76 3.193A10.505 10.505 0 0 1 76 29.748a10.305 10.305 0 0 1-9.37-6.222 9.49 9.49 0 0 1-.72-3.368v-.644c.01-.133.01-.267 0-.4a1.363 1.363 0 0 0 0-.23c.03-.1.015-.12.03-.275a5.24 5.24 0 0 1 .06-.43v-.084a9.793 9.793 0 0 1 3.06-5.567c1.63-1.501 3.7-2.44 5.905-2.679.83-.091 1.67-.091 2.5 0l.235.035c1.378.192 2.7.676 3.875 1.42A6.258 6.258 0 0 1 84 14.032c.337.646.553 1.35.635 2.074l-14 3.373.025.275a.969.969 0 0 1 0 .215l.04.324c.014.066.024.133.03.2.03.185.065.37.105.545l.04.185.08.315.05.17.08.274.08.225a7.15 7.15 0 0 0 1.38 2.434Zm6.37-8.3c1.39-.43 1.43-2.783.875-4.197a3.323 3.323 0 0 0-.5-.77c-.553-.666-1.427-.999-2.62-.999a4.662 4.662 0 0 0-2.43.66 6.394 6.394 0 0 0-1.945 1.799 8.933 8.933 0 0 0-1.28 2.598 9.834 9.834 0 0 0-.35 1.534l-.04.325c-.004.08-.004.16 0 .24v.075c-.035.235-.035.485-.035.734l8.325-1.998ZM47.56 24.847l.24.574a10.138 10.138 0 0 1-3.76 3.194 10.505 10.505 0 0 1-4.875 1.089 10.325 10.325 0 0 1-9.375-6.231c-2.62-6.212 1.83-13.837 9.94-13.708.945 0 6.065.555 7.61 4.553l-4.25 1a4.1 4.1 0 0 0 .21-1.405 3.856 3.856 0 0 0-.83-2.538c-.553-.667-1.427-1-2.62-1a4.667 4.667 0 0 0-2.43.66 6.418 6.418 0 0 0-1.91 1.794 8.933 8.933 0 0 0-1.28 2.598 10.488 10.488 0 0 0-.47 3.178 10.783 10.783 0 0 0 .5 3.403c.295.97.79 1.87 1.45 2.639 4.03 4.452 10.85 2.109 11.85.2Zm18.44 0 .26.604a10.143 10.143 0 0 1-3.76 3.193 10.505 10.505 0 0 1-4.885 1.09 10.315 10.315 0 0 1-9.37-6.256c-2.62-6.212 1.83-13.837 9.94-13.708.935 0 6.055.55 7.59 4.548l-4.225 1c.155-.452.228-.928.215-1.405.03-.92-.27-1.82-.845-2.538-.557-.667-1.43-1-2.62-1a4.662 4.662 0 0 0-2.43.66 6.463 6.463 0 0 0-1.91 1.814 8.928 8.928 0 0 0-1.275 2.598 10.488 10.488 0 0 0-.47 3.178 10.788 10.788 0 0 0 .5 3.403 7.29 7.29 0 0 0 1.435 2.619c4.03 4.452 10.85 2.109 11.85.2Zm24.765.89c.045 2.633 1.935 3.032 3.235 3.117v.455H83.515v-.455c1.305-.085 3.235-.48 3.235-3.208V4.023c0-1.25-1.815-1.75-2.025-1.75V1.71h.04l6-1.459v25.485ZM18.24.25s9.935 25.275 10.3 25.995a4.4 4.4 0 0 0 4.09 2.598v.455H20.495v-.455c.105 0 3-.055 3-1.854 0-1.664-3.26-9.554-3.29-9.629L8.09 20.313c-.495 1.205-2.32 5.607-2.32 6.726 0 1.844 3.53 1.804 3.53 1.804v.465H0v-.455c.74-.08 2.535-.08 3.8-2.578.385-.75 7.7-17.395 9.955-22.382.475-1.124-1.29-1.75-1.5-1.75v-.439h.045L18.24.25Zm1.545 16.09h-.005S15.17 4.908 14.915 4.314c-.17.36-6.255 14.611-6.315 14.756l11.185-2.728Z"></path>
                                </svg>
                            </div> 
                    </div>



                    <div className="md:p-5 md:w-full text-white  w-full border border-[#90A1B9] p-4 flex justify-center items-center ">
                        <div className=" fill-current text-[#90A1B9] md:fill-current md:text-[#90A1B9]" class=" c1qcz cacg7 crg3v cwx3l cjwki c4naw cwvhy text-white">
                                <svg class="cdpgm cr3wy" width="94" height="30" viewBox="0 0 94 30"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M72.545 24.64c4.03 4.458 10.86 2.11 11.85.22l.24.605a10.143 10.143 0 0 1-3.76 3.193A10.505 10.505 0 0 1 76 29.748a10.305 10.305 0 0 1-9.37-6.222 9.49 9.49 0 0 1-.72-3.368v-.644c.01-.133.01-.267 0-.4a1.363 1.363 0 0 0 0-.23c.03-.1.015-.12.03-.275a5.24 5.24 0 0 1 .06-.43v-.084a9.793 9.793 0 0 1 3.06-5.567c1.63-1.501 3.7-2.44 5.905-2.679.83-.091 1.67-.091 2.5 0l.235.035c1.378.192 2.7.676 3.875 1.42A6.258 6.258 0 0 1 84 14.032c.337.646.553 1.35.635 2.074l-14 3.373.025.275a.969.969 0 0 1 0 .215l.04.324c.014.066.024.133.03.2.03.185.065.37.105.545l.04.185.08.315.05.17.08.274.08.225a7.15 7.15 0 0 0 1.38 2.434Zm6.37-8.3c1.39-.43 1.43-2.783.875-4.197a3.323 3.323 0 0 0-.5-.77c-.553-.666-1.427-.999-2.62-.999a4.662 4.662 0 0 0-2.43.66 6.394 6.394 0 0 0-1.945 1.799 8.933 8.933 0 0 0-1.28 2.598 9.834 9.834 0 0 0-.35 1.534l-.04.325c-.004.08-.004.16 0 .24v.075c-.035.235-.035.485-.035.734l8.325-1.998ZM47.56 24.847l.24.574a10.138 10.138 0 0 1-3.76 3.194 10.505 10.505 0 0 1-4.875 1.089 10.325 10.325 0 0 1-9.375-6.231c-2.62-6.212 1.83-13.837 9.94-13.708.945 0 6.065.555 7.61 4.553l-4.25 1a4.1 4.1 0 0 0 .21-1.405 3.856 3.856 0 0 0-.83-2.538c-.553-.667-1.427-1-2.62-1a4.667 4.667 0 0 0-2.43.66 6.418 6.418 0 0 0-1.91 1.794 8.933 8.933 0 0 0-1.28 2.598 10.488 10.488 0 0 0-.47 3.178 10.783 10.783 0 0 0 .5 3.403c.295.97.79 1.87 1.45 2.639 4.03 4.452 10.85 2.109 11.85.2Zm18.44 0 .26.604a10.143 10.143 0 0 1-3.76 3.193 10.505 10.505 0 0 1-4.885 1.09 10.315 10.315 0 0 1-9.37-6.256c-2.62-6.212 1.83-13.837 9.94-13.708.935 0 6.055.55 7.59 4.548l-4.225 1c.155-.452.228-.928.215-1.405.03-.92-.27-1.82-.845-2.538-.557-.667-1.43-1-2.62-1a4.662 4.662 0 0 0-2.43.66 6.463 6.463 0 0 0-1.91 1.814 8.928 8.928 0 0 0-1.275 2.598 10.488 10.488 0 0 0-.47 3.178 10.788 10.788 0 0 0 .5 3.403 7.29 7.29 0 0 0 1.435 2.619c4.03 4.452 10.85 2.109 11.85.2Zm24.765.89c.045 2.633 1.935 3.032 3.235 3.117v.455H83.515v-.455c1.305-.085 3.235-.48 3.235-3.208V4.023c0-1.25-1.815-1.75-2.025-1.75V1.71h.04l6-1.459v25.485ZM18.24.25s9.935 25.275 10.3 25.995a4.4 4.4 0 0 0 4.09 2.598v.455H20.495v-.455c.105 0 3-.055 3-1.854 0-1.664-3.26-9.554-3.29-9.629L8.09 20.313c-.495 1.205-2.32 5.607-2.32 6.726 0 1.844 3.53 1.804 3.53 1.804v.465H0v-.455c.74-.08 2.535-.08 3.8-2.578.385-.75 7.7-17.395 9.955-22.382.475-1.124-1.29-1.75-1.5-1.75v-.439h.045L18.24.25Zm1.545 16.09h-.005S15.17 4.908 14.915 4.314c-.17.36-6.255 14.611-6.315 14.756l11.185-2.728Z"></path>
                                </svg>
                            </div> 
                    </div>



                    <div className="md:p-5 md:w-full text-white  w-full border border-[#90A1B9] p-4 flex justify-center items-center ">
                        <div className=" fill-current text-[#90A1B9] md:fill-current md:text-[#90A1B9]" class=" c1qcz cacg7 crg3v cwx3l cjwki c4naw cwvhy text-white">
                                <svg class="cdpgm cr3wy" width="94" height="30" viewBox="0 0 94 30"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M72.545 24.64c4.03 4.458 10.86 2.11 11.85.22l.24.605a10.143 10.143 0 0 1-3.76 3.193A10.505 10.505 0 0 1 76 29.748a10.305 10.305 0 0 1-9.37-6.222 9.49 9.49 0 0 1-.72-3.368v-.644c.01-.133.01-.267 0-.4a1.363 1.363 0 0 0 0-.23c.03-.1.015-.12.03-.275a5.24 5.24 0 0 1 .06-.43v-.084a9.793 9.793 0 0 1 3.06-5.567c1.63-1.501 3.7-2.44 5.905-2.679.83-.091 1.67-.091 2.5 0l.235.035c1.378.192 2.7.676 3.875 1.42A6.258 6.258 0 0 1 84 14.032c.337.646.553 1.35.635 2.074l-14 3.373.025.275a.969.969 0 0 1 0 .215l.04.324c.014.066.024.133.03.2.03.185.065.37.105.545l.04.185.08.315.05.17.08.274.08.225a7.15 7.15 0 0 0 1.38 2.434Zm6.37-8.3c1.39-.43 1.43-2.783.875-4.197a3.323 3.323 0 0 0-.5-.77c-.553-.666-1.427-.999-2.62-.999a4.662 4.662 0 0 0-2.43.66 6.394 6.394 0 0 0-1.945 1.799 8.933 8.933 0 0 0-1.28 2.598 9.834 9.834 0 0 0-.35 1.534l-.04.325c-.004.08-.004.16 0 .24v.075c-.035.235-.035.485-.035.734l8.325-1.998ZM47.56 24.847l.24.574a10.138 10.138 0 0 1-3.76 3.194 10.505 10.505 0 0 1-4.875 1.089 10.325 10.325 0 0 1-9.375-6.231c-2.62-6.212 1.83-13.837 9.94-13.708.945 0 6.065.555 7.61 4.553l-4.25 1a4.1 4.1 0 0 0 .21-1.405 3.856 3.856 0 0 0-.83-2.538c-.553-.667-1.427-1-2.62-1a4.667 4.667 0 0 0-2.43.66 6.418 6.418 0 0 0-1.91 1.794 8.933 8.933 0 0 0-1.28 2.598 10.488 10.488 0 0 0-.47 3.178 10.783 10.783 0 0 0 .5 3.403c.295.97.79 1.87 1.45 2.639 4.03 4.452 10.85 2.109 11.85.2Zm18.44 0 .26.604a10.143 10.143 0 0 1-3.76 3.193 10.505 10.505 0 0 1-4.885 1.09 10.315 10.315 0 0 1-9.37-6.256c-2.62-6.212 1.83-13.837 9.94-13.708.935 0 6.055.55 7.59 4.548l-4.225 1c.155-.452.228-.928.215-1.405.03-.92-.27-1.82-.845-2.538-.557-.667-1.43-1-2.62-1a4.662 4.662 0 0 0-2.43.66 6.463 6.463 0 0 0-1.91 1.814 8.928 8.928 0 0 0-1.275 2.598 10.488 10.488 0 0 0-.47 3.178 10.788 10.788 0 0 0 .5 3.403 7.29 7.29 0 0 0 1.435 2.619c4.03 4.452 10.85 2.109 11.85.2Zm24.765.89c.045 2.633 1.935 3.032 3.235 3.117v.455H83.515v-.455c1.305-.085 3.235-.48 3.235-3.208V4.023c0-1.25-1.815-1.75-2.025-1.75V1.71h.04l6-1.459v25.485ZM18.24.25s9.935 25.275 10.3 25.995a4.4 4.4 0 0 0 4.09 2.598v.455H20.495v-.455c.105 0 3-.055 3-1.854 0-1.664-3.26-9.554-3.29-9.629L8.09 20.313c-.495 1.205-2.32 5.607-2.32 6.726 0 1.844 3.53 1.804 3.53 1.804v.465H0v-.455c.74-.08 2.535-.08 3.8-2.578.385-.75 7.7-17.395 9.955-22.382.475-1.124-1.29-1.75-1.5-1.75v-.439h.045L18.24.25Zm1.545 16.09h-.005S15.17 4.908 14.915 4.314c-.17.36-6.255 14.611-6.315 14.756l11.185-2.728Z"></path>
                                </svg>
                            </div> 
                    </div>



                    <div className="md:p-5 md:w-full text-white  w-full border border-[#90A1B9] p-4 flex justify-center items-center ">
                        <div className=" fill-current text-[#90A1B9] md:fill-current md:text-[#90A1B9]" class=" c1qcz cacg7 crg3v cwx3l cjwki c4naw cwvhy text-white">
                                <svg class="cdpgm cr3wy" width="94" height="30" viewBox="0 0 94 30"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M72.545 24.64c4.03 4.458 10.86 2.11 11.85.22l.24.605a10.143 10.143 0 0 1-3.76 3.193A10.505 10.505 0 0 1 76 29.748a10.305 10.305 0 0 1-9.37-6.222 9.49 9.49 0 0 1-.72-3.368v-.644c.01-.133.01-.267 0-.4a1.363 1.363 0 0 0 0-.23c.03-.1.015-.12.03-.275a5.24 5.24 0 0 1 .06-.43v-.084a9.793 9.793 0 0 1 3.06-5.567c1.63-1.501 3.7-2.44 5.905-2.679.83-.091 1.67-.091 2.5 0l.235.035c1.378.192 2.7.676 3.875 1.42A6.258 6.258 0 0 1 84 14.032c.337.646.553 1.35.635 2.074l-14 3.373.025.275a.969.969 0 0 1 0 .215l.04.324c.014.066.024.133.03.2.03.185.065.37.105.545l.04.185.08.315.05.17.08.274.08.225a7.15 7.15 0 0 0 1.38 2.434Zm6.37-8.3c1.39-.43 1.43-2.783.875-4.197a3.323 3.323 0 0 0-.5-.77c-.553-.666-1.427-.999-2.62-.999a4.662 4.662 0 0 0-2.43.66 6.394 6.394 0 0 0-1.945 1.799 8.933 8.933 0 0 0-1.28 2.598 9.834 9.834 0 0 0-.35 1.534l-.04.325c-.004.08-.004.16 0 .24v.075c-.035.235-.035.485-.035.734l8.325-1.998ZM47.56 24.847l.24.574a10.138 10.138 0 0 1-3.76 3.194 10.505 10.505 0 0 1-4.875 1.089 10.325 10.325 0 0 1-9.375-6.231c-2.62-6.212 1.83-13.837 9.94-13.708.945 0 6.065.555 7.61 4.553l-4.25 1a4.1 4.1 0 0 0 .21-1.405 3.856 3.856 0 0 0-.83-2.538c-.553-.667-1.427-1-2.62-1a4.667 4.667 0 0 0-2.43.66 6.418 6.418 0 0 0-1.91 1.794 8.933 8.933 0 0 0-1.28 2.598 10.488 10.488 0 0 0-.47 3.178 10.783 10.783 0 0 0 .5 3.403c.295.97.79 1.87 1.45 2.639 4.03 4.452 10.85 2.109 11.85.2Zm18.44 0 .26.604a10.143 10.143 0 0 1-3.76 3.193 10.505 10.505 0 0 1-4.885 1.09 10.315 10.315 0 0 1-9.37-6.256c-2.62-6.212 1.83-13.837 9.94-13.708.935 0 6.055.55 7.59 4.548l-4.225 1c.155-.452.228-.928.215-1.405.03-.92-.27-1.82-.845-2.538-.557-.667-1.43-1-2.62-1a4.662 4.662 0 0 0-2.43.66 6.463 6.463 0 0 0-1.91 1.814 8.928 8.928 0 0 0-1.275 2.598 10.488 10.488 0 0 0-.47 3.178 10.788 10.788 0 0 0 .5 3.403 7.29 7.29 0 0 0 1.435 2.619c4.03 4.452 10.85 2.109 11.85.2Zm24.765.89c.045 2.633 1.935 3.032 3.235 3.117v.455H83.515v-.455c1.305-.085 3.235-.48 3.235-3.208V4.023c0-1.25-1.815-1.75-2.025-1.75V1.71h.04l6-1.459v25.485ZM18.24.25s9.935 25.275 10.3 25.995a4.4 4.4 0 0 0 4.09 2.598v.455H20.495v-.455c.105 0 3-.055 3-1.854 0-1.664-3.26-9.554-3.29-9.629L8.09 20.313c-.495 1.205-2.32 5.607-2.32 6.726 0 1.844 3.53 1.804 3.53 1.804v.465H0v-.455c.74-.08 2.535-.08 3.8-2.578.385-.75 7.7-17.395 9.955-22.382.475-1.124-1.29-1.75-1.5-1.75v-.439h.045L18.24.25Zm1.545 16.09h-.005S15.17 4.908 14.915 4.314c-.17.36-6.255 14.611-6.315 14.756l11.185-2.728Z"></path>
                                </svg>
                            </div> 
                    </div>



                    <div className="md:p-5 md:w-full text-white  w-full border border-[#90A1B9] p-4 flex justify-center items-center ">
                        <div className=" fill-current text-[#90A1B9] md:fill-current md:text-[#90A1B9]" class=" c1qcz cacg7 crg3v cwx3l cjwki c4naw cwvhy text-white">
                                <svg class="cdpgm cr3wy" width="94" height="30" viewBox="0 0 94 30"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M72.545 24.64c4.03 4.458 10.86 2.11 11.85.22l.24.605a10.143 10.143 0 0 1-3.76 3.193A10.505 10.505 0 0 1 76 29.748a10.305 10.305 0 0 1-9.37-6.222 9.49 9.49 0 0 1-.72-3.368v-.644c.01-.133.01-.267 0-.4a1.363 1.363 0 0 0 0-.23c.03-.1.015-.12.03-.275a5.24 5.24 0 0 1 .06-.43v-.084a9.793 9.793 0 0 1 3.06-5.567c1.63-1.501 3.7-2.44 5.905-2.679.83-.091 1.67-.091 2.5 0l.235.035c1.378.192 2.7.676 3.875 1.42A6.258 6.258 0 0 1 84 14.032c.337.646.553 1.35.635 2.074l-14 3.373.025.275a.969.969 0 0 1 0 .215l.04.324c.014.066.024.133.03.2.03.185.065.37.105.545l.04.185.08.315.05.17.08.274.08.225a7.15 7.15 0 0 0 1.38 2.434Zm6.37-8.3c1.39-.43 1.43-2.783.875-4.197a3.323 3.323 0 0 0-.5-.77c-.553-.666-1.427-.999-2.62-.999a4.662 4.662 0 0 0-2.43.66 6.394 6.394 0 0 0-1.945 1.799 8.933 8.933 0 0 0-1.28 2.598 9.834 9.834 0 0 0-.35 1.534l-.04.325c-.004.08-.004.16 0 .24v.075c-.035.235-.035.485-.035.734l8.325-1.998ZM47.56 24.847l.24.574a10.138 10.138 0 0 1-3.76 3.194 10.505 10.505 0 0 1-4.875 1.089 10.325 10.325 0 0 1-9.375-6.231c-2.62-6.212 1.83-13.837 9.94-13.708.945 0 6.065.555 7.61 4.553l-4.25 1a4.1 4.1 0 0 0 .21-1.405 3.856 3.856 0 0 0-.83-2.538c-.553-.667-1.427-1-2.62-1a4.667 4.667 0 0 0-2.43.66 6.418 6.418 0 0 0-1.91 1.794 8.933 8.933 0 0 0-1.28 2.598 10.488 10.488 0 0 0-.47 3.178 10.783 10.783 0 0 0 .5 3.403c.295.97.79 1.87 1.45 2.639 4.03 4.452 10.85 2.109 11.85.2Zm18.44 0 .26.604a10.143 10.143 0 0 1-3.76 3.193 10.505 10.505 0 0 1-4.885 1.09 10.315 10.315 0 0 1-9.37-6.256c-2.62-6.212 1.83-13.837 9.94-13.708.935 0 6.055.55 7.59 4.548l-4.225 1c.155-.452.228-.928.215-1.405.03-.92-.27-1.82-.845-2.538-.557-.667-1.43-1-2.62-1a4.662 4.662 0 0 0-2.43.66 6.463 6.463 0 0 0-1.91 1.814 8.928 8.928 0 0 0-1.275 2.598 10.488 10.488 0 0 0-.47 3.178 10.788 10.788 0 0 0 .5 3.403 7.29 7.29 0 0 0 1.435 2.619c4.03 4.452 10.85 2.109 11.85.2Zm24.765.89c.045 2.633 1.935 3.032 3.235 3.117v.455H83.515v-.455c1.305-.085 3.235-.48 3.235-3.208V4.023c0-1.25-1.815-1.75-2.025-1.75V1.71h.04l6-1.459v25.485ZM18.24.25s9.935 25.275 10.3 25.995a4.4 4.4 0 0 0 4.09 2.598v.455H20.495v-.455c.105 0 3-.055 3-1.854 0-1.664-3.26-9.554-3.29-9.629L8.09 20.313c-.495 1.205-2.32 5.607-2.32 6.726 0 1.844 3.53 1.804 3.53 1.804v.465H0v-.455c.74-.08 2.535-.08 3.8-2.578.385-.75 7.7-17.395 9.955-22.382.475-1.124-1.29-1.75-1.5-1.75v-.439h.045L18.24.25Zm1.545 16.09h-.005S15.17 4.908 14.915 4.314c-.17.36-6.255 14.611-6.315 14.756l11.185-2.728Z"></path>
                                </svg>
                            </div> 
                    </div>



                    

                    



                    
                </div>
            </div>
        </section>



        {/* Want to be part of the journey? */}

        <section className="bg-[#F1F5F9] w-full h-screen flex justify-center gap-5 items-center flex-col">

            <div className="w-full md:w-[70%] flex flex-col justify-center items-center gap-10">
                <h1 className="w-full text-center md:text-7xl text-5xl  font-bold">Want to be part of the journey?</h1>
                <p className="w-full text-center text-2xl  ">We are always open to talk to great people who want to help us shape the future of work
                    , and we have job openings all over the world.</p>

            
            </div>

            <div className="w-full text-center flex justify-center items-center flex-row ">
                <button className="bg-blue-600 text-white md:w-[20%] md:h-13 w-[60%] h-20 flex justify-center items-center flex-row gap-3" >See Open Positions <ArrowRight></ArrowRight> </button>
            </div>

        </section>
    </>

   
  );
}