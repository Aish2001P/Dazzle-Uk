import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function Home() {
    return (
        <>
            <Header />
            <section className="lg:px-[60px] px-[20px] overflow-hidden bg-[#FCFBF5] lg:pt-[200px] pt-[100px]">
                <div className="row  ">

                    <div className="lg:px-[60px] px-[20px]  lg:pb-[60px] pb-[20px]">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="lg:pb-[50px] pb-[20px]">

                                    <div className=" lg:pb-[50px] pb-[20px]">
                                        <div className="flex items-center gap-4 ">

                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] m-0 p-0  ">SOLUTIONS</p>
                                        <p className="border !border-[#DCDCDC] w-full p-0 m-0 "></p>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="col-lg-8">
                                                <p className="lg:text-[2.8vw] text-[6vw] lg:leading-[3vw] leading-[7vw] lg:pt-[20px] pt-[10px] text-[#000]  font-[bo]">Modular Exhibition Stands</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] m-0 ">Dazzle Exhibitions & Events specializes in designing modular exhibition stands, offering a wide variety of options. From small, self-assembly displays to larger, structural designs, we have a solution to fit any need. Our team will work with you to customize a stand that meets your specific business requirements.</p>
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-[sb] m-0 pt-4">More Details about this Service. 👇</p>
                                        </div>
                                    </div>
                                </div>
                                <Image className=" mb-4" src="/image/32.png" alt="logo" width={1830} height={750} />
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#FCFBF5] text-[#000] lg:pt-[80px] pt-[10px] lg:pb-[100px] pb-[40px] ">
                <div className="row items-center">
                    <div className="col-lg-8">
                        <p className="lg:text-[2.2vw] text-[5vw] lg:leading-[3vw] leading-[6vw]  font-[sb]">Why Modular Exhibition Stands?</p>

                        <div className="col-lg-10 lg:pb-[0px] pb-[30px]">
                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] lg:pt-[20px] pt-[10px] ">As the premier provider of modular exhibition stands in India, we craft innovative concepts that effectively communicate your brand and achieve your desired outcomes. Our modular trade show displays are an excellent choice for companies and organizations that frequently participate in trade shows and exhibitions throughout the year.</p>

                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[10px] pt-[10px] ">Dazzle Exhibitions & Events is a world-renowned company that specializes in designing and manufacturing modular display systems. Each exhibition stand design is tailored to your specifications, thereby creating the best possible platform to promote your brand. Our modular exhibition stands come in a variety of shapes and sizes to accommodate all budgets. These systems are constructed with aluminum frames and infill panels, and can easily be reconfigured to suit your business needs. The added benefit of these modular systems is that the graphics are interchangeable, allowing you to easily update your branding, messaging, or overall appearance without having to purchase a new display for each event.</p>

                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[10px] pt-[10px] lg:pb-[20px] pb-[10px]">Modular display stands are an excellent choice for those looking to assemble their own exhibition stand. Modular Exhibition Stands are able to provide complete flexibility in terms of the design and finish of your exhibition stand. They are lightweight and easy to transport, fitting into most vehicles. Simply tell us when and where you need the stand, and we'll take care of the rest with our immaculate range of modular options. These stands also come with a compact storage unit to minimize costs. The modular design allows for versatility and adaptability to various floor plans, resulting in a high return on investment. Fill out our modular display stands requirements form and let our team find the perfect fit for you.</p>

                            <button className="border !border-[#000] rounded-5 py-1.5 px-1 bg-[#000]">
                                <div className="flex gap-2 items-center">
                                    <p className="m-0 lg:text-[0.7vw] text-[2.8vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] uppercase text-[#fff] lg:pl-3 pl-2">GET FREE QUOTATION</p>
                                    <Image className="lg:w-8 w-5" src="/image/whitearrow.svg" alt="logo" width={1830} height={750} />
                                </div>
                            </button>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">

                            <Image className=" mb-4" src="/image/33.png" alt="logo" width={1830} height={750} />

                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[60px] px-[20px] overflow-hidden bg-[#FCFBF5] ">
                <div className="row p-0 m-0 ">
                   
                            <div className="lg:px-[60px] px-[20px] lg:pt-[60px] pt-[60px] lg:pb-[60px] pb-[40px]">
                                <div className="row">

                                    <div className="col-lg-4">
                                        <Image className="mb-4" src="/image/26.png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="col-lg-4">
                                        <Image className="mb-4" src="/image/27.png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="col-lg-4">
                                        <Image className="mb-4" src="/image/28.png" alt="logo" width={1830} height={750} />
                                    </div>

                                </div>

                                <div className="row lg:pt-[30px] pt-[10px]">

                                    <div className="col-lg-4">
                                        <Image className="mb-4" src="/image/29.png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="col-lg-4">
                                        <Image className="mb-4" src="/image/30.png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="col-lg-4">
                                        <Image className="mb-4" src="/image/31.png" alt="logo" width={1830} height={750} />
                                    </div>

                                </div>
                            </div>
                        </div>

                    
            </section>


            <Footer />
        </>
    );
}


