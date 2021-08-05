import React from 'react'
import image from "../Images/image-header-mobile.jpg";
export default function Card() {
    return (
        <div 
        className="
        max-w-lg mx-4 my-10 block bg-satdarkblue rounded-lg shadow-md overflow-hidden  font-Inter
        md:flex md:mx-auto md:my-28 md:max-w-4xl md:flex-row-reverse
        ">
            <div className="bg-darkviolet h-52 w-full 
            md:flex-shrink-0 md:w-80 md:h-auto
            ">
            <img src={image} className="w-full h-full opacity-50 object-cover"/>
            </div>
            <div 
            className="
            p-8
           md:block
           md:ml-14
            ">
            <div className="md:mt-4 ">
                <h1 className="text-white text-xl font-bold text-center 
                md:text-left max-w-xs">Get <span className="text-darkviolet">insights</span> that help your business grow.</h1>
                <p className="text-white pt-4 text-center font-thin opacity-50 text-xs leading-relaxed
                md:text-left">Discover the benefits of data analytics and make better decisions regarding revenue,customer experience ,and overall efficiency</p>
            </div>
            <div className="pt-4 text-white 
            md:flex
            items-center
            justify-start
            ">
                <div className="text-center md:pr-6 md:pt-0 md:pb-0 md:pl-0
                 md:text-left">
                    <h1 className="font-bold p-1">10k+</h1>
                    <p className="opacity-50 uppercase text-xs tracking-widest">companies</p>
                </div>
                <div className="text-center xs:p-2 md:pr-6 md:pt-0 md:pb-0 md:pl-0
                md:text-left">
                    <h1 className="font-bold p-1">314</h1>
                    <p className="opacity-50 uppercase text-xs tracking-widest">templates</p>
                </div>
                <div className="text-center xs:p-2 md:pr-6 md:pt-0 md:pb-0 md:pl-0
                md:text-left">
                    <h1 className="font-bold p-1">12M+</h1>
                    <p className="opacity-50 uppercase text-xs tracking-widest">Queries</p>
                </div>
            </div>
            </div>
           
            
             
            
        </div>
    )
}
