import Logoblue from "../assets/img/Logo-blue.png"
import { Twitter, Facebook, Github, Send } from "lucide-react";

export default function Footer() {

    return <>
    <footer className=" w-full p-5  md:pr-10 md:pl-10 bg-white  md:h-85  flex justify-center items-center flex-col " >

        <div className="
        grid grid-cols-2 
        md:w-full md:grid  md:grid-cols-6 md:pt-8 md:pb-8 md:gap-5 " >

            <div className="flex flex-col col-span-2 gap-5">
                <img src={Logoblue} className="w-[10%]" alt="Cuivre" />
                <h1 className="text-[21px] font-bold ">The smarter way to start your next idea.</h1>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="font-bold">How it works</h2>

                <a href="#" className="hover:text-blue-600 text-1xl ">Overview</a>
                <a href="#" className="hover:text-blue-600 text-1xl ">Pricing</a>
                <a href="#" className="hover:text-blue-600 text-1xl ">Service Areas</a>
                
            </div>

            <div className="flex flex-col gap-4">
                <h2 className="font-bold">Resources</h2>

                <a href="#" className="hover:text-blue-600 text-1xl ">Customer Stories</a>
                <a href="#" className="hover:text-blue-600 text-1xl ">Knowledge Base</a>
                <a href="#" className="hover:text-blue-600 text-1xl ">Contact Us</a>

                
            </div>
           

           <div className="flex flex-col gap-4">
                <h2 className="font-bold">Products</h2>

               <a href="#" className="hover:text-blue-600 text-1xl ">Corporate Partners</a>
                <a href="#" className="hover:text-blue-600 text-1xl ">Secure Identity</a>
                <a href="#" className="hover:text-blue-600 text-1xl ">Legal Help</a>
                <a href="#" className="hover:text-blue-600 text-1xl ">First Capital</a>
                
            </div>


            <div className="flex flex-col gap-4">
                <h2 className="font-bold">How it works</h2>

                <a href="#" className="hover:text-blue-600 text-1xl ">About Us</a>
                <a href="#" className="hover:text-blue-600 text-1xl ">Careers</a>
                <a href="#" className="hover:text-blue-600 text-1xl ">Terms of Use</a>
                
            </div>

        </div>
        <div className=" w-full h-20 flex justify-between items-center flex-col md:flex-row border-t border-gray-300">
            <div> 
                <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} ABBASS CHAHBOUNE. All rights reserved.
        </p> 
        </div>



        <div className="flex gap-4 mt-4 md:mt-0">
          
          <a href="#" className="text-blue-500 hover:text-blue-300 transition">
            <Twitter size={20} />
          </a>

          <a href="#" className="text-blue-500 hover:text-blue-300 transition">
            <Facebook size={20} />
          </a>

          <a href="#" className="text-blue-500 hover:text-blue-300 transition">
            <Github size={20} />
          </a>

          <a href="#" className="text-blue-500 hover:text-blue-300 transition">
            <Send size={20} />
          </a>

        </div>

            
        </div>

        
        

    </footer>
    </>
    
}