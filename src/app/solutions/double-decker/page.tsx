import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function Home() {
    return (
        <>
            <Header />
            <section className="lg:px-[60px] px-[20px] overflow-hidden bg-[#FCFBF5] lg:pt-[200px] pt-[90px]">
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
                                                <p className="lg:text-[2.8vw] text-[6vw] lg:leading-[3vw] leading-[7vw] lg:pt-[20px] pt-[10px] text-[#000]  font-[bo]">Double Decker Exhibition Stands</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] m-0 ">Dazzle Exhibitions & Events is the premier provider of double decker exhibition stands. Our designs are simple and efficient in planning and construction, allowing for quick installation and an attractive addition to your exhibit space. Not only do our double decker exhibition stands expand your display area, but also offer increased opportunities for branding and product promotion. </p>
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-[sb] m-0 pt-4">More Details about this Service. 👇</p>
                                        </div>
                                    </div>
                                </div>
                                <Image className=" mb-4" src="/image/34.png" alt="logo" width={1830} height={750} />
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#FCFBF5] text-[#000] lg:pt-[80px] pt-[10px] lg:pb-[100px] pb-[40px] ">
                <div className="row items-center">
                    <div className="col-lg-8">
                        <p className="lg:text-[2.2vw] text-[5vw] lg:leading-[3vw] leading-[6vw]  font-[sb]">Why Double Decker Exhibition Stands?</p>

                        <div className="col-lg-10 lg:pb-[0px] pb-[30px]">
                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] lg:pt-[20px] pt-[10px] ">Looking for a way to get a clear response from your attendees? You've come to the right place. We have extensive experience in designing and building double deck exhibits. Our team will work with you to create the perfect double decker exhibition stand solution that meets your needs.</p>

                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[10px] pt-[10px] ">Our double decker exhibition booth stands are top-of-the-line and come with pre-engineered decks, stairs, and bridges, as well as custom graphics to fit your specific needs. These stands not only increase your exhibition space and branding opportunities, but also offer unique ways to showcase your promotional displays and interact with attendees. Make a big impression at any exhibition hall or venue with our double deck booth.</p>

                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[10px] pt-[10px] lg:pb-[20px] pb-[10px]">Double deck exhibits feature two tiers, you can use the upper tier for all sort of meetings and quality networking time away from the main exhibition, and keeps the buzz going on the lower section. Our double deck exhibits are a fusion of artistic design and modern architecture. We also provide custom-made double deck booths to fit your business needs. The large size of a double decker exhibition stand enhances your visibility. Contact us to discuss your double deck trade show booth project with our technical team.</p>

                            <button className="border !border-[#000] rounded-5 py-1.5 px-3 bg-[#000]">
                                <div className="flex gap-2 items-center">
                                    <p className="m-0 lg:text-[0.7vw] text-[2.8vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] uppercase text-[#fff] ">GET FREE QUOTATION</p>
                                    <Image className="lg:w-8 w-5" src="/image/whitearrow.svg" alt="logo" width={1830} height={750} />
                                </div>
                            </button>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">

                            <Image className=" mb-4" src="/image/35.png" alt="logo" width={1830} height={750} />

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

