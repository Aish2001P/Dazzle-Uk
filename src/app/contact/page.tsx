import Image from "next/image";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Form from "../components/form"

export default function Home() {
    return (
        <>
            <Header />

            <section className=" overflow-hidden bg-[#FCFBF5] ">
                <div className="row p-0 m-0 ">
                    <div className="relative w-full p-0 m-0 ">
                        <Image className="h-full object-cover w-full absolute " src="/image/Vector.png" alt="logo" width={1830} height={750} />
                        <div className="relative  top-[0px]  z-10 ">


                            <div className="lg:px-[60px] px-[20px] lg:pt-[200px] pt-[90px] lg:pb-[100px] pb-[50px]">
                                <div className="row items-center">
                                    <div className="col-lg-6">
                                        <div className="col-lg-10">
                                            <div className="flex items-center gap-3 ">
                                                <Image className="lg:w-5 w-3" src="/image/Icon.svg" alt="logo" width={1830} height={750} />
                                                <p className="lg:text-[1.1vw] text-[3vw] lg:leading-[1.8vw] leading-[4vw] uppercase m-0 text-[#707070]">Contact us</p>
                                            </div>
                                            <p className="lg:text-[3vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] lg:pt-[30px] pt-[10px] text-[#000]  ">Let’s Connect</p>
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] m-0 text-[#333333]">Whether you're planning an event, exhibiting at an expo, or building a custom stall, our team is here to bring your vision to life. Connect with us today and let’s create something exceptional together.</p>

                                            <p className="lg:text-[0.8vw] text-[2.8vw] lg:leading-[1.5vw] leading-[4vw] m-0 font-[sb] text-[#7c7b7b] lg:pt-[40px] pt-[20px] lg:pb-[10px] pb-[10px]">Email Address</p>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] m-0  ">info@dazzlexhibition.com </p>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] m-0 pt-1 ">expos@dazzlexhibition.com</p>

                                            <div className="lg:flex justify-between">
                                                <div className="col-lg-5">
                                                    <p className="lg:text-[0.8vw] text-[2.8vw] lg:leading-[1.5vw] leading-[4vw] m-0 font-[sb] text-[#7c7b7b] lg:pt-[40px] pt-[20px] lg:pb-[10px] pb-[10px]">Location</p>
                                                    <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] m-0  ">Gate No. 2, Delhi Press, A-30, PIR Colony, Sahibabad Industrial Area Site 4, Sahibabad, Ghaziabad, Uttar Pradesh 201010 </p>
                                                </div>
                                                <div className="col-lg-5">
                                                    <p className="lg:text-[0.8vw] text-[2.8vw] lg:leading-[1.5vw] leading-[4vw] m-0 font-[sb] text-[#7c7b7b] lg:pt-[40px] pt-[20px] lg:pb-[10px] pb-[10px]">Working Hours</p>
                                                    <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] m-0  ">Mon – Sat: 9:00 AM – 8:00 PM</p>
                                                     <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] m-0 pt-1 ">Sun: Closed</p>
                                                </div>
                                            </div>

                                            <p className="lg:text-[0.8vw] text-[2.8vw] lg:leading-[1.5vw] leading-[4vw] m-0 font-[sb] text-[#7c7b7b] lg:pt-[40px] pt-[20px] lg:pb-[10px] pb-[10px]">Follow us</p>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] m-0  ">Facebook </p>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] m-0 ">Instagram</p>
                                             <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] m-0 pt-1 ">Twitter</p>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] m-0 pt-1 ">Linkedin</p>

                                        </div>
                                    </div>

                                    <div className="col-lg-6 lg:pt-[0px] pt-[60px]">
                                        <Form />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <Footer />
        </>
    );
}



